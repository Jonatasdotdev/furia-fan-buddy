import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  let reply = 'Não entendi, pode repetir?'

  // Regras básicas para "perfil do fã"
  if (/cs|counter-strike|jogo/i.test(message)) {
    reply = 'Você curte o competitivo! Já viu a line atual de CS da FURIA?'
  } else if (/loja|camisa|produto/i.test(message)) {
    reply = 'Você parece interessado na loja! Temos produtos novos toda semana.'
  } else if (/sou fã/i.test(message)) {
    reply = 'Fã que é fã segue a FURIA até no TikTok 😎'
  } else if (/quem é|line/i.test(message)) {
    reply = 'A lineup atual de CS tem jogadores como KSCERATO e yuurih.'
  } else {
    reply = `Fala, FURIOSO! Ainda não tenho resposta pra isso, mas estou aprendendo!`
  }

  return NextResponse.json({ reply })
}
