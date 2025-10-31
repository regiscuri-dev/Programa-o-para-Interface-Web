# Entrega III — Interatividade e Funcionalidades

Projeto **vanilla JS** com:
- SPA (roteamento por *hash*)
- Sistema de **templates** JavaScript
- **Verificação de consistência** em formulário (campos relacionados)
- Persistência em **localStorage** (catálogo/carrinho e rascunho do formulário)
- Código **modular** com ES Modules

## ✅ Como rodar localmente
1. Baixe este repositório (ou o .zip).
2. Abra `index.html` no navegador **ou** sirva localmente com um servidor estático:
   - Python: `python -m http.server 8080`
   - Node (http-server): `npx http-server -p 8080`
3. Navegue entre **Home**, **Catálogo** e **Formulário** pelo menu.

## 🗂️ Estrutura
```
assets/
  css/
    styles.css
  img/
    favicon.svg
  js/
    router.js
    templates.js
    storage.js
    validation.js
    validation_draft.js
    theme.js
index.html
README.md
```

## 🔍 Especificações atendidas
- **Manipulação do DOM**: renderização por templates e atualização de conteúdo dinâmico.
- **SPA básico**: roteamento por `hashchange` em `router.js`.
- **Sistema de templates JS**: funções geradoras de HTML em `templates.js`.
- **Verificação de consistência**: validação de e-mail, senha=confirmação, idade ≥ 18, período início ≤ fim, telefone 10–11 dígitos, aceite de termos, com mensagens acessíveis (`aria-live`). 
- **Armazenamento local**: catálogo/carrinho e rascunho de formulário via `localStorage`.
- **Modularidade**: ES Modules com um arquivo por funcionalidade, organizado em `assets/js`.

## 🚀 Publicação (GitHub Pages)
1. Crie um repositório **público** no GitHub (ex.: `entrega-iii-interatividade-spa`).
2. Envie todos os arquivos desta pasta para o repositório.
3. No GitHub, acesse **Settings → Pages** e em **Build and deployment** selecione **Source: Deploy from a branch** e **Branch: `main` / root**.
4. A URL pública ficará algo como: `https://<seu-usuario>.github.io/entrega-iii-interatividade-spa/`.

> **Observação:** certifique-se de que o repositório está **público** para avaliação.

## 🧪 Teste rápido
- Preencha o formulário com dados inválidos para ver as mensagens.
- Tente cadastrar com `Senha` diferente de `Confirmar senha`.
- Defina `Início` maior que `Fim` para ver o aviso de período inválido.
- Marque/desmarque os **termos** para ver a verificação.
- Adicione itens do catálogo e atualize quantidades; o carrinho persiste após recarregar a página.

---

Feito para a **Entrega III – Interatividade e Funcionalidades**.
