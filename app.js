import images from './assets/images.js';
import { renderAnimal } from './util/render-gallery.js';
import htmlToDOM from './util/html-to-DOM.js';

const listItem = document.querySelector('.horned-guys');

images.forEach(image => {
    const htmlContent = renderAnimal(image);
    const dom = htmlToDOM(htmlContent);
    listItem.appendChild(dom);
});