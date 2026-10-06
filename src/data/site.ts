/**
 * Site content lives here so it can be updated without touching markup.
 *
 * Anything marked `TODO(client)` is placeholder copy that should be confirmed
 * or replaced with the club's real details before launch.
 */
import type { ImageMetadata } from "astro";
import type { IconName } from "../components/icons";

import event1 from "../assets/images/event-1.jpg";
import event2 from "../assets/images/event-2.jpg";
import event3 from "../assets/images/event-3.jpg";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import gallery7 from "../assets/images/gallery-7.jpg";
import gallery8 from "../assets/images/gallery-8.jpg";
import gallery9 from "../assets/images/gallery-9.jpg";
import gallery10 from "../assets/images/gallery-10.jpg";

export const site = {
  name: "Vibrant Visions",
  tagline: "Unleashing Creativity, Embracing Expression",
  description:
    "Vibrant Visions is a community art club offering open studio nights, hands-on workshops, life drawing and member exhibitions for artists of every level.",
  // TODO(client): confirm contact details.
  phone: "+1 (514) 235-9794",
  email: "info@vibrantvisions.com",
  address: {
    street: "123 Main Street",
    city: "City",
    region: "State",
    postalCode: "ZIP",
    country: "US",
  },
  hours: [
    { days: "Tuesday – Thursday", time: "4pm – 10pm" },
    { days: "Saturday", time: "10am – 6pm" },
    { days: "Sunday", time: "12pm – 5pm" },
  ],
  // TODO(client): replace with real profile URLs, or remove any that don't apply.
  socials: [
    { label: "Instagram", icon: "instagram", href: "https://instagram.com/" },
    { label: "Facebook", icon: "facebook", href: "https://facebook.com/" },
    { label: "YouTube", icon: "youtube", href: "https://youtube.com/" },
  ],
  /**
   * Endpoint that receives form submissions (e.g. a Formspree or Basin form URL).
   * Set PUBLIC_FORM_ENDPOINT at build time. When it's empty, forms fall back to
   * opening the visitor's email app with the message pre-filled.
   */
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? "",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Tutorials", href: "#tutorials" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export const offerings: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "palette",
    title: "Open studio nights",
    text: "Easels, tables and good light three evenings a week. Bring a project or start one.",
  },
  {
    icon: "brush",
    title: "Hands-on workshops",
    text: "Small-group sessions led by working artists, from acrylics to printmaking to digital.",
  },
  {
    icon: "frame",
    title: "Member exhibitions",
    text: "Two group shows a year give every member a place to hang their work in public.",
  },
  {
    icon: "chat",
    title: "Critique circles",
    text: "Friendly, structured feedback sessions to help you see your work with fresh eyes.",
  },
];

type GalleryItem = {
  image: ImageMetadata;
  alt: string;
  layout?: "wide" | "tall";
};

export const gallery: GalleryItem[] = [
  {
    image: gallery1,
    alt: "Artist spray-painting a bold red and green mural",
    layout: "wide",
  },
  {
    image: gallery2,
    alt: "Painter adding purple detail to a flowing line drawing",
  },
  {
    image: gallery3,
    alt: "Artist working on a geometric street mural",
    layout: "tall",
  },
  { image: gallery4, alt: "Artist painting a large collage-style wall piece" },
  {
    image: gallery5,
    alt: "Smiling painter at her desk with a jar of brushes",
    layout: "wide",
  },
  {
    image: gallery6,
    alt: "Artist standing in front of a large expressive canvas",
    layout: "wide",
  },
  { image: gallery7, alt: "Detailed pencil drawing of a crow in a sketchbook" },
  {
    image: gallery8,
    alt: "Painter standing in his studio surrounded by canvases",
    layout: "tall",
  },
  { image: gallery9, alt: "Artist seated beside his painting on an easel" },
  {
    image: gallery10,
    alt: "Chalk artists creating a large street portrait",
    layout: "wide",
  },
];

type Event = {
  title: string;
  /** ISO date (YYYY-MM-DD). Events are hidden once their end date has passed. */
  start: string;
  end?: string;
  time: string;
  location: string;
  price: string;
  description: string;
  image: ImageMetadata;
  alt: string;
};

