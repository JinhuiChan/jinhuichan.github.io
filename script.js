'use strict';

(() => {
  const button = document.getElementById('language-switch');
  const label = document.getElementById('language-label');
  const translated = [...document.querySelectorAll('[data-en]')];
  // Capture the original HTML so intentional Chinese line breaks are preserved.
  const chinese = new Map(translated.map(element => [element, element.innerHTML]));
  const descriptions = {
    zh: '陈锦辉 Jinhui Chen｜武汉大学遥感科学与技术本科生，研究兴趣包括遥感图像处理、跨模态地理定位与多模态大模型。',
    en: 'Jinhui Chen, an undergraduate at Wuhan University working on remote sensing, cross-modal geo-localization, and multimodal intelligence.'
  };

  function setLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'zh-CN';
    translated.forEach(element => {
      if (english) element.textContent = element.dataset.en;
      else element.innerHTML = chinese.get(element);
    });
    document.title = english
      ? 'Jinhui Chen | Wuhan University · Remote Sensing'
      : '陈锦辉 Jinhui Chen | 武汉大学 · Remote Sensing';
    document.querySelector('meta[name="description"]').content = descriptions[english ? 'en' : 'zh'];
    button.setAttribute('aria-label', english ? '切换到中文' : 'Switch to English');
    button.title = english ? '切换到中文' : 'Switch to English';
    label.textContent = english ? '中文' : 'EN';
    try { localStorage.setItem('jinhui-site-language', english ? 'en' : 'zh'); } catch { /* Storage may be disabled. */ }
  }

  let savedLanguage = 'zh';
  try { savedLanguage = localStorage.getItem('jinhui-site-language') || 'zh'; } catch { /* Chinese remains the default. */ }
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  setLanguage(['en', 'zh'].includes(requestedLanguage) ? requestedLanguage : savedLanguage);
  button.hidden = false;
  button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
