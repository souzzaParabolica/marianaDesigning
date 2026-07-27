gsap.registerPlugin(ScrollTrigger);

function initIntroAnimation() {
  const introTl = gsap.timeline({
    defaults: { ease: 'power3.out' },
  });

  introTl
    .from('.header-logo', {
      autoAlpha: 0,
      x: -28,
      filter: 'blur(10px)',
      duration: 0.9,
    })
    .from(
      '.header-nav-item',
      {
        autoAlpha: 0,
        y: -16,
        filter: 'blur(6px)',
        duration: 0.55,
        stagger: 0.07,
      },
      '-=0.55'
    )
    .from(
      '.header-cta',
      {
        autoAlpha: 0,
        x: 28,
        filter: 'blur(10px)',
        duration: 0.9,
      },
      '-=0.45'
    )
    .from(
      '.hero-tagline',
      {
        autoAlpha: 0,
        y: 24,
        filter: 'blur(8px)',
        duration: 0.75,
      },
      '-=0.35'
    )
    .from(
      '.hero-title',
      {
        autoAlpha: 0,
        y: 48,
        filter: 'blur(12px)',
        duration: 1.1,
      },
      '-=0.45'
    )
    .from(
      '.hero-desc',
      {
        autoAlpha: 0,
        y: 28,
        filter: 'blur(8px)',
        duration: 0.7,
      },
      '-=0.65'
    )

    .from(
      '.hero-visual',
      {
        autoAlpha: 0,
        scale: 0.88,
        filter: 'blur(16px)',
        duration: 1.2,
        ease: 'power2.out',
      },
      '-=0.85'
    )
    .from(
      '.hero-side span',
      {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.8,
        ease: 'power2.inOut',
      },
      '-=0.7'
    )
    .from(
      '.hero-side p',
      {
        autoAlpha: 0,
        x: 16,
        duration: 0.6,
      },
      '-=0.45'
    );

  return introTl;
}

function initScrollAnimations() {
  gsap.from('.divAnimada div', {
    autoAlpha: 0,
    x: -10,
    filter: 'blur(5px)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.divAnimada',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 2,
      markers: false,
    },
  });

  gsap.from('.firstSection div, .firstSection p, .firstSection button', {
    autoAlpha: 0,
    y: 10,
    filter: 'blur(5px)',
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.firstSection',
      start: 'top 70%',
      markers: false,
    },
  });

  // Animação para desktop (acima de 768px, por exemplo, típica breakpoint de tablets)
  if (window.innerWidth >= 768) {
    gsap.from('.cards div', {
      autoAlpha: 0,
      y: 10,
      filter: 'blur(5px)',
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.cards',
        start: 'top 70%',
        markers: false,
      },
    });
  } else {
    // Para celulares e telas pequenas, anima cada card individualmente ao aparecer
    document.querySelectorAll('.cards div').forEach(card => {
      gsap.from(card, {
        autoAlpha: 0,
        y: 20,
        filter: 'blur(8px)',
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          markers: false,
        },
      });
    });
  }

  gsap.from('.secondSection div, .secondSection p, .secondSection button', {
    autoAlpha: 0,
    y: 10,
    filter: 'blur(5px)',
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.secondSection',
      start: 'top 70%',
      markers: false,
    },
  });

  if (window.innerWidth >= 768) {
    // Animação em grupo para desktop (mantém igual)
    gsap.from('.cardDois div', {
      autoAlpha: 0,
      y: 10,
      filter: 'blur(5px)',
      duration: 0.8,
      stagger: 0.05,
      scrollTrigger: {
        trigger: '.cardDois',
        start: 'top 70%',
        markers: false,
      },
    });
  } else {
    // Para mobile/tablet, anima cada cardDois div individualmente conforme aparece na tela
    document.querySelectorAll('.cardDois div').forEach(card => {
      gsap.from(card, {
        autoAlpha: 0,
        y: 10,
        filter: 'blur(5px)',
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          markers: false,
        },
      });
    });
  }
}

if (window.innerWidth >= 768) {
  // Para desktop/tablet, animação em grupo (mantém igual)
  gsap.from('.thirdSection .titulo, .thirdSection .contentDad .atual, .secondContentDad div ', {
    autoAlpha: 0,
    y: 10,
    filter: 'blur(5px)',
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.thirdSection',
      start: 'top 70%',
      markers: false,
    },
  });
} else {
  // Para celulares e telas menores, anima cada card individualmente ao aparecer
  document.querySelectorAll('.thirdSection .titulo, .thirdSection .contentDad .atual, .secondContentDad div').forEach(el => {
    gsap.from(el, {
      autoAlpha: 0,
      y: 10,
      filter: 'blur(5px)',
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        markers: false,
      },
    });
  });
}

gsap.from('.circle', {
  autoAlpha: 0,
  filter: 'blur(5px)',
  scale: 0,
  duration:1.5,
  ease: "elastic.out(1,1)",
  scrollTrigger: {
    trigger: '.thirdSection',
    start: 'top 40%',
  },
});

gsap.from('.fourthSection', {
  autoAlpha: 0,
  filter: 'blur(5px)',
  y: 10,
  duration: 0.8,
  scrollTrigger: {
    trigger: '.feedbackSection',
    start: 'top 70%',
  },
});

if (window.innerWidth >= 1024) {
  // Animação para desktop: todos juntos com stagger
  gsap.from('.feedbacks div', {
    autoAlpha: 0,
    filter: 'blur(5px)',
    scale: 0.95,
    duration: 0.7,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.feedbackSection',
      start: 'top 70%',
      markers: false,
    },
  });
} else {
  // Para celulares e telas menores: anima cada card individualmente
  document.querySelectorAll('.feedbacks div').forEach(el => {
    gsap.from(el, {
      autoAlpha: 0,
      filter: 'blur(5px)',
      scale: 0.95,
      duration: 0.7,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        markers: false,
      },
    });
  });
}

  // GSAP Footer Reveal Animation
  document.addEventListener('DOMContentLoaded', function () {
    if (window.gsap && window.ScrollTrigger) {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.footer-animated',
          start: 'top 85%',
          once: true
        }
      })
      .to('.footer-animated', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out'
      })
      .to('.footer-col', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.16,
        ease: 'power2.out'
      }, "-=0.5")
      .to('.footer-icon', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        stagger: 0.09,
        ease: 'power1.out'
      }, "-=0.5");
    }
  });

function initAnimations() {
  initIntroAnimation();
  initScrollAnimations();
  ScrollTrigger.refresh();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
