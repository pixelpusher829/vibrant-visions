/**
 * Progressive enhancement for `form[data-form]`.
 *
 * With a form endpoint configured (PUBLIC_FORM_ENDPOINT), submissions are posted
 * with fetch and the result is shown inline. Without one, the form opens the
 * visitor's email app with the message pre-filled, so it still works.
 */
const setStatus = (
  form: HTMLFormElement,
  message: string,
  kind: "success" | "error",
) => {
  const status = form.querySelector<HTMLElement>("[role=status]");
  if (!status) return;
  status.textContent = message;
  status.dataset.kind = kind;
};

const toMailto = (form: HTMLFormElement, data: FormData) => {
  const subject = String(
    data.get("subject") || form.dataset.subject || "Website enquiry",
  );
  const body = [...data.entries()]
    .filter(
      ([key, value]) => !key.startsWith("_") && key !== "subject" && value,
    )
    .map(([key, value]) => `${key[0].toUpperCase()}${key.slice(1)}: ${value}`)
    .join("\n\n");
  return `${form.action.split("?")[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

document
  .querySelectorAll<HTMLFormElement>("form[data-form]")
  .forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      if (data.get("_gotcha")) return; // honeypot filled in, most likely a bot

      if (form.action.startsWith("mailto:")) {
        window.location.href = toMailto(form, data);
        setStatus(
          form,
          "Your email app should open with your message ready to send.",
          "success",
        );
        return;
      }

      const button = form.querySelector<HTMLButtonElement>(
        "button[type=submit]",
      )!;
      button.disabled = true;
      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        setStatus(
          form,
          form.dataset.success ?? "Thanks! We'll be in touch soon.",
          "success",
        );
      } catch {
        setStatus(
          form,
          "Sorry, something went wrong. Please try again, or email us directly.",
          "error",
        );
      } finally {
        button.disabled = false;
      }
    });
  });

// "Reserve a spot" / membership buttons pre-fill the contact form's subject.
document
  .querySelectorAll<HTMLAnchorElement>("[data-enquiry]")
  .forEach((link) => {
    link.addEventListener("click", () => {
      const subject =
        document.querySelector<HTMLInputElement>("#contact-subject");
      if (subject) subject.value = link.dataset.enquiry!;
    });
  });
