import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const tutorials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tutorials" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      level: z.enum(["Beginner", "Intermediate", "Advanced"]),
      duration: z.string(),
      image: image(),
      alt: z.string(),
      order: z.number(),
      materials: z.array(z.string()).default([]),
    }),
});

export const collections = { tutorials };
