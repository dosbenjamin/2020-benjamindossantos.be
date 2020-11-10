import { $, $$ } from '../utilities/domSelectors'
import Scrollbar from 'smooth-scrollbar'
import Observer from '../components/observer'

const reduceMotion = '(prefers-reduced-motion: reduce)'

export default class Page {
  constructor (name) {
    this.name = name
    this.allowMotion = !window.matchMedia(reduceMotion).matches
    this.allowMotion && this.addMotion()

    document.addEventListener('click', () => this.removeFocus())
  }

  getSizes () {
    return { width: window.innerWidth, height: window.innerHeight }
  }

  setPageHeight () {
    return `${this.sizes.height}px`
  }

  updateOnResize () {
    this.sizes = this.getSizes()
    this.$wrapper.style.height = this.setPageHeight()
  }

  removeFocus () { document.activeElement.blur() }

  scrollToElement ($element) {
    this.scroll.scrollIntoView($element)
  }

  scrollToHash (event) {
    const init = () => {
      const { hash } = location
      const $element = hash && $(hash)
      $element && this.scroll.scrollTo(0, $element.offsetTop, 200)
    }
    (event === 'Load' || event === 'Enter') && init()
  }

  listenFocus (key) {
    const $element = document.activeElement
    key === 'Tab' && this.scrollToElement($element)
  }

  addMotion () {
    this.sizes = this.getSizes()
    this.$wrapper = $('.js-wrapper')
    this.scroll = Scrollbar.init(this.$wrapper)
    this.$wrapper.style.height = this.setPageHeight()
    this.observer = Observer
    this.$toAnimate = $$('.js-animation')
    this.$toAnimate.forEach($element => this.observer.observe($element))
    this.scrollToHash('Load')

    window.addEventListener('resize', () => this.updateOnResize())
    document.addEventListener('keyup', ({ key }) => {
      this.scrollToHash(key)
      this.listenFocus(key)
    })
  }
}
