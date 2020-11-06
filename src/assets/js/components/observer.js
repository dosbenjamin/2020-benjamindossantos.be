// TODO: Disconnect the observer when every elements has been animated.
// !! Need Intersection Observer polyfill for older browsers.

import animate from './animations/lazy'

export default new IntersectionObserver((entries, observer) => { // eslint-disable-line
  const $toAnimate = {}

  const $visibles = entries
    .filter(({ isIntersecting }) => isIntersecting)
    .map(({ target }) => target)

  $visibles.forEach($element => {
    const { animation } = $element.dataset
    $toAnimate[animation]
      ? $toAnimate[animation].push($element)
      : $toAnimate[animation] = [$element]
  })

  animate($toAnimate)

  $visibles.forEach($element => observer.unobserve($element))
}, {
  root: document.body,
  threshold: 0
})
