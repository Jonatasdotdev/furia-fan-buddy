
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  
  if (!message) {
    return NextResponse.json({ reply: 'Fala aí! Não entendi sua mensagem. Tá tudo bem?' }, { status: 400 })
  }
  
  // Converter mensagem para minúsculas 
  const lowerMessage = message.toLowerCase()
  
  // Objeto com categorias e suas regras de match
  const categories = {
    // CS:GO e jogos relacionados
    cs: {
      patterns: [/(cs|counter-strike|competitivo|jogo|fps|mapa|dust|inferno|mirage|awp|ak|rifle)/i],
      responses: [
        'O CS é nossa paixão! FURIA sempre no rush B! 🎯',
        'Mano, FURIA no CS é tradição! Sempre dando um show nos servers! 🔥',
        'Joga muito! Nossa line de CS dá orgulho demais, FURIOSO! 👊',
        'CS é vida! E FURIA é referência mundial, tá ligado? 🌎',
        'Smoke, flash e BOOM! A FURIA domina qualquer mapa! 💣'
      ]
    },
    
    // Loja e produtos
    loja: {
      patterns: [/(loja|camisa|produto|roupa|comprar|merch|mercadoria|jersey)/i],
      responses: [
        'Na loja da FURIA tem sempre novidade insana! Já deu uma olhada nos últimos drops? 😎',
        'As jerseys da FURIA são estilosas demais! Passa na loja e confere! 👕',
        'Quer representar a FURIA com estilo? A loja oficial tem tudo o que você precisa! 🛒',
        'Para os FURIOSOS de verdade, tem sempre um produto especial na loja! Confere lá! 🔥',
        'Produtos exclusivos e de alta qualidade para representar nosso esquadrão! 🦁'
      ]
    },
    
    // Fãs e torcida
    torcida: {
      patterns: [/(sou fã|amo a furia|admiro|torcer|torcedor|furioso|amor|paixão)/i],
      responses: [
        'É disso que a gente gosta! Família FURIA unida é imbatível! 🔥',
        'FURIOSO é diferenciado! Nossa torcida é a melhor do mundo! 🌎',
        'Todo o nosso esforço é por vocês, FURIOSOS! Valeu pela energia positiva! ⚡',
        'Sem os FURIOSOS a gente não chegava tão longe! Vocês são parte da equipe! 🦁',
        'A torcida da FURIA é diferente! Vocês são demais! 💪'
      ]
    },
    
    // Jogadores e line-up
    jogadores: {
      patterns: [/(quem é|linha|lineup|line|escalação|jogadores|time|elenco|atleta|player)/i],
      responses: [
        'A escalação da FURIA tá sempre se renovando pra ser a melhor! Confere nas redes oficiais pra ficar por dentro. 🏆',
        'Nossa line tem uns monstros! Talento puro representando o Brasil! 🇧🇷',
        'Os caras da FURIA são diferenciados! Treinamento duro todo dia pra representar! 💯',
        'Nosso elenco é montado com os melhores, sempre visando títulos! 🏆',
        'Jogador da FURIA tem que ter sangue no olho! Nossa line é puro talento e dedicação! 🔥'
      ]
    },
    
    // Campeonatos e torneios
    torneios: {
      patterns: [/(campeonato|torneio|major|competição|copa|liga|mundial|classificatória|playoff|venceu|ganhou|título)/i],
      responses: [
        'FURIA sempre chega forte nos campeonatos! Estamos sempre na briga! 🏆',
        'Cada torneio é uma chance de mostrar porque a FURIA é temida mundialmente! 🌎',
        'Majors são nosso objetivo! A FURIA tá sempre se preparando pra dominar! 💪',
        'Nossa história em campeonatos é de superação! Sempre dando o máximo! 🔝',
        'FURIA nos playoffs é diferenciado! A energia muda completamente! ⚡'
      ]
    },
    
    // História e organização
    historia: {
      patterns: [/(história|fundação|quando|começou|criada|criação|fundador|dono|organização|org)/i],
      responses: [
        'A FURIA nasceu pra revolucionar os esports! E olha onde chegamos! 🚀',
        'Uma organização que valoriza o talento brasileiro e leva nosso nome pro mundo! 🇧🇷',
        'Da base até o topo, a FURIA sempre foi sobre evolução e compromisso com a excelência! 📈',
        'A história da FURIA é de quebrar barreiras e superar limites! 💥',
        'Fundada com a missão de elevar o nome do Brasil nos esports mundiais! E tamo conseguindo! 🌎'
      ]
    },
    
    // Saudações e cumprimentos
    saudacao: {
      patterns: [/(oi|olá|ola|eae|fala|salve|bom dia|boa tarde|boa noite|tudo bem|como vai|blz|beleza)/i],
      responses: [
        'Fala, FURIOSO! Tudo certo? No que posso ajudar hoje? 🦁',
        'Salve! FURIA na veia! O que tá pegando? 🔥',
        'Opa! Beleza? Sempre à disposição pra falar da melhor org do mundo! 🌎',
        'Eae! Tamo junto! O que você quer saber sobre a FURIA hoje? 💪',
        'Salve, Furioso! Partiu falar sobre nossa Furia? 🦁'
      ]
    }
  }
  
  // Verificar cada categoria
  for (const [category, data] of Object.entries(categories)) {
    for (const pattern of data.patterns) {
      if (pattern.test(lowerMessage)) {
        // Escolher uma resposta aleatória desta categoria
        const randomIndex = Math.floor(Math.random() * data.responses.length)
        return NextResponse.json({ reply: data.responses[randomIndex] })
      }
    }
  }
  
  
  const defaultResponses = [
    'Fala, FURIOSO! Não entendi muito bem. Pode perguntar sobre CS, nossa line, campeonatos ou produtos! 🦁',
    'Hmm, não saquei. Tenta perguntar sobre a FURIA, nossos jogos ou a loja! 🤔',
    'FURIA na veia! Mas não entendi sua pergunta. Que tal falar sobre CS ou nossos jogadores? 🎮',
    'Tamo junto, FURIOSO! Mas não consegui entender. Pergunta sobre campeonatos ou sobre nossa história! 🏆',
    'Não peguei a ideia. Mas estou aqui pra falar sobre a melhor org do mundo! Tenta de novo! 💪'
  ]
  
  const randomIndex = Math.floor(Math.random() * defaultResponses.length)
  return NextResponse.json({ reply: defaultResponses[randomIndex] })
}