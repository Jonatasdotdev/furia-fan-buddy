import Chat from '@/components/Chat'

export default function Home() {
  return (
    <>
      {/* Static FURIA-style header */}
      <header className="w-full bg-black text-white shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/Furiaicon.png"
              alt="FURIA Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-extrabold text-xl tracking-wide">FURIA</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#" className="hover:text-gray-400 transition">ESPORTS</a>
            <a href="#" className="hover:text-gray-400 transition">LOJA</a>
            <a href="#" className="hover:text-gray-400 transition">SOBRE</a>
            <a href="#" className="hover:text-gray-400 transition">CONTATO</a>
          </nav>
          <div className="hidden md:block">
            <button className="bg-black-400 text-white px-4 py-1 rounded-full font-bold hover:bg-gray-300 transition">
              ENTRAR
            </button>
          </div>
        </div>
      </header>
      <main className="min-h-screen bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-400 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          
          <Chat />
        </div>
      </main>
    </>
  )
}
