'use strict';

function main () {
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var navbarInstance = null;
  var rootElement = document.querySelector('#root');
  
  generateLayout();
  generateNavbar();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
    console.log('layoutInstance', layoutInstance.header);
  }
  
  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header);
    navbarInstance.generate();
  }
}

window.addEventListener('load', main);