import { $$ } from '../utilities/domSelectors'
import Observer from '../components/observer'

const reduceMotion = '(prefers-reduced-motion: reduce)'

export default class Page {
  constructor (name) {
    this.name = name
    this.allowMotion = !window.matchMedia(reduceMotion).matches
    this.allowMotion && this.addMotion()

    document.addEventListener('click', () => this.removeFocus())
  }

  removeFocus () { document.activeElement.blur() }

  addMotion () {
    this.observer = Observer
    this.$toAnimate = $$('.js-animation')
    this.$toAnimate.forEach($element => this.observer.observe($element))
  }
}
