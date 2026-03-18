import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, message, budget } = await request.json()

    if (!name || !company || !email || !message) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Kontaktformular <onboarding@resend.dev>',
      to: 'tim@goebel-partner.de',
      replyTo: email,
      subject: `Neue Anfrage von ${name} – ${company}`,
      text: `
Name: ${name}
Unternehmen: ${company}
E-Mail: ${email}
Telefon: ${phone || '–'}
Budget: ${budget || '–'}

Nachricht:
${message}
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 })
  }
}
