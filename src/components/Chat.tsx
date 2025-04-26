'use client'
import { useState, useRef, useEffect } from 'react'
import { GoogleGenAI } from "@google/genai";

export default function Chat() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Inicializa a API do Google GenAI mover para um env depois
  const ai = new GoogleGenAI({ apiKey: "AIzaSyAz4fzrCnkws1BzKR3B9qBzfFyPZCHqBk0" });
  
  // Sistema de fallback local
  const getLocalResponse = async (message: string) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })
      
      if (!response.ok) {
        throw new Error('Erro no servidor local')
      }
      
      const data = await response.json()
      return data.reply
    } catch (error) {
      console.error('Erro no fallback local:', error)
      return 'Sistema temporariamente indisponível. Tente novamente mais tarde. 😢'
    }
  }

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage = { sender: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    
    try {
      const prompt = `Você é o FURIA Buddy, um bot torcedor fanático da FURIA e especialista em CS. Responda de maneira animada, usando gírias e informações corretas e tenta nao fazer texto grande: ${input}`;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });
      
      const botReply = response.text;
      
      if (!botReply || botReply.length < 5) {
        throw new Error('Resposta da IA insatisfatória');
      }
      
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    } catch (error) {
      console.warn('Erro na IA principal, usando fallback:', error);
      const fallbackReply = await getLocalResponse(input);
      setMessages((prev) => [...prev, { sender: 'bot', text: fallbackReply }]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    inputRef.current?.focus()
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
          <div className="text-sm text-gray-400">Online</div>
        </div>
      </div>
      {/* Caixa branca */}
      <div className="flex flex-col flex-1 bg-white px-6 pb-8 pt-4 overflow-y-auto">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 my-4">
            Faça uma pergunta sobre a FURIA ou CS! 🎮
          </div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-2xl max-w-xs mb-2 ${
              msg.sender === 'user'
                ? 'bg-black text-white self-end'
                : 'bg-gray-300 text-black self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="bg-gray-300 text-black self-start p-3 rounded-2xl max-w-xs">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      {/* Input */}
      <div className="flex gap-2 p-4 bg-white">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !isLoading && sendMessage()}
          className="flex-1 border border-gray-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
          placeholder="Digite sua mensagem..."
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          className={`${isLoading ? 'bg-gray-500' : 'bg-black hover:bg-gray-800'} text-white px-6 py-2 rounded-full font-semibold transition`}
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </div>
  )
}