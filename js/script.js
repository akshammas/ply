const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
    disable: reduceMotion
  });

  // mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobilePanel = document.getElementById('mobilePanel');
  menuBtn.addEventListener('click', () => {
    mobilePanel.classList.toggle('open');
    menuBtn.innerHTML = mobilePanel.classList.contains('open')
      ? '<i class="bi bi-x-lg"></i>'
      : '<i class="bi bi-list"></i>';
  });
  mobilePanel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobilePanel.classList.remove('open');
      menuBtn.innerHTML = '<i class="bi bi-list"></i>';
    });
  });
