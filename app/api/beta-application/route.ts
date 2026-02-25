import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const N8N_WEBHOOK_URL =
      "https://bot.snedkerautomations.com/webhook/d7893952-6618-4ecb-a384-623bcd04512e"

    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: `n8n webhook failed: ${res.status}` },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "server error" },
      { status: 500 }
    )
  }
}
