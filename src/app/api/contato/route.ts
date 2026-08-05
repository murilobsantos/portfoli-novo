import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Endpoint placeholder para evitar falhas de build.
  // Se você for integrar envio real (nodemailer), faça com variáveis de ambiente seguras.
  let body: unknown = null

  try {
    body = await request.json()
  } catch {
    // ignore - corpo inválido
  }

  return NextResponse.json(
    {
      ok: true,
      message: 'Endpoint /api/contato em modo placeholder. Envie o payload para integração real.',
      received: body,
    },
    { status: 200 }
  )
}

