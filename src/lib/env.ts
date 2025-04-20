import { z } from 'zod'

export const envSchema = z.object({
  server: z.object({
    DATABASE_URL: z.string(),
  }),

  client: z.object({
    NEXT_PUBLIC_APP_URL: z.string().url(),
  }),

  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
})

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  server: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  client: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
})
