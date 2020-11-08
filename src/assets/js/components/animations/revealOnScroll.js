// TODO: Optimize timeline.

import anime from 'animejs/lib/anime.es.js'

export default ({
  fadeIn: $fadeIn,
  bigTranslate: $bigTranslate,
  smallTranslate: $smallTranslate,
  title: $title
}) => {
  anime.timeline({
    easing: 'cubicBezier(0, 0.55, 0.45, 1)',
    delay: anime.stagger(100, { start: 300 }),
    duration: 750
  }).add({
    targets: $fadeIn,
    opacity: [0, 1],
    translateY: ['1em', 0],
    translateZ: 0
  }).add({
    targets: $bigTranslate,
    delay: anime.stagger(100),
    opacity: [0, 1],
    translateY: ['75%', 0],
    translateZ: 0,
    rotateZ: [1, 0],
    changeBegin: ({ animatables }) => {
      // TODO: Optimize loop to set the style once per link.
      animatables.forEach(({ target: $element }) => {
        const $parentLink = $element.closest('.js-link')
        $parentLink.style.pointerEvents = 'auto'
      })
    }
  }, '-=300').add({
    targets: $smallTranslate,
    opacity: [0, 1],
    translateY: [20, 0],
    translateZ: 0,
    duration: 500
  }, '-=650').add({
    targets: $title,
    opacity: [0, 1],
    translateY: ['-0.25em', 0],
    translateZ: 0,
    rotateZ: ['0.75deg', 0]
  }, '-=650')
}
