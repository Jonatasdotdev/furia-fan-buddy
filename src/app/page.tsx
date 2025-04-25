import Chat from '@/components/Chat'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-400 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">🔥 Bem-vindo ao FURIA Buddy 🔥</h1>
        <Chat />
      </div>
    </main>
  )
}
