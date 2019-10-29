import { renderAnimal } from '../util/render-gallery.js';
const test = QUnit.test;

QUnit.module('Render Photo Gallery');

test('renders html from data', assert => {
    // arrange
    const animal = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const html = `
    <li>
        <div class="title-container">
            <h2>UniWhal</h2>
        </div>
        <div class="animal-image">
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="UniWhal image" class="image-con">
        </div>
        <p class="horns">Horns: 1</p>
    </li>
    `;

    // act
    const result = renderAnimal(animal);
    
    // assert
    assert.htmlEqual(result, html);
});