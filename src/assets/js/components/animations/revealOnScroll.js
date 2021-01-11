import anime from 'animejs/lib/anime.es.js'

export default ({
  fadeIn: $fadeIn,
  bigTranslate: $bigTranslate,
  smallTranslate: $smallTranslate,
  title: $title,
  fadeInReverse: $fadeInReverse
}) => {
  anime.set('[data-animation]', {
    translateZ: 0
  })
  anime.timeline({
    easing: 'cubicBezier(0, 0.55, 0.45, 1)',
    duration: 500
  }).add({
    targets: $fadeIn,
    opacity: [0, 1],
    translateY: ['1em', 0],
    delay: anime.stagger(100, { start: 300 })
  }).add({
    targets: $fadeInReverse,
    opacity: [0, 1],
    translateY: ['-0.25em', 0],
    duration: 750,
    delay: anime.stagger(200)
  })
  // .add({
  //   targets: $bigTranslate,
  //   delay: anime.stagger(150),
  //   duration: 1000,
  //   opacity: [0, 1],
  //   translateY: ['75%', 0],
  //   rotateZ: [1, 0],
  //   changeBegin: ({ animatables }) => {
  //     animatables.forEach(({ target: $element }) => {
  //       const $parentLink = $element.closest('.js-project-link')
  //       $parentLink.style.pointerEvents = 'auto'
  //     })
  //   }
  // }).add({
  //   targets: $smallTranslate,
  //   duration: 500,
  //   opacity: [0, 1],
  //   translateY: [20, 0]
  // }).add({
  //   targets: $title,
  //   opacity: [0, 1],
  //   translateY: ['-0.25em', 0],
  //   rotateZ: ['0.75deg', 0]
  // })
}
