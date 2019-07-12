'use strict';

function RecipePage(id, parent) {
  this.baseUrl = 'https://api.punkapi.com/v2';
  this.parent = parent;
  this.id = id;
  this.recipe = null;
  this.elements = null;
  this.ingredients = {};
  this.method = {};
  this.food = null;
}

RecipePage.prototype.generate = async function() {
  await this.connectToApi();
  var recipe = this.recipe[0];
  var bgNum = Math.ceil(Math.random() * 6);
  await this.createIngredientsSection(recipe.ingredients);
  await this.createFoodSection(recipe.food_pairing);
  await this.createMethodSection(recipe.method);
  this.elements = `
  <article class="recipe">
    <header class="recipe-header bg-image-${bgNum}">
      <h2>${recipe.name}</h2>
      <h3>${recipe.tagline}</h3>
    </header>
    <section class="recipe-content">
      <h2>Delicious since <span>${recipe.first_brewed}</span></h2>
      <section class="description">
        <p>${recipe.description}</p>
      </section>
      <section class="recipe-section stats">
        <h4>About this beer</h4>
        <div>
          <img src=${recipe.image_url} alt="Beer picture">
          <ul>
            <li><b>Volume:</b> ${recipe.volume.value} ${recipe.volume.unit[0].toUpperCase()}</li>
            <li><b>Boil Volume:</b> ${recipe.boil_volume.value} ${recipe.boil_volume.unit[0].toUpperCase()}</li>
            <li><a href="https://shorecraftbeer.com/abv-and-ibu-explained/" target="_blank">ABV</a>: ${recipe.abv}</li>
            <li><a href="https://shorecraftbeer.com/abv-and-ibu-explained/" target="_blank">IBU</a>: ${recipe.ibu}</li>
            <li><a href="http://www.thebrewlist.com/converter/beer-colour" target="_blank">SRM</a>: ${recipe.srm}</li>
            <li><a href="http://www.thebrewlist.com/converter/beer-colour" target="_blank">EBC</a>: ${recipe.ebc}</li>
          </ul>
        </div>
      </section>
      <hr>
      <section class="recipe-section ingredients collapsed">
        <h4>Ingredients</h4>
        <p>Malts:</p>
        <ul>${this.ingredients.malt}</ul>
        <p>Hops:</p>
        <ul>${this.ingredients.hops}</ul>
        <p>Yeast:</p>
        <ul>${this.ingredients.yeast}</ul>
      </section>
      <hr>
      <section class="recipe-section preparation collapsed">
        <h4>Preparation</h4>
        <p><b>Mash:</b> ${this.method['mash_temp']}</p>
        <p><b>Fermantation:</b> ${this.method['fermentation']}</p>
        <p><b>Twist:</b> ${this.method['twist'] ? this.method['twist'] : "None"}
      </section>
      <hr>
      <section class="recipe-section tips collapsed">
        <h4>Brewer Tips</h4>
        <p>${recipe.brewers_tips}</p>
      </section>
      <hr>
      <section class="recipe-section food collapsed">
        <h4>Food Paring</h4>
        <ul>${this.food}</ul>
      </section>
    </section>

  `;
  this.render();
  this.addCollapseClass();
};

RecipePage.prototype.createIngredientsSection = function(ingredients) {
  for (var ingredient in ingredients) {
    if (typeof ingredients[ingredient] === 'string') {
      this.ingredients[ingredient] = `<li>${ingredients[ingredient]}</li>`;
    } else {
      var singleIngredient = "";
      this.ingredients[ingredient] = ingredients[ingredient].forEach(ing => {
        singleIngredient += `<li>
          ${ing.amount.value} ${ing.amount.unit[0]} of ${ing.name}`;
        singleIngredient += ing.add ? ` at the ${ing.add} for ${ing.attribute}` : "";
        singleIngredient += `</li>`;
      })
      this.ingredients[ingredient] = singleIngredient;
    }
  }
};

RecipePage.prototype.createMethodSection = function(methodList) {
  for (var method in methodList) {
    if(method === 'mash_temp') {
      var meshStr = `At ${methodList[method][0].temp.value}C°`;
      meshStr += methodList[method][0].duration ? ` for ${methodList[method][0].duration}m` : "";
      this.method[method] = meshStr;
    }
    if(method === 'fermentation') {
      this.method[method] = `At ${methodList[method].temp.value}C°`;
    }
    if(methodList[method] && method === 'twist') {
      this.method[method] = `${methodList[method]}`
    }
  }
};

RecipePage.prototype.createFoodSection = function(foodParing) {
  this.food = '';
  foodParing.forEach(food => {
    this.food += `<li>${food}</li>`;
  })
};

RecipePage.prototype.addCollapseClass = function() {
  var sectionList = document.querySelectorAll('.recipe-section h4');
  sectionList.forEach(section => {
    section.addEventListener('click', (event) => {
      event.target.parentNode.classList.toggle('collapsed');
    })
  })
}

RecipePage.prototype.connectToApi = async function() {
  this.recipe = await beerServiceInstance.getOneBeer(this.id);
};

RecipePage.prototype.render = function() {
  this.parent.innerHTML = this.elements;
  var header = this.parent.previousElementSibling;
  header.classList.add('arrow');
};
