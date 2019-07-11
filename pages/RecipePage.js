'use strict';

function RecipePage(id, parent) {
  this.baseUrl = 'https://api.punkapi.com/v2';
  this.parent = parent;
  this.id = id;
  this.recipe = null;
  this.elements = null;
}

RecipePage.prototype.generate = async function() {
  await this.connectToApi();
  var recipe = this.recipe[0];
  console.log(recipe)
  var bgNum = Math.ceil(Math.random() * 6); 
  this.elements = `
  <article class="recipe">
    <header class="recipe-header bg-image-${bgNum}">
      <h2>${recipe.name}</h2>
      <h4>${recipe.tagline}</h4>
    </header>
  `;
  this.render();
};

RecipePage.prototype.connectToApi = async function() {
  this.recipe = await beerServiceInstance.getOneBeer(this.id);
};

RecipePage.prototype.render = function() {
  this.parent.innerHTML = this.elements;
};
