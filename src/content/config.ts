// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const support = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    pledgeTitle: z.string().optional(),
    pledge: z.number().optional().nullable(),
    text: z.string(),
    left: z.number().optional().nullable(),
    active: z.boolean(),
    reward: z.boolean()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'support': support,
};