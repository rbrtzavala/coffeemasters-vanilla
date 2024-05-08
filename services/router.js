const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const url = event.target.getAttribute('href');
        Router.go(url);
      })
    })
    // Event Handler for URL changes
    window.addEventListener('popstate', event => {
      Router.go(event.state.route, false); 
    }); 
    // Check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }
    let pageElement = null;
    switch (route) {
      case '/':
        pageElement = document.createElement('menu-page');
        break;
      case '/order':
        pageElement = document.createElement('order-page');
        break;
      default:
        if (route.startsWith('/product/')) {
          pageElement = document.createElement('details-page');
          pageElement.textContent = 'Details'
          const paramId = route.substring(route.lastIndexOf('/') + 1);
          pageElement.dataset.productId = paramId;
        }
    }
    if (pageElement) {
      const cache = document.querySelector('main');
      cache.innerHTML = '';
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  }
}

export default Router;