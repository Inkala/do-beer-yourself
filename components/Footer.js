'use strict';

class Footer {
  constructor(parent) {
    this.parent = parent;
    this.elements = null;
  }

  generate() {
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
  }

  render() {
    this.parent.innerHTML = this.elements;
  }
}
