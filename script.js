const lenis = new Lenis({
  autoRaf: true,
});

window.addEventListener('load', () => {
  lenis.resize();
  ScrollTrigger.refresh();
});

lenis.on('scroll', ScrollTrigger.update);

const html = document.documentElement;
const botao = document.getElementById('mudarTema');

function switchMode() {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
  } else {
    html.classList.add('dark');
  }
}

botao.addEventListener('click', switchMode);

 // Mobile menu logic with animation
 (function() {
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = Array.from(document.querySelectorAll('.mobile-nav-link'));
  let menuOpen = false;

  // Helper: Animate menu items in or out
  function animateLinks(show) {
    navLinks.forEach((link, idx) => {
      if (show) {
        setTimeout(() => {
          link.classList.remove('opacity-0', 'translate-y-6');
          link.classList.add('opacity-100', 'translate-y-0');
        }, 80 * idx);
      } else {
        setTimeout(() => {
          link.classList.remove('opacity-100', 'translate-y-0');
          link.classList.add('opacity-0', 'translate-y-6');
        }, 40 * (navLinks.length - idx));
      }
    });
  }

  function openMenu() {
    mobileNav.classList.remove('hidden');
    setTimeout(() => {
      mobileNav.classList.add('backdrop-blur-md');
      mobileNav.style.backgroundColor = 'var(--background)';
      mobileNav.style.opacity = "1";
      navToggle.setAttribute('aria-expanded', 'true');
      // Hamburger to "X"
      document.querySelectorAll('.hamburger-bar')[0].style.transform = 'rotate(45deg) translateY(8px)';
      document.querySelectorAll('.hamburger-bar')[1].style.opacity = '0';
      document.querySelectorAll('.hamburger-bar')[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      animateLinks(true);
    }, 20);
    menuOpen = true;
  }

  function closeMenu() {
    animateLinks(false);
    setTimeout(() => {
      mobileNav.classList.remove('backdrop-blur-md');
      mobileNav.style.opacity = '0';
      document.querySelectorAll('.hamburger-bar')[0].style.transform = '';
      document.querySelectorAll('.hamburger-bar')[1].style.opacity = '';
      document.querySelectorAll('.hamburger-bar')[2].style.transform = '';
      setTimeout(() => {
        mobileNav.classList.add('hidden');
        navToggle.setAttribute('aria-expanded', 'false');
      }, 250);
    }, navLinks.length * 60);
    menuOpen = false;
  }

  navToggle.addEventListener('click', function() {
    if (!menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // On nav link click (closes menu)
  navLinks.forEach(link => {
    link.parentElement.addEventListener('click', closeMenu);
  });

  // Remove animation utility classes on desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280) {
      if (!mobileNav.classList.contains('hidden')) mobileNav.classList.add('hidden');
      navLinks.forEach(link => {
        link.classList.remove('opacity-100', 'translate-y-0', 'opacity-0', 'translate-y-6');
      });
      // Reset hamburger bars
      document.querySelectorAll('.hamburger-bar')[0].style.transform = '';
      document.querySelectorAll('.hamburger-bar')[1].style.opacity = '';
      document.querySelectorAll('.hamburger-bar')[2].style.transform = '';
      menuOpen = false;
    }
  });
})();