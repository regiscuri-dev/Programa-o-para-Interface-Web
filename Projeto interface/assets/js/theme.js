// assets/js/theme.js
const THEME_KEY = 'app.theme';

export function initTheme(){
  const btn = document.getElementById('themeToggle');
  const current = localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(current);

  btn?.addEventListener('click', ()=>{
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    btn.setAttribute('aria-pressed', String(next === 'dark'));
  });
}

function setTheme(mode){
  document.documentElement.dataset.theme = mode;
  if(mode === 'light'){
    document.documentElement.style.setProperty('--bg', '#f7f7fb');
    document.documentElement.style.setProperty('--text', '#1e1e25');
    document.documentElement.style.setProperty('--muted', '#5b5b66');
    document.documentElement.style.setProperty('--card', '#ffffff');
  }else{
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--text');
    document.documentElement.style.removeProperty('--muted');
    document.documentElement.style.removeProperty('--card');
  }
  localStorage.setItem(THEME_KEY, mode);
}
