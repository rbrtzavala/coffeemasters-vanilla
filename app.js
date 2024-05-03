import API from './services/API.js'
import { loadData } from './services/Menu.js'
import Router from './services/router.js'
import Store from './services/store.js'

window.app = {}
app.store = Store
app.router = Router

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
})