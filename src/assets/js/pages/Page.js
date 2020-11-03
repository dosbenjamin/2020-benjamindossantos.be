import { $, $$ } from '../utilities/domSelectors'
import Scrollbar from 'smooth-scrollbar'
import anime from 'animejs/lib/anime.es.js'
// import perspective from '../components/perspectiveAnimation'

export default class Page {
  constructor (name) {
    this.name = name
    this.sizes = { width: window.innerWidth, height: window.innerHeight }
    this.$wrapper = $('.js-wrapper')
    this.$wrapper.style.height = `${this.sizes.height}px`
    this.Scroll = Scrollbar.init(this.$wrapper)
    this.$toFadeIn = $$('.js-fade-in')
    anime({
      targets: this.$toFadeIn,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(100),
      easing: 'cubicBezier(0, 0.55, 0.45, 1)'
    })
    // window.addEventListener('mousemove', event => perspective(event, this.sizes, this.$wrapper))
  }

  updateSizes () {
    this.sizes = { width: window.innerWidth, height: window.innerHeight }
    this.$wrapper.style.height = `${this.sizes.height}px`
    // perspective(event, this.sizes, this.$wrapper)
  }
}
