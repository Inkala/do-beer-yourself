'use strict';

function LandingPage(parent) {
  this.parent = parent;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <section class=landing-page>
      <h3>More hops, add fruit...</h3>
      <h2>Try it yourself!</h2>
      <button data-url="/recipes">Check the recipes</button>
    </section>
  `;
  this.render();
  this.addListenerToButton();
};

LandingPage.prototype.addListenerToButton = function() {
  var recipesButton = document.querySelector('.landing-page button');
  recipesButton.addEventListener('click', event => {
    var url = event.target.dataset.url;
    routerInstance.buildDom(url, this.parent);
  });
};

LandingPage.prototype.render = function() {
  this.parent.innerHTML = this.elements;
};
