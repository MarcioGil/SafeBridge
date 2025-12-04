import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { z } from 'zod';

const occurrenceSchema = z.object({
  type: z.string(),
  description: z.string().min(10),
  city: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  proofs: z.array(z.string()).optional(), // URLs dos arquivos
  consent: z.boolean().optional(),
  anonymous: z.boolean().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = occurrenceSchema.parse(body);

    // TODO: Validar autenticação do usuário
    // TODO: Implementar upload seguro via signed URL

    const occurrence = await prisma.occurrence.create({
      data: {
        ...data,
        status: 'recebida',
      },
    });

    return NextResponse.json({ success: true, occurrence });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
