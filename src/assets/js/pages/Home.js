import Page from './Page'
import { $$ } from '../utilities/domSelectors'
import scale from '../components/scaleAnimation'

export default class Home extends Page {
  constructor () {
    super('home')
    this.$projects = $$('.js-project')
    this.$projects.forEach($project => scale($project, this.sizes))
    this.Scroll.addListener(() => this.$projects.forEach($project => scale($project, this.sizes)))
    window.addEventListener('resize', () => this.updateSizes())
  }

  updateSizes () {
    super.updateSizes()
    this.$projects.forEach($project => scale($project, this.sizes))
  }
}