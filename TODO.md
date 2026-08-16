# TODO

## Sprint atual: corrigir preview do Sistema de Blog Pessoal (Universo de Histórias) e tratar 404 em produção

- [x] Entender o problema: rota existe localmente em `src/app/projetos/sistema-de-blog-pessoal/page.tsx`, mas no Vercel dá 404.
- [ ] Investigar causa do 404 em produção no Vercel (comparar configs e verificar possíveis rewrites/redirects/basePath/middleware).
- [x] Ajustar preview do Sistema de Blog Pessoal para usar `public/image.png` na área indicada.
- [ ] Rodar `npm run build` e `npm run lint` ao final (lint pode manter warnings; o sprint só exige que build passe).

