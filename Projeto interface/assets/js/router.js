// assets/js/router.js
import { routes } from './templates.js';
import { initFormValidation } from './validation.js';
import { setupCatalog } from './storage.js';

const app = document.getElementById('app');

function render(path){
  const route = routes[path] ?? routes['#/404'];
  app.setAttribute('aria-busy','true');
  app.innerHTML = route.template();
  // pós-render
  if(route.afterRender){ route.afterRender(); }
  app.setAttribute('aria-busy','false');
  app.focus();
}

function onRouteChange(){
  const path = location.hash || '#/home';
  render(path);
}

export function startRouter(){
  window.addEventListener('hashchange', onRouteChange);
  window.addEventListener('DOMContentLoaded', onRouteChange);
  // primeira carga
  onRouteChange();
  // setups globais que dependem do DOM
  setupCatalog();
  // Ativa validação quando a rota exibe o formulário
  document.addEventListener('route:form', initFormValidation, { once: false });
}
