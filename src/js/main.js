let tl = gsap.timeline({ defaults: { duration: 0.5 } });
tl2 = gsap.timeline({ defaults: { duration: 1 } });

let rule = CSSRulePlugin.getRule('.content__cover::before');

const toggle = document.querySelector('#toggle'),
  menu = document.querySelector('#menu'),
  form1 = document.querySelector('#form-1');
form2 = document.querySelector('#form-2');

const entryAnimations = () => {
  tl2.from('.header__logo-container', { x: '-150%' })
    .from('.header__menu', { x: '150%' }, "-=1")
    .to(rule, { cssRule: { scaleY: 0 } }, '-=0.5')
    .from('.content__figure', { y: 50, opacity: 0 }, '-=0.7')
    .from('.content__submit', { y: -50, opacity: 0 }, '-=0.7')
    .from('.header__item', { y: -50, opacity: 0, stagger: 0.3 }, '-=1.6');
}

const openMenu = () => {
  tl.to('#menu', { display: 'flex', right: 0, ease: 'power4.in' })
    .from('.header__item', { display: 'none', y: 50, opacity: 0 });
}

const closeMenu = () => {
  tl.to('#menu', { right: '100%', display: 'none', ease: 'power4.out' })
    .to('#menu', { right: '-100%' });
}

const reverseAnimationAndReload = e => {
  e.preventDefault();
  tl2.reverse();
  setTimeout(() => window.location.reload(), 3000);
}

toggle.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);
form1.addEventListener('submit', e => reverseAnimationAndReload(e));
form2.addEventListener('submit', e => reverseAnimationAndReload(e));

entryAnimations();