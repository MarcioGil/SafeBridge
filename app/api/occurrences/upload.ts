
import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';
import { prisma } from '../../../lib/prisma';

const uploadSchema = z.object({
  filename: z.string(),
  mimetype: z.string().regex(/^(image\/jpeg|image\/png|application\/pdf|audio\/mp3)$/),
  size: z.number().max(10 * 1024 * 1024), // 10MB
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = uploadSchema.parse(body);

    // Gera nome seguro
    const safeName = `${randomUUID()}-${Date.now()}`;

    // Upload direto (simulação, pois não há arquivo binário no body)
    // Em produção, use multipart/form-data e extraia o arquivo do body
    // Aqui, apenas salva metadados e gera URL temporária

    // Salva metadados no banco
    await prisma.$executeRaw`INSERT INTO Proofs (name, original, mimetype, size) VALUES (${safeName}, ${data.filename}, ${data.mimetype}, ${data.size})`;

    // Gerar URL temporária de acesso
    const { data: signedData, error: signedError } = await supabase.storage
      .from('provas')
      .createSignedUrl(safeName, 60 * 5); // 5 minutos

    if (signedError) throw new Error('Erro ao gerar signed URL');

    const metadata = {
      name: safeName,
      original: data.filename,
      mimetype: data.mimetype,
      size: data.size,
      hash: null,
    };

    return NextResponse.json({ success: true, signedUrl: signedData.signedUrl, metadata });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
