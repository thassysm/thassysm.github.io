# Site — Thassys Meira

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

## Publicar (recomendado: Cloudflare Pages)

O plano gratuito do Cloudflare Pages permite uso comercial e não cobra tráfego.
O plano Hobby do Vercel é **apenas para uso pessoal/não comercial** — como o site é da
sua empresa (CNPJ), no Vercel seria necessário o plano Pro (US$ 20/mês).

1. Crie um repositório no GitHub e envie este projeto.
2. Em <https://dash.cloudflare.com> → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**.
3. Selecione o repositório e configure:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Em **Custom domains**, adicione `thassys.com.br` e `www.thassys.com.br`.
5. Se o domínio estiver cadastrado no Cloudflare (nameservers apontando para ele),
   o DNS e o certificado SSL são criados automaticamente.

### Publicar sem GitHub (upload direto via CLI)

Útil para colocar no ar hoje, com URL `https://thassys-site.pages.dev`:

```bash
npx wrangler login                                  # abre o navegador para autorizar
npx wrangler pages project create thassys-site --production-branch main
npm run build
npx wrangler pages deploy dist --project-name thassys-site
```

Depois, em **Custom domains**, basta adicionar o domínio quando ele for registrado.
Cada novo deploy é só repetir `npm run build && npx wrangler pages deploy dist --project-name thassys-site`.

### Alternativas

| Hospedagem | Custo | Uso comercial no plano grátis | Observação |
| --- | --- | --- | --- |
| Cloudflare Pages | R$ 0 | Sim | Melhor custo-benefício, CDN global |
| Netlify | R$ 0 | Sim | 100 GB/mês, interface simples |
| Vercel Hobby | R$ 0 | Não | Precisa do Pro (US$ 20/mês) para CNPJ |
| GitHub Pages | R$ 0 | Sim | Sem CDN global, menos recursos |

## Domínio

- **Registro.br** (`.com.br`): R$ 40/ano, registro com CPF ou CNPJ. Recomendado:
  `thassys.com.br` (verificado como disponível em nov/2026).
- Alternativas internacionais: `.dev` / `.com` em Cloudflare Registrar, Namecheap ou
  Porkbun (US$ 10–15/ano).
- **Não hospede o site na sua máquina** para acesso público: IP residencial dinâmico,
  porta aberta e falta de disponibilidade. A máquina serve só para desenvolver e testar.

### Apontar o domínio

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
