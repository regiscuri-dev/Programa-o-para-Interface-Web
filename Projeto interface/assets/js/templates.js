// assets/js/templates.js
import { getCatalog } from './storage.js';

const Home = () => `
  <section class="card">
    <h1>SPA • Templates • Validação</h1>
    <p>Exemplo de aplicação com roteador por <code>hash</code>, templates JS, validação de formulários com verificação de consistência e persistência em <code>localStorage</code>.</p>
    <p><span class="badge">Entrega III</span> &nbsp; Use a navegação acima para explorar.</p>
    <ul>
      <li>SPA básica via <code>hashchange</code></li>
      <li>Sistema de templates em JavaScript</li>
      <li>Formulário com validação de consistência (campos relacionados)</li>
      <li>Persistência de dados e estado</li>
    </ul>
  </section>
  <section class="card">
    <h2>Como navegar</h2>
    <p>Use <kbd>Tab</kbd> para navegar por foco. O conteúdo principal recebe foco após a troca de rota.</p>
  </section>
`;

const Catalogo = () => {
  const itens = getCatalog();
  return `
    <section class="card">
      <h1>Catálogo (Fake API)</h1>
      <p class="help">Dados simulados carregados do <code>localStorage</code> para demonstrar estado e renderização.</p>
      <div class="grid cols-3" id="catalogGrid">
        ${itens.map(i => `
          <article class="card">
            <h3>${i.nome}</h3>
            <p>${i.desc}</p>
            <p><strong>R$ ${i.preco.toFixed(2)}</strong></p>
            <button class="btn" data-add="${i.id}">Adicionar</button>
          </article>
        `).join('')}
      </div>
    </section>
    <section class="card">
      <h2>Carrinho</h2>
      <div id="cart"></div>
    </section>
  `;
};

const Formulario = () => {
  // dispara evento para inicializar validação após renderização
  setTimeout(()=>document.dispatchEvent(new CustomEvent('route:form')),0);
  return `
    <section class="card">
      <h1>Formulário com Verificação de Consistência</h1>
      <p class="help">Exemplos de checagens: e-mail válido, senha = confirmação, idade ≥ 18, período inicial ≤ final, aceite de termos.</p>

      <form id="signupForm" novalidate>
        <div class="row">
          <div class="field">
            <label for="nome">Nome completo</label>
            <input id="nome" name="nome" autocomplete="name" required minlength="3" />
            <div class="help">Mínimo 3 caracteres.</div>
          </div>
          <div class="field">
            <label for="email">E-mail</label>
            <input id="email" name="email" type="email" autocomplete="email" required />
            <div class="help">Informe um e-mail válido.</div>
          </div>
        </div>

        <div class="row">
          <div class="field">
            <label for="senha">Senha</label>
            <input id="senha" name="senha" type="password" minlength="6" required />
          </div>
          <div class="field">
            <label for="confirmSenha">Confirmar senha</label>
            <input id="confirmSenha" name="confirmSenha" type="password" minlength="6" required />
          </div>
        </div>

        <div class="row">
          <div class="field">
            <label for="nascimento">Data de nascimento</label>
            <input id="nascimento" name="nascimento" type="date" required />
          </div>
          <div class="field">
            <label for="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="tel" inputmode="numeric" pattern="\d{10,11}" placeholder="Apenas números" required />
            <div class="help">Use 10–11 dígitos (DDD + número).</div>
          </div>
        </div>

        <div class="row">
          <div class="field">
            <label for="inicio">Período – Início</label>
            <input id="inicio" name="inicio" type="date" required />
          </div>
          <div class="field">
            <label for="fim">Período – Fim</label>
            <input id="fim" name="fim" type="date" required />
          </div>
        </div>

        <div class="field">
          <label for="plano">Plano</label>
          <select id="plano" name="plano" required>
            <option value="">Selecione…</option>
            <option>Start</option>
            <option>Pro</option>
            <option>Enterprise</option>
          </select>
        </div>

        <div class="field">
          <label>
            <input id="termos" name="termos" type="checkbox" required />
            Li e aceito os termos de uso.
          </label>
        </div>

        <div aria-live="polite" class="error" id="formErrors"></div>

        <button class="btn" type="submit">Enviar</button>
        <button class="btn ghost" type="button" id="salvarRascunho">Salvar rascunho</button>
        <span class="success" id="okMsg" role="status" aria-live="polite"></span>
      </form>
    </section>
  `;
};

const NotFound = () => `
  <section class="card">
    <h1>404</h1>
    <p>Página não encontrada. Use o menu acima.</p>
  </section>
`;

export const routes = {
  '#/home': { template: Home },
  '#/catalogo': { template: Catalogo, afterRender: () => import('./storage.js').then(m => m.mountCartHandlers()) },
  '#/formulario': { template: Formulario },
  '#/404': { template: NotFound }
};
