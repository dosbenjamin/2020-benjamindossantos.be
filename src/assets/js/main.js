import Home from './pages/Home'

const initializer = {
  home: () => new Home()
}

const { namespace } = document.body.dataset

window.addEventListener('DOMContentLoaded', () => {
  initializer[namespace]()
  document.documentElement.className = 'js'
})
