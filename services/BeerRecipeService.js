'use strict';

function BeerRecipeService() {
  this.baseUrl = 'https://api.punkapi.com/v2';
}

BeerRecipeService.prototype.getBeerRecipes = async function() {
  var res = await fetch(`${this.baseUrl}/beers`);
  var data = await res.json();
  console.log(data);
};

var beerServiceInstance = new BeerRecipeService();

beerServiceInstance.getBeerRecipes();
