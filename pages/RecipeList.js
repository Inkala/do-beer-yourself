'use strict';

function RecipeList(parent) {
  this.parent = parent;
  this.recipes = null;
  this.elements = null;
}

RecipeList.prototype.generate = async function() {
  await this.connectToApi();

  this.elements = `<section class=recipe-list>`;
  this.recipes.forEach((recipe, i) => {
    var className = i % 2 === 0 ? 'left' : 'right';
    this.elements += `
      <article class="recipe-card ${className}">
        <h3>${recipe.name}</h3>
        <p>${recipe.tagline}</p>
        </article>
        `;
  });
  // <img src="${recipe.image_url}" alt="${recipe.name} picture">
  this.elements += `</section>`;
  this.render();
};

RecipeList.prototype.render = function() {
  this.parent.innerHTML = this.elements;
};

RecipeList.prototype.connectToApi = async function() {
  this.recipes = await beerServiceInstance.getBeerRecipes();
};
