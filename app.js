import API from './services/API.js'
import { loadData } from './services/Menu.js'
import Router from './services/router.js'
import Store from './services/store.js'

// Web components
import { MenuPage } from './components/MenuPage.js'
import { DetailsPage } from './components/DetailsPage.js'
import { OrderPage } from './components/OrderPage.js'

window.app = {}
app.store = Store
app.router = Router

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
})