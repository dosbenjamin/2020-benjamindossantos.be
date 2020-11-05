import Page from './Page'
import { $$ } from '../utilities/domSelectors'
// import scale from '../components/animations/scale'

export default class Home extends Page {
  constructor () {
    super('home')
    this.$projects = $$('.js-project')
    // this.$projects.forEach($project => scale($project, this.sizes))
    // this.scroll.addListener(() => this.$projects.forEach($project => scale($project, this.sizes)))
  }

  updateOnResize () {
    super.updateOnResize()
    // this.$projects.forEach($project => scale($project, this.sizes))
  }
}
