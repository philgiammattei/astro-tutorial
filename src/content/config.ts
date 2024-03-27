// Import utilities from "astro:content"
import { z, defineCollection } from "astro:content";
// Define a 'type' and 'schema' for each collection

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  })
});

// export a single 'collections' object to register your collections
export const collections = {
  posts: postsCollection,
};