'use strict';

function LandingPage(parent) {
  this.parent = parent;
  this.elements = null;
}

LandingPage.prototype.generate = function () {
  this.elements = `
    <section class=landing-page>
      <h3>More hops, add fruit...</h3>
      <h2>Try it yourself!</h2>
      <button>Check the recipes</button>
    </section>
  `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parent.innerHTML = this.elements;
}
  


