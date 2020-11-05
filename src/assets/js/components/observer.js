import animate from './animations/lazy'
// import { $$ } from '../utilities/domSelectors'

export default new IntersectionObserver((entries, observer) => { // eslint-disable-line
  const $visibles = entries
    .filter(({ isIntersecting }) => isIntersecting)
    .map(({ target }) => target)

  const $toTranslate = $visibles
    .filter(({ dataset }) => dataset.animation === 'translate')

  const $toFadeIn = $visibles
    .filter(({ dataset }) => dataset.animation === 'fade-in')

  $toTranslate.forEach(({ parentElement }) => { parentElement.style.overflow = 'hidden' })
  animate.translate($toTranslate)
  animate.fadeIn($toFadeIn)

  $visibles.forEach($element => observer.unobserve($element))
}, {
  root: document.body,
  threshold: 0
})
