'use client'

import { useState, useRef, useEffect } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { sender: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()
      setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }])
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="flex flex-col rounded-2xl shadow-2xl h-[550px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 bg-black text-white">
        <img 
          src="/FuriaBuddyicon.png" 
          alt="FURIA Buddy"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-bold">FURIA Buddy</div>
          <div className="text-sm text-black-200">Online</div>
        </div>
      </div>

      {/* Caixa branca */}
      <div className="flex flex-col flex-1 bg-white px-6 pb-8 pt-4 overflow-y-auto">
         {/* Mensagens aqui */}
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`p-3 rounded-2xl max-w-xs ${
              msg.sender === 'user' 
                ? 'bg-black text-white self-end' 
                : 'bg-gray-300 text-black self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 p-4 bg-white">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 border border-gray-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
          placeholder="Digite sua mensagem..."
        />
        <button
          onClick={sendMessage}
          className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}