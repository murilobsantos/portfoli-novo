export type Segmento = "academia" | "clinica" | "advogado" | "restaurante" | "imobiliaria";

export type Landing = {
  slug: Segmento;
  marca: string;
  selo: string;
  titulo: string;
  destaque: string;
  descricao: string;
  acao: string;
  acaoSecundaria: string;
  imagem: string;
  numeros: { valor: string; rotulo: string }[];
  servicos: { numero: string; titulo: string; texto: string }[];
  depoimento: string;
  autor: string;
};

export const landings: Record<Segmento, Landing> = {
  academia: {
    slug: "academia", marca: "ÍMPETO", selo: "Centro de performance humana",
    titulo: "Seu corpo não conhece", destaque: "limites.",
    descricao: "Treino inteligente, ambiente eletrizante e uma equipe que transforma intenção em evolução mensurável.",
    acao: "Começar agora", acaoSecundaria: "Conhecer o método",
    imagem: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90",
    numeros: [{ valor: "12+", rotulo: "anos de experiência" }, { valor: "48", rotulo: "coaches especialistas" }, { valor: "4,9", rotulo: "avaliação dos alunos" }],
    servicos: [{ numero: "01", titulo: "Força", texto: "Estrutura completa e orientação para superar marcas com segurança." }, { numero: "02", titulo: "Performance", texto: "Condicionamento pensado para o seu esporte e sua rotina." }, { numero: "03", titulo: "Recovery", texto: "Recuperação ativa, mobilidade e cuidado para manter a constância." }],
    depoimento: "Aqui eu parei de apenas treinar e comecei a evoluir. Cada sessão tem propósito.", autor: "Rafael Mendes — aluno há 3 anos"
  },
  clinica: {
    slug: "clinica", marca: "LUMIÈRE", selo: "Clínica de saúde integrada",
    titulo: "Cuidado que começa", destaque: "pela escuta.",
    descricao: "Uma medicina próxima, precisa e humana. Especialistas que enxergam você por inteiro, em cada fase da vida.",
    acao: "Agendar consulta", acaoSecundaria: "Nossas especialidades",
    imagem: "https://images.unsplash.com/photo-1666887361002-58fa3b7677c8?auto=format&fit=crop&w=1800&q=90",
    numeros: [{ valor: "18", rotulo: "especialidades" }, { valor: "26k", rotulo: "histórias cuidadas" }, { valor: "96%", rotulo: "de satisfação" }],
    servicos: [{ numero: "01", titulo: "Clínica médica", texto: "Prevenção e acompanhamento contínuo com olhar integral." }, { numero: "02", titulo: "Saúde da mulher", texto: "Acolhimento especializado para todas as suas fases." }, { numero: "03", titulo: "Diagnóstico", texto: "Tecnologia e precisão em um só lugar, sem perder a humanidade." }],
    depoimento: "Pela primeira vez senti que uma consulta não era uma corrida contra o relógio.", autor: "Marina A. — paciente"
  },
  advogado: {
    slug: "advogado", marca: "VÉRTICE", selo: "Advocacia estratégica",
    titulo: "Estratégia para decisões", destaque: "que importam.",
    descricao: "Rigor técnico, visão de negócio e presença constante para proteger patrimônios, empresas e futuros.",
    acao: "Falar com um especialista", acaoSecundaria: "Áreas de atuação",
    imagem: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1800&q=90",
    numeros: [{ valor: "22", rotulo: "anos de excelência" }, { valor: "31", rotulo: "profissionais" }, { valor: "14", rotulo: "setores atendidos" }],
    servicos: [{ numero: "I", titulo: "Empresarial", texto: "Estruturas jurídicas sólidas para negócios em movimento." }, { numero: "II", titulo: "Patrimonial", texto: "Planejamento inteligente para preservar o que você construiu." }, { numero: "III", titulo: "Contencioso", texto: "Atuação precisa em disputas complexas e de alta relevância." }],
    depoimento: "Eles compreendem o direito, mas também compreendem profundamente o nosso negócio.", autor: "Augusto N. — CEO, Grupo Noroeste"
  },
  restaurante: {
    slug: "restaurante", marca: "BRASA & ALMA", selo: "Cozinha brasileira contemporânea",
    titulo: "O Brasil servido", destaque: "em estado de arte.",
    descricao: "Ingredientes de origem, fogo vivo e memórias reinventadas. Uma experiência para chegar sem pressa e sair querendo voltar.",
    acao: "Reservar uma mesa", acaoSecundaria: "Descobrir o menu",
    imagem: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=90",
    numeros: [{ valor: "7", rotulo: "tempos no percurso" }, { valor: "42", rotulo: "produtores parceiros" }, { valor: "2021", rotulo: "abertos desde" }],
    servicos: [{ numero: "ENTRADA", titulo: "Da horta", texto: "Vegetais da estação, coalhada defumada e ervas do quintal." }, { numero: "PRINCIPAL", titulo: "Da brasa", texto: "Peixe do dia, tucupi claro, pimenta de cheiro e farofa crocante." }, { numero: "DESFECHO", titulo: "Da memória", texto: "Cacau, café, doce de leite e uma lembrança de infância." }],
    depoimento: "Uma cozinha brasileira sem caricatura: afetiva, surpreendente e absolutamente viva.", autor: "Caderno Mesa — edição de inverno"
  },
  imobiliaria: {
    slug: "imobiliaria", marca: "ÁUREA", selo: "Imóveis extraordinários",
    titulo: "Espaços à altura", destaque: "da sua história.",
    descricao: "Uma curadoria de propriedades singulares, apresentada com discrição, repertório e atenção a cada detalhe.",
    acao: "Explorar propriedades", acaoSecundaria: "Falar com um advisor",
    imagem: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    numeros: [{ valor: "R$ 2,4bi", rotulo: "em transações" }, { valor: "83", rotulo: "imóveis exclusivos" }, { valor: "6", rotulo: "destinos selecionados" }],
    servicos: [{ numero: "01", titulo: "Curadoria", texto: "Propriedades escolhidas por arquitetura, localização e legado." }, { numero: "02", titulo: "Advisory", texto: "Inteligência de mercado para decisões patrimoniais seguras." }, { numero: "03", titulo: "Private sales", texto: "Negociações reservadas para imóveis fora do mercado aberto." }],
    depoimento: "A Áurea não nos mostrou imóveis. Ela entendeu a vida que queríamos construir.", autor: "Família Albuquerque — São Paulo"
  }
};

export const segmentos = Object.keys(landings) as Segmento[];
