import Home from './pages/Home'
import Annex from './pages/Annex'

const initializer = {
  home: () => new Home(),
  annex: () => new Annex()
}

const { namespace } = document.body.dataset

window.addEventListener('DOMContentLoaded', initializer[namespace])