// TODO(client): replace with the real season calendar.
export const events: Event[] = [
  {
    title: "Artistic Expression Workshop",
    start: "2026-10-24",
    time: "10am – 1pm",
    location: "Main studio",
    price: "$35 · free for members",
    description:
      "Loosen up and find your own voice. We'll work through quick, playful exercises in colour, gesture and mark-making, then put them together in a finished piece you take home. All materials included.",
    image: event1,
    alt: "Table covered in paint tubes, spray cans and brushes",
  },
  {
    title: "Colors of the World: Member Exhibition",
    start: "2026-11-13",
    end: "2026-11-22",
    time: "Opening night Nov 13, 6pm – 9pm",
    location: "Gallery space",
    price: "Free entry",
    description:
      "Our autumn group show brings together more than forty member works in painting, print, photography and mixed media. Join us for the opening night to meet the artists.",
    image: event2,
    alt: "Visitors discussing large abstract paintings in a white gallery",
  },
  {
    title: "Life Drawing with Professional Models",
    start: "2026-12-05",
    time: "2pm – 5pm",
    location: "Main studio",
    price: "$20 · $10 for members",
    description:
      "An untutored session with short warm-up poses building to a long pose. Easels, boards and paper are provided. Bring your favourite drawing materials.",
    image: event3,
    alt: "Person sketching in a notebook by lantern light",
  },
];

// TODO(client): set real pricing and benefits.
export const plans = [
  {
    name: "Friend",
    price: "Free",
    period: "",
    description: "Stay in the loop and drop in when it suits you.",
    features: [
      "Monthly newsletter",
      "Pay-as-you-go workshops and events",
      "Invites to exhibition openings",
    ],
    cta: "Join the list",
    featured: false,
  },
  {
    name: "Studio Member",
    price: "$25",
    period: "/ month",
    description:
      "Everything you need to make art regularly, with people who get it.",
    features: [
      "Unlimited open studio nights",
      "Free entry to monthly workshops",
      "Discounted life drawing",
      "Wall space in both member exhibitions",
      "Critique circles",
    ],
    cta: "Become a member",
    featured: true,
  },
  {
    name: "Patron",
    price: "$60",
    period: "/ month",
    description:
      "Support the club and help fund bursaries for emerging artists.",
    features: [
      "Everything in Studio Member",
      "Bring a guest to any event",
      "Reserved storage shelf",
      "Name listed on our patrons wall",
    ],
    cta: "Become a patron",
    featured: false,
  },
];

// TODO(client): these are placeholder quotes. Replace with real member testimonials
// (with their permission) before launch.
export const testimonials = [
  {
    quote:
      "I hadn't picked up a brush in fifteen years. Six months of open studio nights later, I had a piece in the autumn show.",
    name: "Maya R.",
    role: "Studio member",
  },
  {
    quote:
      "The critique circles are the best part. Honest, kind feedback from people who actually care about your work.",
    name: "Daniel O.",
    role: "Studio member",
  },
  {
    quote:
      "The life drawing sessions are well run and the models are excellent. It's become the highlight of my month.",
    name: "Priya S.",
    role: "Patron",
  },
];

export const faqs = [
  {
    question: "Do I need any experience to join?",
    answer:
      "Not at all. Our members range from complete beginners to working professionals. Workshops are labelled by level, and open studio is a relaxed space to work at your own pace.",
  },
  {
    question: "What materials do I need to bring?",
    answer:
      "Workshops include all materials unless the listing says otherwise. For open studio nights we provide easels, tables, water and basic supplies. Bring your own paints, paper and anything specific to your project.",
  },
  {
    question: "Can I come along before signing up?",
    answer:
      "Yes. Your first open studio night is free. Just drop in during opening hours, or get in touch and we'll make sure someone is there to show you around.",
  },
  {
    question: "Can I cancel my membership?",
    answer:
      "Memberships are month to month, and you can cancel at any time before your next billing date.",
  },
  {
    question: "Do you host private or corporate sessions?",
    answer:
      "We do. We run private workshops for teams, birthdays and community groups. Send us a message with your group size and preferred dates and we'll put together a quote.",
  },
];
