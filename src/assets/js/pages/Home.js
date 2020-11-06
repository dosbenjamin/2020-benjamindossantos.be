import Page from './Page'
import { $$ } from '../utilities/domSelectors'
// import scaleOnScroll from '../components/animations/scaleOnScroll'

export default class Home extends Page {
  constructor () {
    super('home')
    this.$projects = $$('.js-project')
    // this.scaleProjects()
    // this.scroll.addListener(() => this.scaleProjects())
  }

  scaleProjects () {
    // this.$projects.forEach($project => scaleOnScroll($project, this.sizes))
  }

  updateOnResize () {
    super.updateOnResize()
    // this.$projects.forEach(() => this.scaleProjects())
  }
}
