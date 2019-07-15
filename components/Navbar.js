'use strict';

class Navbar {
  constructor(parent, links) {
    this.parent = parent;
    this.elements = null;
    this.links = links;
  }

  generate() {
    this.elements = `<nav class="site-navbar"><ul>`;
    this.links.forEach(link => {
      this.elements += `<li>
        <a href="#0" url=${link.url}>
          <img src="./images/${link.img}.png" alt="${link.alt}">
        </a> 
      </li>`;
    });
    this.elements += `</ul></nav>`;
    this.render();
  }

  render() {
    this.parent.innerHTML = this.elements;
  }
}
