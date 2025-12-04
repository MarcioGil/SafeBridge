import { NextResponse } from 'next/server';
import { z } from 'zod';

const forwardSchema = z.object({
  occurrenceId: z.string(),
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = forwardSchema.parse(body);

    // TODO: Implementar envio de e-mail via serviço externo (Mailgun/SendGrid/Postmark)
    // Exemplo fictício:
    // await sendEmail(data.email, { occurrenceId: data.occurrenceId });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
