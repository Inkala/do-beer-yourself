'use strict';

class BeerRecipeService {
  constructor() {
    this.baseUrl = 'https://api.punkapi.com/v2';
  }

  async getBeerRecipes() {
    const res = await fetch(`${this.baseUrl}/beers?page=2&per_page=80`);
    const data = await res.json();
    return data;
  };

  async getOneBeer(id) {
    const res = await fetch(`${this.baseUrl}/beers/${id}`);
    const data = await res.json();
    return data;
  }
};

const beerServiceInstance = new BeerRecipeService();