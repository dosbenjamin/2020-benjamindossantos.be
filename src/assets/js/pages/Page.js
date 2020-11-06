import { $, $$ } from '../utilities/domSelectors'
import Scrollbar from 'smooth-scrollbar'
import observer from '../components/observer'

export default class Page {
  constructor (name) {
    this.name = name
    this.sizes = this.getSizes()
    this.$wrapper = $('.js-wrapper')
    this.$wrapper.style.height = this.setPageHeight()
    this.scroll = Scrollbar.init(this.$wrapper)
    this.observer = observer
    this.$toAnimate = $$('.js-animation')
    this.$toAnimate.forEach($element => this.observer.observe($element))

    window.addEventListener('resize', () => this.updateOnResize())
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
}
