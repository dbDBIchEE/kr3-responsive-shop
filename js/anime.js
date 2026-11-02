const { animate, utils, createDraggable, spring, splitText, stagger } = anime;

const [ $logo ] = utils.$('.logo-animated');
const [ $button ] = utils.$('.rotate-btn');
let rotations = 0;

animate('.logo-animated', {
  scale: [
    { to: 1.25, ease: 'inOut(3)', duration: 200 },
    { to: 1, ease: spring({ bounce: .7 }) }
  ],
  loop: true,
  loopDelay: 250,
});

createDraggable('.logo-animated', {
  container: [0, 0, 0, 0],
  releaseEase: spring({ bounce: .9 })
});

const rotateLogo = () => {
  rotations++;
  $button.innerText = `${rotations}`;
  animate($logo, {
    rotate: rotations * 720,
    ease: 'out(4)',
    duration: 1500,
  });
}

$button.addEventListener('click', rotateLogo);

createDraggable('.square', {
    container: '.site-header',
    containerFriction: 1,
});


const { words } = splitText('h1', {
    words: { wrap: 'clip' },
});
  
animate(words, {
    y: [
      { to: ['100%', '0%'] },
      { to: '-100%', delay: 750, ease: 'in(3)' }
    ],
    duration: 1500,
    ease: 'out(3)',
    delay: stagger(100),
    loop: true,
});