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

  // products page: filter pills
  const filterPills = document.querySelectorAll('.filter-pill');
  const filterCards = document.querySelectorAll('[data-category]');
  if (filterPills.length && filterCards.length) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.dataset.filter;
        filterCards.forEach(card => {
          const show = cat === 'all' || card.dataset.category === cat;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

