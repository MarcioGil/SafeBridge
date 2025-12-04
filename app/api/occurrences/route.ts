import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { occurrenceSchema } from '../../../lib/occurrenceSchema';

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
