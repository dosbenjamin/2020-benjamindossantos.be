import anime from 'animejs/lib/anime.es.js'

export default {
  translate: $items => anime({
    targets: $items,
    translateY: ['75%', 0],
    opacity: [0, 1],
    rotateZ: ['1deg', 0],
    duration: 1000,
    easing: 'cubicBezier(0, 0.55, 0.45, 1)',
    delay: anime.stagger(1000)
  }),
  fadeIn: $items => anime({
    targets: $items,
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'cubicBezier(0, 0.55, 0.45, 1)',
    delay: anime.stagger(1000)
  })
}
