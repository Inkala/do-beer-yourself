'use strict';

function Footer(parent) {
  this.parent = parent;
  this.elements = null;
}

Footer.prototype.generate = function() {
  this.elements = `
    <div class="footer-element half">
      <img src="./images/half-white.svg" alt="">
    </div>
    <div class="footer-element bottle">
      <img src="./images/bottle-white.svg" alt="">
    </div>
    <div class="footer-element pint">
      <img src="./images/pint-white.svg" alt="">
    </div>
    <div class="footer-element glass">
      <img src="./images/glass-white.svg" alt="">
    </div>
    `;
  this.render();
};

Footer.prototype.render = function() {
  this.parent.innerHTML = this.elements;
};

