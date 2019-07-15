'use strict';

const main = () => {
  const ENTRY_POINT = '/';
  let layoutInstance = null;
  let navbarInstance = null;
  let footerInstance = null;
  const links = [
    { url: '/recipes', img: 'back-arrow', alt: '' },
    { url: '/', img: 'dby-logo', alt: 'Do Beer Yourself Logo' }
  ];
  const rootElement = document.querySelector('#root');

  const generateLayout = () => {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  };

  const generateNavbar = () => {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  };

  const generateFooter = () => {
    footerInstance = new Footer(layoutInstance.footer);
    footerInstance.generate();
  };

  const activateRouter = () => {
    routerInstance.buildDom(ENTRY_POINT, layoutInstance.main);
  };

  const addListenersToNav = () => {
    const navLinks = document.querySelectorAll('.site-navbar a');
    navLinks.forEach(navLink => {
      navLink.addEventListener('click', changePage);
    });
  };

  const changePage = event => {
    let url = '';
    if (event.target.attributes.url) {
      url = event.target.attributes.url.value;
    } else {
      url = event.target.parentNode.attributes.url.value;
    }
    routerInstance.buildDom(url, layoutInstance.main);
  };

  generateLayout();
  generateNavbar();
  generateFooter();
  activateRouter();
  addListenersToNav();
}

window.addEventListener('load', main);
