'use strict';

function Navbar(parent) {
  this.parent = parent;
  this.elements = null;
  this.links = null;
}

Navbar.prototype.generate = function() {
  this.elements = `
    <nav class="site-navbar">
      <a href="#0">
        <img src="./images/dby-logo.png" alt="Do Beer Yourself Logo">
      </a> 
    </nav>
  `;
  this.render();
}

Navbar.prototype.render = function() {
  this.parent.innerHTML = this.elements;
}