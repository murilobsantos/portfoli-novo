export type DevlogEntry = {
  id: string;
  period: string;
  dateTime?: string;
  phase: string;
  title: string;
  summary: string;
  highlights: string[];
  nextStep: string;
  icon: string;
  current?: boolean;
};

export const devlogEntries: DevlogEntry[] = [
  {
    id: "2026-07-portfolio-hub",
    period: "26 de julho de 2026",
    dateTime: "2026-07-26",
    phase: "Nova etapa — portfólio como hub",
    title: "Vitrine GitHub, ESR e organização dos projetos",
    summary:
      "O portfólio passou a conectar os projetos ativos em uma narrativa única, em vez de manter páginas isoladas e desatualizadas.",
    highlights: [
      "Cards dinâmicos para repositórios públicos do GitHub, com fallback seguro.",
      "Página própria do Eclipse System Recovery e redirecionamento da demo empresarial legada.",
      "Limpeza estrutural do Universo de Histórias e definição do contrato inicial do backend.",
    ],
    nextStep: "Implementar autenticação e publicação de histórias no Universo de Histórias.",
    icon: "🧭",
    current: true,
  },
  {
    id: "2025-12-deploy",
    period: "Dezembro de 2025",
    phase: "Consolidação — deploy e navegação",
    title: "Build do Netlify e conexão com projetos online",
    summary:
      "A fase de deploy corrigiu erros de compilação e tornou os projetos externos acessíveis a partir do portfólio.",
    highlights: [
      "Correção de imports de tipos no Next.js para estabilizar o build.",
      "Link de acesso ao Universo de Histórias hospedado online.",
      "Revisão de links externos, segurança de navegação e experiência em dispositivos diferentes.",
    ],
    nextStep: "Manter os links de projetos e demos sincronizados com cada entrega publicada.",
    icon: "🚀",
  },
  {
    id: "2025-12-contact",
    period: "Dezembro de 2025",
    phase: "Consolidação — contato e qualidade",
    title: "Contato, validação de formulários e feedback",
    summary:
      "A experiência de contato evoluiu de páginas estáticas para fluxos com validação, mensagens de erro e preparação para backend.",
    highlights: [
      "Página de contato integrada ao restante da identidade visual.",
      "Validação de formulários e feedback claro para campos inválidos.",
      "Estrutura inicial para processar envios e organizar a comunicação com visitantes.",
    ],
    nextStep: "Revisar o fluxo de envio quando o backend ou provedor de e-mail for escolhido.",
    icon: "✉️",
  },
  {
    id: "2025-12-performance",
    period: "Dezembro de 2025",
    phase: "Consolidação — performance e responsividade",
    title: "Imagens, métricas e design responsivo",
    summary:
      "A página recebeu uma rodada de ajustes para tornar imagens, carregamento e layout mais consistentes em telas diferentes.",
    highlights: [
      "Otimizações de imagens e atenção ao Largest Contentful Paint.",
      "Configurações de carregamento, tamanhos e imagens remotas no Next.js.",
      "Correções de responsividade e revisão de avisos visuais do navegador.",
    ],
    nextStep: "Atualizar dependências e revisar métricas após cada novo deploy relevante.",
    icon: "⚡",
  },
  {
    id: "2025-10-foundation",
    period: "Outubro de 2025",
    phase: "Fundação",
    title: "Início do portfólio wuxia",
    summary:
      "O projeto nasceu com a decisão de reconstruir a vitrine do zero e transformar a estética oriental em parte da experiência de navegação.",
    highlights: [
      "Base em Next.js, TypeScript e Tailwind CSS.",
      "Identidade wuxia/oriental com tipografia, gradientes e efeitos de brilho.",
      "Estrutura de páginas para projetos, habilidades, demos e contato.",
    ],
    nextStep: "Converter a identidade visual em uma vitrine de projetos reais e atualizados.",
    icon: "🏯",
  },
];
