# TM Info IA — site institucional

Cartão de visita profissional (one-page) em [Astro](https://astro.build). 100% estático,
sem banco de dados e sem custo de servidor. O build gera a pasta `dist/`, que roda em
qualquer hospedagem: Cloudflare Pages, Netlify, Vercel, GitHub Pages ou um servidor próprio.

## Rodar na sua máquina

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # testa o build de produção
```

## Editar conteúdo

- **Textos, projetos, experiências, contatos:** `src/data/site.ts`
- **Cores, fontes e layout:** `src/styles/global.css`
- **Estrutura das seções:** `src/components/`
- **SEO / metadados:** `src/layouts/Base.astro`
- **Imagem de compartilhamento (WhatsApp/LinkedIn):** `npm run og` (gera `public/og.png`)

Ao trocar o domínio, atualize também:

1. `astro.config.mjs` → `site`
2. `public/robots.txt`
3. `public/sitemap.xml`

## Publicar (GitHub Pages — automático)

O site está publicado em **https://thassysm.github.io** pelo GitHub Pages.
O repositório é <https://github.com/thassysm/thassysm.github.io> (repo de site de usuário,
por isso a URL fica na raiz, sem subpasta).

O deploy é automático: todo `git push` na branch `master` dispara o workflow
`.github/workflows/deploy.yml`, que instala as dependências, roda `npm run build` e publica
a pasta `dist/`.

Acompanhar um deploy:

```bash
gh run list --limit 5
gh run watch
```

### Ativar o Pages na primeira vez

Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como source.
Depois disso, cada push publica automaticamente.

### Alternativa: Cloudflare Pages

Se um dia quiser o CDN da Cloudflare, o projeto já está pronto: conecte o repositório em
**Workers & Pages → Create → Pages → Connect to Git**, use `npm run build` + `dist` e
defina `NODE_VERSION=22.23.4`. O plano gratuito permite uso comercial.

### Alternativa: upload direto (sem GitHub Actions)

```bash
npx wrangler login
npx wrangler pages project create tm-info-ia --production-branch master
npm run build
npx wrangler pages deploy dist --project-name tm-info-ia
```

### Comparativo

| Hospedagem | Custo | Uso comercial no plano grátis | Observação |
| --- | --- | --- | --- |
| GitHub Pages | R$ 0 | Sim | Já configurado, deploy automático |
| Cloudflare Pages | R$ 0 | Sim | CDN global, requer conta Cloudflare |
| Netlify | R$ 0 | Sim | 100 GB/mês, interface simples |
| Vercel Hobby | R$ 0 | Não | Precisa do Pro (US$ 20/mês) para CNPJ |

## Domínio

- **Registro.br** (`.com.br`): R$ 40/ano, registro com CPF ou CNPJ. Recomendado:
  `tminfoia.com.br` (verificado como disponível em nov/2026).
- Alternativas internacionais: `.dev` / `.com` em Cloudflare Registrar, Namecheap ou
  Porkbun (US$ 10–15/ano).
- **Não hospede o site na sua máquina** para acesso público: IP residencial dinâmico,
  porta aberta e falta de disponibilidade. A máquina serve só para desenvolver e testar.

### Apontar o domínio

- **GitHub Pages:** em **Settings → Pages → Custom domain**, informe `tminfoia.com.br` e
  marque *Enforce HTTPS*. No painel DNS do Registro.br, crie quatro registros
  `A @ → 185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` e
  `CNAME www → thassysm.github.io`. Depois, troque `site` em `astro.config.mjs`,
  `robots.txt` e `sitemap.xml` para o domínio novo.
- **Cloudflare Pages:** adicione o domínio no Cloudflare, troque os nameservers no
  Registro.br pelos da Cloudflare e cadastre o domínio em *Custom domains*.
- **Netlify:** no painel DNS do Registro.br, crie `A @ → 75.2.60.5` e
  `CNAME www → <seu-site>.netlify.app`.
- **Vercel:** no painel DNS do Registro.br, crie `A @ → 76.76.21.21` e
  `CNAME www → cname.vercel-dns.com`.

O certificado HTTPS é emitido automaticamente em todos os casos.

## Checklist antes de publicar

- [ ] Revisar textos e números em `src/data/site.ts`
- [ ] Confirmar e-mail, telefone e links (WhatsApp, LinkedIn, GitHub)
- [ ] Trocar o domínio em `astro.config.mjs`, `robots.txt` e `sitemap.xml`
- [ ] Rodar `npm run build` sem erros
- [ ] Testar no celular (menu, botões e links de contato)
- [ ] Validar o compartilhamento em <https://www.opengraph.xyz>
