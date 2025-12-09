import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  res.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'"
  );
  res.headers.set("X-Frame-Options", "DENY");

  // Estratégia de cache HTTP para rotas estáticas
  if (request.nextUrl.pathname.startsWith('/public') || request.nextUrl.pathname.endsWith('.jpg') || request.nextUrl.pathname.endsWith('.png')) {
    response.headers.set('Cache-Control', 'public, max-age=86400, immutable');
  }

  // Estratégia de cache para rotas dinâmicas (exemplo)
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'private, max-age=60, must-revalidate');
  }
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "no-referrer");
  // res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains"); // HSTS em produção

  return res;
}
