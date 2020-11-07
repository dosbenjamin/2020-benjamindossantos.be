import Page from './Page'
import { $$ } from '../utilities/domSelectors'
// import scaleOnScroll from '../components/animations/scaleOnScroll'

export default class Home extends Page {
  constructor () {
    super('home')
    this.$projects = $$('.js-project')
  }
}
