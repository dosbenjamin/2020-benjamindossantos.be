import Page from './Page'
import Scrollbar from 'smooth-scrollbar'
import { $ } from '../utilities/domSelectors'

export default class Home extends Page {
  constructor () {
    super('home')
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

  listenFocus (key) {
    const $element = document.activeElement
    key === 'Tab' && this.scrollToElement($element)
  }

  scrollToElement ($element) {
    this.scroll.scrollIntoView($element, { offsetTop: 50 })
  }

  scrollToHash (event) {
    const init = () => {
      const { hash } = location
      const $element = hash && $(hash)
      $element && this.scroll.scrollTo(0, $element.offsetTop, 200)
    }
    (event === 'Load' || event === 'Enter') && init()
  }

  addMotion () {
    super.addMotion()

    this.sizes = this.getSizes()
    this.$wrapper = $('.js-wrapper')
    this.scroll = Scrollbar.init(this.$wrapper)
    this.$wrapper.style.height = this.setPageHeight()
    this.scrollToHash('Load')

    window.addEventListener('resize', () => this.updateOnResize())
    document.addEventListener('keyup', ({ key }) => {
      this.scrollToHash(key)
      this.listenFocus(key)
    })
  }
}
