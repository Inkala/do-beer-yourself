'use strict';

class Layout {
  constructor(root) {
    this.root = root;
    this.elements = null;
  }

  generate() {
    this.elements = `
    <header id="site-header"></header>
    <main id="site-main"></main>
    <footer id="site-footer"></footer>
  `;
    this.render();
    this.getContainers();
  }

  render() {
    this.root.innerHTML = this.elements;
  }

  getContainers() {
    this.header = document.querySelector('#site-header');
    this.main = document.querySelector('#site-main');
    this.footer = document.querySelector('#site-footer');
  }
}
