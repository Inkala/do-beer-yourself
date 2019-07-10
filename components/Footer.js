'use strict';

function Footer(parent) {
  this.parent = parent;
  this.elements = null;
}

Footer.prototype.generate = function() {
  this.elements = `
    <img src="./images/half.png" alt="">
    <img src="./images/bottle.png" alt="">
    <img src="./images/pint.png" alt="">
    <img src="./images/glass.png" alt="">
    `;
  this.render();
};

Footer.prototype.render = function() {
  this.parent.innerHTML = this.elements;
};
