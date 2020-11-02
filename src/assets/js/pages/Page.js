import { $ } from '../utilities/domSelectors'
import Scrollbar from 'smooth-scrollbar'

export default class Page {
  constructor (name) {
    this.name = name
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.$wrapper = $('.l-wrapper')
    this.$wrapper.style.height = `${this.height}px`
    this.Scroll = Scrollbar.init(this.$wrapper)
  }

  updateSizes () {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.$wrapper.style.height = `${this.height}px`
  }
}
