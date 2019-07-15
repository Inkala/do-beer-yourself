'use strict';

class RecipeList {
  constructor(parent) {
    this.parent = parent;
    this.recipes = null;
    this.elements = null;
    this.loading = null;
  }

  async generate() {
    this.loading = new Loading(this.parent);
    this.loading.generate();

    await this.connectToApi();

    this.elements = `<section class="recipe-list">`;
    this.recipes.forEach((recipe, i) => {
      this.elements += `
      <article data-url=${recipe.id} class="recipe-card">
        <h3>${recipe.name}</h3>
        <p>${recipe.tagline}</p>
        </article>
      `;
    });
    this.elements += `</section>`;
    this.render();
    this.addListenersToCards();
  }

  async connectToApi() {
    this.recipes = await beerServiceInstance.getBeerRecipes();
  }

  addListenersToCards() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
      card.addEventListener('click', () => this.openRecipe(event));
    });
  }

  openRecipe(event) {
    const url = event.target.dataset.url || event.target.parentNode.dataset.url;
    routerInstance.buildDom(url, this.parent);
  }

  render() {
    this.parent.innerHTML = this.elements;
    const header = this.parent.previousElementSibling;
    header.classList.remove('arrow');
  }
}
