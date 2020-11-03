import { $, $$ } from '../utilities/domSelectors'
import Scrollbar from 'smooth-scrollbar'
import anime from 'animejs/lib/anime.es.js'

export default class Page {
  constructor (name) {
    this.name = name
    this.sizes = { width: window.innerWidth, height: window.innerHeight }
    this.$wrapper = $('.js-wrapper')
    this.$wrapper.style.height = `${this.sizes.height}px`
    this.Scroll = Scrollbar.init(this.$wrapper)
    this.$toFadeIn = $$('.js-animation')
    this.observer = new IntersectionObserver(entries => { // eslint-disable-line
      this.$visibles = entries.filter(entry => entry.isIntersecting).map(entry => entry.target)
      anime({
        targets: this.$visibles,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(100),
        easing: 'cubicBezier(0, 0.55, 0.45, 1)'
      })
      this.$visibles.forEach($item => this.observer.unobserve($item))
    }, {
      threshold: 0.1
    })
    this.$toFadeIn.forEach($item => this.observer.observe($item))
  }

  updateSizes () {
    this.sizes = { width: window.innerWidth, height: window.innerHeight }
    this.$wrapper.style.height = `${this.sizes.height}px`
  }

  animate ($item) {
    console.log($item)
  }
}
