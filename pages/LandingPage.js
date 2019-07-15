'use strict';

class LandingPage {
  constructor(parent) {
    this.parent = parent;
    this.elements = null;
  }

  generate() {
    this.elements = `
    <section class=landing-page>
      <h3>More hops, add fruit...</h3>
      <h2>Try it yourself!</h2>
      <button data-url="/recipes">Check the recipes</button>
    </section>
  `;
    this.render();
    this.addListenerToButton();
  }

  addListenerToButton() {
    const recipesButton = document.querySelector('.landing-page button');
    recipesButton.addEventListener('click', event => {
      const url = event.target.dataset.url;
      routerInstance.buildDom(url, this.parent);
    });
  }

  render() {
    this.parent.innerHTML = this.elements;
    const header = this.parent.previousElementSibling;
    header.classList.remove('arrow');
  }
}
