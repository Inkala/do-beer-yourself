'use strict';

function Router() {}

Router.prototype.buildDom = function(url, parentElement) {
  switch (url) {
    case '/':
      this.generateLandingPage(parentElement);
      break;
    case '/recipes':
      this.generateRecipeList(parentElement);
      break;
    default:
      this.generateLandingPage(parentElement);
  }
};

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();
};

Router.prototype.generateRecipeList = function(parentElement) {
  this.page = new RecipeList(parentElement);
  this.page.generate();
};

var routerInstance = new Router();