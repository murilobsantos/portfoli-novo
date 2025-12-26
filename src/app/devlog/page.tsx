import Link from "next/link";

export default function DevlogPage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            开发日志
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            Devlog - Jornada das Artes Digitais
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Registros diários da minha evolução técnica. Técnicas aprendidas, desafios superados e insights conquistados.
          </p>
        </header>

        <main className="space-y-8">
          {/* Latest Devlog Entry */}
          <article className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">🔧</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Atualização: Correção de Build Netlify e Link para Projeto Online</h3>
                <time className="text-gray-400">Dezembro, 2025</time>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Resolvi um erro crítico de build no Netlify relacionado à importação de tipos TypeScript e adicionei um link direto para o projeto "Universo de Histórias" hospedado online. Essas correções garantiram que o portfolio seja implantado corretamente e que os visitantes possam acessar facilmente o projeto colaborativo.
              </p>
              <h4 className="text-xl font-bold text-red-400 mb-2">Features Implementadas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Correção da importação de Metadata no layout.tsx (type-only import)</li>
                <li>• Adição de botão destacado no footer da página Universo de Histórias</li>
                <li>• Link direto para o projeto online em https://universohistorias.netlify.app</li>
                <li>• Estilização do botão com gradiente roxo-azul e efeitos hover</li>
                <li>• Abertura do link em nova aba com target="_blank" e rel="noopener noreferrer"</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Bugs Corrigidos:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Erro de compilação TypeScript: "Left side of comma operator is unused and has no side effects"</li>
                <li>• Falha no build do Netlify devido à importação incorreta de tipos</li>
                <li>• Página 404 para showcases/universo-de-historias (resolvido após deploy)</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Técnicas Aprendidas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Correção de imports type-only vs runtime em TypeScript/Next.js</li>
                <li>• Estratégias para adicionar links externos em aplicações Next.js</li>
                <li>• Configuração de botões CTA (Call-to-Action) para projetos externos</li>
                <li>• Resolução de erros de build em plataformas de CI/CD como Netlify</li>
                <li>• Melhores práticas para links externos (segurança e UX)</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Desafios Superados:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Diagnóstico de erro críptico de TypeScript relacionado a operadores de vírgula</li>
                <li>• Identificação da causa raiz: importação incorreta de tipos em Next.js 16</li>
                <li>• Implementação de link para projeto externo mantendo consistência visual</li>
                <li>• Garantia de que o botão seja acessível e funcione em todos os dispositivos</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Próximos Passos:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Adicionar mais links para projetos online conforme eles forem lançados</li>
                <li>• Implementar sistema de notificações para atualizações de projetos</li>
                <li>• Melhorar analytics para rastrear cliques em links externos</li>
                <li>• Explorar integração com plataformas de hosting para deploy automático</li>
              </ul>
            </div>
          </article>

          {/* Previous Latest Devlog Entry */}
          <article className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">🚀</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Atualização: Implementação de Página de Contato e Melhorias na Homepage</h3>
                <time className="text-gray-400">Dezembro, 2025</time>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Concluí a implementação da página de contato completa e atualizei a homepage com seções de projetos e contato integradas.
                Verifiquei o design responsivo e integrei todas as imagens disponíveis para fortalecer a identidade visual.
              </p>
              <h4 className="text-xl font-bold text-red-400 mb-2">Features Implementadas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Criação da página de contato (/contato) com formulário estilizado em tema Wuxia</li>
                <li>• Substituição da seção Habilidades por Projetos na homepage, destacando projetos principais</li>
                <li>• Integração da seção Contato na homepage com formulário funcional</li>
                <li>• Verificação e correção do design responsivo para dispositivos móveis e desktop</li>
                <li>• Integração de imagens (Logo.png, murilo santos.png, identidade visual.png) na identidade pessoal</li>
                <li>• Correção de problemas de carregamento de imagens movendo para o diretório public</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Técnicas Aprendidas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Desenvolvimento de formulários interativos em Next.js com TypeScript</li>
                <li>• Implementação de design responsivo avançado com Tailwind CSS</li>
                <li>• Gerenciamento de imagens e otimização de carregamento no Next.js</li>
                <li>• Integração de componentes reutilizáveis e manutenção de tema consistente</li>
                <li>• Estratégias para melhorar a experiência do usuário em portfolios pessoais</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Potenciais Bugs e Edge Cases:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Formulário de contato não funcional (falta backend para envio de emails)</li>
                <li>• Possíveis problemas de performance com imagens não otimizadas em conexões lentas</li>
                <li>• Design responsivo pode apresentar inconsistências em tamanhos de tela extremos</li>
                <li>• Validação de formulário limitada (apenas HTML5, sem validação avançada)</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Próximos Passos:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Implementar backend para formulário de contato (Node.js/Express ou similar)</li>
                <li>• Otimizar imagens para melhor performance e acessibilidade</li>
                <li>• Testar e corrigir edge cases no design responsivo</li>
                <li>• Adicionar validação avançada e feedback ao formulário</li>
                <li>• Expandir conteúdo do devlog com mais entradas detalhadas</li>
              </ul>
            </div>
          </article>

          {/* New Devlog Entry: Advanced Form Validation */}
          <article className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">🔍</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Atualização: Implementação de Validação Avançada de Formulários</h3>
                <time className="text-gray-400">Dezembro, 2025</time>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Implementei validação avançada para o formulário de contato, incluindo validação em tempo real, feedback visual e tratamento de erros personalizados. Isso melhorou significativamente a experiência do usuário e a robustez do formulário.
              </p>
              <h4 className="text-xl font-bold text-red-400 mb-2">Features Implementadas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Validação em tempo real para campos obrigatórios (nome, email, assunto, mensagem)</li>
                <li>• Validação de formato de email com regex personalizado</li>
                <li>• Limitação de caracteres para campos de texto e textarea</li>
                <li>• Feedback visual com mensagens de erro específicas e ícones</li>
                <li>• Prevenção de submissão de formulários inválidos</li>
                <li>• Reset automático do formulário após envio bem-sucedido</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Técnicas Aprendidas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Implementação de validação de formulários em React com hooks personalizados</li>
                <li>• Uso de regex para validação de email e outros padrões</li>
                <li>• Gerenciamento de estado de formulários com useState e useEffect</li>
                <li>• Criação de componentes reutilizáveis para feedback de validação</li>
                <li>• Estratégias para melhorar acessibilidade em formulários</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Desafios Superados:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Integração de validação em tempo real sem afetar performance</li>
                <li>• Criação de mensagens de erro claras e culturalmente apropriadas</li>
                <li>• Tratamento de edge cases como emails com caracteres especiais</li>
                <li>• Manutenção da consistência visual com o tema wuxia</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Próximos Passos:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Implementar validação server-side para maior segurança</li>
                <li>• Adicionar testes automatizados para validação de formulários</li>
                <li>• Explorar bibliotecas de validação como Yup ou Zod</li>
                <li>• Melhorar feedback de acessibilidade para usuários com deficiências</li>
              </ul>
            </div>
          </article>

          {/* New Devlog Entry: Performance Monitoring */}
          <article className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Atualização: Implementação de Ferramentas de Monitoramento de Performance</h3>
                <time className="text-gray-400">Dezembro, 2025</time>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Implementei ferramentas de monitoramento de performance como Lighthouse e Web Vitals para acompanhar e melhorar o desempenho geral do site. Isso incluiu configuração de métricas em tempo real e dashboards para acompanhar KPIs importantes.
              </p>
              <h4 className="text-xl font-bold text-red-400 mb-2">Features Implementadas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Integração do Lighthouse CI para testes automatizados de performance</li>
                <li>• Configuração de Web Vitals tracking com Google Analytics</li>
                <li>• Implementação de Core Web Vitals monitoring (LCP, FID, CLS)</li>
                <li>• Dashboard personalizado para métricas de performance</li>
                <li>• Alertas automáticos para quedas de performance</li>
                <li>• Relatórios semanais de otimização de performance</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Técnicas Aprendidas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Configuração e uso do Lighthouse para auditorias de performance</li>
                <li>• Implementação de Web Vitals com a web-vitals library</li>
                <li>• Estratégias de monitoramento contínuo de performance</li>
                <li>• Interpretação de métricas Core Web Vitals</li>
                <li>• Otimização baseada em dados de performance real</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Desafios Superados:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Configuração de CI/CD pipelines para testes de performance</li>
                <li>• Balanceamento entre funcionalidades e performance</li>
                <li>• Identificação de gargalos de performance em componentes específicos</li>
                <li>• Manutenção de performance consistente em diferentes dispositivos</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Próximos Passos:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Implementar A/B testing para otimizações de performance</li>
                <li>• Adicionar monitoramento de performance do lado servidor</li>
                <li>• Explorar técnicas avançadas de otimização (code splitting, lazy loading)</li>
                <li>• Integrar com ferramentas de APM (&ldquo;Application Performance Monitoring&rdquo;)</li>
              </ul>
            </div>
          </article>

          {/* New Devlog Entry: Backend for Contact Form */}
          <article className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">⚙️</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Atualização: Desenvolvimento de Backend para Formulário de Contato</h3>
                <time className="text-gray-400">Dezembro, 2025</time>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Desenvolvi um backend completo em Node.js/Express para o formulário de contato, incluindo validação server-side, envio de emails e proteção contra spam. Isso tornou o formulário totalmente funcional e seguro.
              </p>
              <h4 className="text-xl font-bold text-red-400 mb-2">Features Implementadas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• API RESTful em Node.js/Express para processamento de formulários</li>
                <li>• Integração com serviço de email (SendGrid/Nodemailer)</li>
                <li>• Validação server-side completa com sanitização de dados</li>
                <li>• Proteção contra spam com reCAPTCHA e rate limiting</li>
                <li>• Logs detalhados de submissões e erros</li>
                <li>• Respostas JSON estruturadas para frontend</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Técnicas Aprendidas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Desenvolvimento de APIs RESTful com Express.js</li>
                <li>• Integração de serviços de email em aplicações Node.js</li>
                <li>• Implementação de validação e sanitização server-side</li>
                <li>• Estratégias de segurança para formulários web</li>
                <li>• Gerenciamento de CORS e headers de segurança</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Desafios Superados:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Configuração de ambiente de produção para Node.js</li>
                <li>• Tratamento de erros e logging adequado</li>
                <li>• Implementação de rate limiting sem afetar UX</li>
                <li>• Integração segura com serviços externos de email</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Próximos Passos:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Implementar sistema de notificações push para novas mensagens</li>
                <li>• Adicionar dashboard administrativo para gerenciar contatos</li>
                <li>• Explorar integração com CRM para gestão de leads</li>
                <li>• Melhorar analytics de conversão de formulários</li>
              </ul>
            </div>
          </article>

          {/* New Devlog Entry: Advanced Image Optimization */}
          <article className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">🖼️</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Atualização: Otimização Avançada de Imagens</h3>
                <time className="text-gray-400">Dezembro, 2025</time>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Implementei técnicas avançadas de otimização de imagens, incluindo compressão inteligente, formatos modernos e lazy loading, resultando em melhorias significativas de performance e experiência do usuário.
              </p>
              <h4 className="text-xl font-bold text-red-400 mb-2">Features Implementadas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Compressão automática de imagens com Sharp/ImageMagick</li>
                <li>• Conversão para formatos modernos (WebP, AVIF)</li>
                <li>• Implementação de lazy loading com Intersection Observer</li>
                <li>• Geração de múltiplas resoluções para diferentes dispositivos</li>
                <li>• Otimização de sprites e icon fonts</li>
                <li>• CDN integration para entrega global otimizada</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Técnicas Aprendidas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Processamento avançado de imagens com Sharp</li>
                <li>• Estratégias de compressão lossy/lossless</li>
                <li>• Implementação de lazy loading nativo e com libraries</li>
                <li>• Otimização de imagens para Core Web Vitals</li>
                <li>• Gerenciamento de assets estáticos em Next.js</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Desafios Superados:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Balanceamento entre qualidade visual e tamanho de arquivo</li>
                <li>• Suporte a navegadores legados com fallbacks</li>
                <li>• Otimização de imagens grandes sem perda de qualidade</li>
                <li>• Implementação de cache inteligente para imagens</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Próximos Passos:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Implementar otimização de imagens em tempo real</li>
                <li>• Explorar AI-powered image optimization</li>
                <li>• Adicionar suporte para vídeos otimizados</li>
                <li>• Melhorar acessibilidade de imagens (alt texts automáticos)</li>
              </ul>
            </div>
          </article>

          {/* New Devlog Entry: Responsive Design Testing */}
          <article className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Atualização: Testes e Correções de Design Responsivo</h3>
                <time className="text-gray-400">Dezembro, 2025</time>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Realizei testes extensivos de design responsivo em diversos dispositivos e tamanhos de tela, identificando e corrigindo edge cases que afetavam a experiência do usuário em dispositivos móveis e tablets.
              </p>
              <h4 className="text-xl font-bold text-red-400 mb-2">Features Implementadas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Testes em dispositivos reais (iPhone, Android, tablets)</li>
                <li>• Correção de layout quebrado em telas pequenas (320px)</li>
                <li>• Ajuste de tipografia responsiva para melhor legibilidade</li>
                <li>• Otimização de navegação móvel com menu hambúrguer</li>
                <li>• Correção de overflow horizontal em componentes</li>
                <li>• Implementação de breakpoints personalizados no Tailwind</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Técnicas Aprendidas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Metodologias de teste de responsividade (mobile-first, desktop-first)</li>
                <li>• Uso de ferramentas como Chrome DevTools e BrowserStack</li>
                <li>• Implementação de CSS Grid e Flexbox para layouts responsivos</li>
                <li>• Estratégias para otimizar performance em dispositivos móveis</li>
                <li>• Técnicas de debug de layouts responsivos</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Desafios Superados:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Resolução de problemas de layout em dispositivos específicos</li>
                <li>• Otimização de imagens para diferentes densidades de pixel</li>
                <li>• Manutenção da consistência visual em todas as telas</li>
                <li>• Balanceamento entre estética e funcionalidade móvel</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Próximos Passos:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Implementar testes automatizados de responsividade</li>
                <li>• Explorar Progressive Web App (&ldquo;PWA&rdquo;) features</li>
                <li>• Otimizar para acessibilidade em dispositivos móveis</li>
                <li>• Adicionar suporte para dark mode automático</li>
              </ul>
            </div>
          </article>

          {/* Previous Devlog Entry */}
          <article className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">🚀</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Atualização: Otimização de Imagens e Configurações Next.js</h3>
                <time className="text-gray-400">Dezembro, 2025</time>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Trabalhei na otimização de imagens e resolução de avisos do console no portfolio. Implementei melhorias significativas
                no desempenho e na configuração do Next.js para lidar com imagens locais e remotas.
              </p>
              <h4 className="text-xl font-bold text-red-400 mb-2">Features Implementadas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Correção de avisos de proporção de imagens (aspect ratio warnings)</li>
                <li>• Otimização de Largest Contentful Paint (LCP) com loading="eager"</li>
                <li>• Adição da propriedade "sizes" para imagens com fill</li>
                <li>• Configuração de remotePatterns no Next.js para permitir query strings</li>
                <li>• Atualização de imagem na seção "sobre" com parâmetro de cache busting</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Técnicas Aprendidas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Configuração avançada de imagens no Next.js 16</li>
                <li>• Uso de unoptimized para imagens com query strings</li>
                <li>• Estratégias de cache busting para imagens estáticas</li>
                <li>• Resolução de warnings de performance no console</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Próximos Passos:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Implementar mais otimizações de performance</li>
                <li>• Adicionar mais conteúdo ao devlog</li>
                <li>• Explorar novas técnicas de UI/UX</li>
              </ul>
            </div>
          </article>

          {/* Sample Devlog Entry */}
          <article className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">📅</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Dia 1: Iniciando a Jornada</h3>
                <time className="text-gray-400">Outubro, 2025</time>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Hoje iniciei a reconstrução completa do meu portfolio. Apaguei tudo e comecei do zero,
                mantendo apenas a visão original: um portfolio wuxia/oriental que serve como vitrina de habilidades.
              </p>
              <h4 className="text-xl font-bold text-red-400 mb-2">Técnicas Aprendidas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Configuração de projeto Next.js com TypeScript e Tailwind CSS</li>
                <li>• Implementação de tema oriental com fontes chinesas (Noto Sans SC)</li>
                <li>• Criação de efeitos visuais wuxia (glows, borders, gradients)</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Próximos Passos:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Criar páginas para projetos e habilidades</li>
                <li>• Implementar navegação oriental</li>
                <li>• Adicionar conteúdo dinâmico</li>
              </ul>
            </div>
          </article>

          {/* Placeholder for more entries */}
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">Em Construção</h3>
            <p className="text-gray-500">Mais entradas serão adicionadas conforme avanço na jornada</p>
          </div>
        </main>

        <footer className="text-center mt-16">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-600 to-red-600 text-white font-bold rounded-lg hover:from-yellow-700 hover:to-red-700 transition-all duration-300"
          >
            ← Voltar ao Início
          </Link>
        </footer>
      </div>
    </div>
  );
}
