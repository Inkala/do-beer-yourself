'use strict';

function RecipeList(parent, recipes) {
  this.parent = parent;
  this.recipes = recipes;
  this.elements = null;
}

RecipeList.prototype.generate = function () {
  this.elements = `
    <section class=recipe-list>
      <article>
        <p>Test</p>
      </article>
    </section>
  `;
  this.render();
}

RecipeList.prototype.render = function() {
  this.parent.innerHTML = this.elements;
}
