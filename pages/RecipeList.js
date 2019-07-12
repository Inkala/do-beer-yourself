'use strict';

function RecipeList(parent) {
  this.parent = parent;
  this.recipes = null;
  this.elements = null;
  this.loading = null;
}

RecipeList.prototype.generate = async function() {
  this.loading = new Loading(this.parent);
  this.loading.generate();

  await this.connectToApi();

  this.elements = `<section class="recipe-list">`;
  this.recipes.forEach((recipe, i) => {
    // var className = i % 2 === 0 ? 'left' : 'right';
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
};

RecipeList.prototype.connectToApi = async function() {
  this.recipes = await beerServiceInstance.getBeerRecipes();
};

RecipeList.prototype.addListenersToCards = function() {
  var recipeCards = document.querySelectorAll('.recipe-card');
  recipeCards.forEach(card => {
    card.addEventListener('click', () => this.openRecipe(event));
  })
};

RecipeList.prototype.openRecipe = function(event) {
  var url = event.target.dataset.url || event.target.parentNode.dataset.url;
  routerInstance.buildDom(url, this.parent);
};

RecipeList.prototype.render = function() {
  this.parent.innerHTML = this.elements;
  var header = this.parent.previousElementSibling;
  header.classList.remove('arrow');
};
