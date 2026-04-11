# TODO.md - Sprints Pendentes do Portfolio Wuxia

## ✅ Concluídas
- [x] Removido console.log de debug em contato/page.tsx (BLACKBOXAI)
- [x] Atualizado TODO.md com sprints pendentes baseados no devlog
- [x] Configurado netlify.toml para forms (pronto para deploy)
- [x] 1. Resolver PowerShell/npm execution policy (npm install concluído com sucesso)
- [x] 2. Executar npm install && npm run lint && npm run build (lint OK com warnings menores, build ✅ passou!)
- [x] 3. Editar src/app/contato/page.tsx para Netlify Forms puro (remover JS state, honeypot anti-spam adicionado)
- [x] 4. Fix erros TypeScript no form (removido onSubmit={handleSubmit} residual, TS limpo)
- [x] 5. Retestar build após fixes (Next.js Turbopack: Compiled 5.2s, TS 4.1s, 19/19 páginas estáticas OK!)

## 🔄 Em Progresso
- [ ] Deploy Netlify para testar form real (`netlify deploy --prod`)

## ⏳ Pendentes (do Devlog + sugestões)
- [ ] Backend completo para form (server-side validation, Nodemailer)
- [ ] Testes automatizados (Jest)
- [ ] PWA manifest e service worker
- [ ] Otimização imagens (WebP, Sharp)
- [ ] A/B testing performance
- [ ] Dashboard admin contatos
- [ ] Analytics (Google Analytics 4)
- [ ] Dark mode automático
- [ ] Lighthouse score 100% acessibilidade/performance

**Status final sprint**:
- Build 100% funcional (todas rotas static prerendered).
- Lint: 20 warnings cosméticos ignorados (aspas JSX - não críticos).
- Form pronto para Netlify: honeypot cybersecurity, validação HTML5.
- Rode `npm run dev` para preview: http://localhost:3000/contato

**Deploy**: netlify.toml pronto. `npm run build && netlify deploy --prod --dir=.next`.
