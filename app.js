import images from './assets/images.js';
import { renderAnimal } from './util/render-gallery.js';
import htmlToDOM from './util/html-to-DOM.js';

const listItem = document.querySelector('.horned-guys');
const keywordFilter = document.querySelector('.keyword-select');

const renderSelectedAnimal = (renderedAnimal) => {
    while (listItem.lastElementChild){
        listItem.lastElementChild.remove();
    }

    renderedAnimal.forEach(animal => {
        const htmlContent = renderAnimal(animal);
        const dom = htmlToDOM(htmlContent);
        listItem.appendChild(dom);
    });
};

keywordFilter.addEventListener('change', () => {
    const keyword = keywordFilter.value;
    let filteredHorns = null;

    if (!keyword) {
        filteredHorns = images;
    }
    else {
        filteredHorns = images.filter(image => {
            return image.keyword === keyword;
        });
    }

    renderSelectedAnimal(filteredHorns);
});

renderSelectedAnimal(images);