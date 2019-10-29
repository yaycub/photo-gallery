export const renderAnimal = (animal) => {
    const html = `
    <li>
        <div class="title-container">
            <h2>${animal.title}</h2>
        </div>
        <div class="animal-image">
            <img src="${animal.url}" alt="${animal.title} image" class="image-con">
        </div>
        <p class="horns">Horns: ${animal.horns}</p>
    </li>
    `;
    return html;
};