import { z } from 'zod';

export const occurrenceSchema = z.object({
  type: z.string(),
  description: z.string().min(10),
  city: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  proofs: z.array(z.string()).optional(), // URLs dos arquivos
  consent: z.boolean().optional(),
  anonymous: z.boolean().optional(),
});
