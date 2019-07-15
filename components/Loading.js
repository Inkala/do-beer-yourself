'use strict';

class Loading {
  constructor(parent) {
    this.parent = parent;
    this.elements = null;
  }

  generate() {
    this.elements = `<div class="loader">Loading</div>`;
    this.render();
  }

  render() {
    this.parent.innerHTML = this.elements;
  }
}
