'use strict';

class Router {
  // constructor() {}

  buildDom(url, parentElement) {
    switch (url) {
      case '/':
        this.generateLandingPage(parentElement);
        break;
      case '/recipes':
        this.generateRecipeList(parentElement);
        break;
      default:
        this.generateRecipePage(url, parentElement);
    }
  }

  generateLandingPage(parentElement) {
    this.page = new LandingPage(parentElement);
    this.page.generate();
  }

  generateRecipeList(parentElement) {
    this.page = new RecipeList(parentElement);
    this.page.generate();
  }

  generateRecipePage(url, parentElement) {
    this.page = new RecipePage(url, parentElement);
    this.page.generate();
  }
}

const routerInstance = new Router();
