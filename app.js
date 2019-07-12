'use strict';

function main() {
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var navbarInstance = null;
  var footerInstance = null;
  var links = [
    { url: '/recipes', img: 'back-arrow', alt: '' },
    { url: '/', img: 'dby-logo', alt: 'Do Beer Yourself Logo' }
  ];
  var rootElement = document.querySelector('#root');

  generateLayout();
  generateNavbar();
  generateFooter();
  activateRouter();
  addListenersToNav();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }

  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  }

  function generateFooter() {
    footerInstance = new Footer(layoutInstance.footer);
    footerInstance.generate();
  }

  function activateRouter() {
    routerInstance.buildDom(ENTRY_POINT, layoutInstance.main);
  }

  function addListenersToNav() {
    var navLinks = document.querySelectorAll('.site-navbar a');
    navLinks.forEach(navLink => {
      navLink.addEventListener('click', changePage);
    });
  }

  function changePage(event) {
    var url = '';
    if (event.target.attributes.url) {
      url = event.target.attributes.url.value;
    } else {
      url = event.target.parentNode.attributes.url.value;
    }
    routerInstance.buildDom(url, layoutInstance.main);
  }
}

window.addEventListener('load', main);
