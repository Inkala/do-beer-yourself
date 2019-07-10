'use strict';

function main () {
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var navbarInstance = null;
  var footerInstance = null;
  var landingInstance = null;
  var rootElement = document.querySelector('#root');
  
  generateLayout();
  generateNavbar();
  generateFooter();
  generateLanding();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }
  
  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header);
    navbarInstance.generate();
  }

  function generateFooter() {
    footerInstance = new Footer(layoutInstance.footer);
    footerInstance.generate();
  }
  function generateLanding() {
    landingInstance = new LandingPage(layoutInstance.main);
    landingInstance.generate();
  }
}

window.addEventListener('load', main);