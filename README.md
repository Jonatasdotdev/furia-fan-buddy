
# 🦁 FURIA Buddy - Chatbot Fanático pela FURIA

URIA Buddy é um chatbot criado especialmente para os fãs da FURIA Esports! Ele responde de forma animada, com gírias, emoção e muito espírito torcedor. Seja pra saber sobre campeonatos, a line de CS, produtos da loja ou a história da organização... o FURIA Buddy tá sempre pronto pra trocar ideia.

## ✨ Features

- 🎯 Integração com Google GenAI (Gemini 2.0 Flash)
- 🦁 Fallback local inteligente para respostas rápidas
- 🎨 Front-end estilizado com TailwindCSS
- ⚡ Mensagens dinâmicas e carregamento suave


## 🛠️ Tecnologias

- Next.js 14
- React + Hooks (useState, useRef, useEffect)
- TailwindCSS
- Google Generative AI (Gemini API)
- API local com Next.js (Route Handler)

## 🚀 Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/furia-buddy.git
cd furia-buddy
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env.local` com a sua API key do Google GenAI:

```bash
NEXT_PUBLIC_GENAI_API_KEY=your_api_key_here
```


4. Rode o servidor:

```bash
npm run dev
```

5. Acesse no navegador:

```
http://localhost:3000
```

## 📚 Estrutura de Pastas

```
/components
  Chat.tsx     --> Componente principal do chat
/pages
  /api
    chat/route.ts --> API local de fallback
  index.tsx    --> Página principal com o Chat
/public
  FuriaBuddyicon.png --> Ícone do bot
```

## 💬 Como funciona o fallback local?

Se o bot IA falhar ou demorar, o sistema usa uma API `/api/chat` que reconhece padrões no texto do usuário para gerar respostas categorizadas (CS, loja, torcida, jogadores, história, etc).

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/57b896f2-f47a-4aff-b6a8-69e17d223ae7)

![image](https://github.com/user-attachments/assets/b55e6a4f-85f2-49a0-8cef-0b7d78faf02c)


## 🌐 Acesse o Projeto Online

FURIA Buddy já está no ar! Acesse aqui:  
🔗 [furia-fan-buddy.vercel.app](https://furia-fan-buddy.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/Jonatasdotdev/furia-fan-buddy)


---
📈 Melhorias Futuras (Ideias)

    Reconhecimento de perfil de fã (iniciante, veterano, colecionador)

    Modo quiz ou perguntas sobre a FURIA

    Suporte a voz (speech-to-text e text-to-speech)

    Integração com Twitter/X e Instagram da FURIA

    Suporte a outros idiomas (EN/ES)

    Painel com estatísticas de uso dos tópicos mais perguntados

🧠 Contexto

Este projeto foi criado como parte do processo seletivo para a vaga de Assistente de Engenharia de Software na FURIA, com foco em demonstrar:

    Habilidade técnica com frameworks modernos

    Experiência com APIs, integração com IA e fallback resiliente

    Interesse em produtos digitais voltados à comunidade gamer

## 📜 License

Este projeto é apenas para fins educacionais e de demonstração.  
FURIA® é uma marca registrada e este projeto não é afiliado oficialmente.
