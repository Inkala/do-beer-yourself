'use strict';

function BeerRecipeService() {
  this.baseUrl = 'https://api.punkapi.com/v2';
}

BeerRecipeService.prototype.getBeerRecipes = async function() {
  var res = await fetch(`${this.baseUrl}/beers`);
  var data = await res.json();
  return data;
};

BeerRecipeService.prototype.getOneBeer = async function(id) {
  var res = await fetch(`${this.baseUrl}/beers/${id}`);
  var data = await res.json();
  return data;
};

var beerServiceInstance = new BeerRecipeService();