import { $, $$ } from '../utilities/domSelectors'
import Scrollbar from 'smooth-scrollbar'
import observer from '../components/observer'

export default class Page {
  constructor (name) {
    this.name = name
    this.allowMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.allowMotion && this.addMotion()

    document.body.addEventListener('click', event => this.removeFocus(event))
  }

  getSizes () {
    return { width: window.innerWidth, height: window.innerHeight }
  }

  setPageHeight () { return `${this.sizes.height}px` }

  updateOnResize () {
    this.sizes = this.getSizes()
    this.$wrapper.style.height = this.setPageHeight()
  }

  removeFocus ({ target: $element }) { $element.blur() }

  scrollToElement ($element) {
    this.scroll.scrollIntoView($element)
  }

  scrollToHash () {
    // TODO: Fix on `hashchange` event.
    const { hash } = location
    const $element = hash && $(hash)
    $element && this.scrollToElement($element)
  }

  addMotion () {
    this.sizes = this.getSizes()
    this.$wrapper = $('.js-wrapper')
    this.$wrapper.style.height = this.setPageHeight()
    this.scroll = Scrollbar.init(this.$wrapper)
    this.observer = observer
    this.$toAnimate = $$('.js-animation')
    this.$toAnimate.forEach($element => this.observer.observe($element))
    this.$links = $$('.js-link')

    // TODO: Clean this line -> function.
    this.$links.forEach($link => $link.addEventListener('focus', ({ target: $element }) => this.scrollToElement($element)))

    window.addEventListener('load', () => this.scrollToHash())
    window.addEventListener('hashchange', () => this.scrollToHash())
    window.addEventListener('resize', () => this.updateOnResize())
  }
}
