import { lorem } from './lorem'

let store = [
    {
        img: '../dist/images/8db8265e-1cff-11ea-81f0-0c253907d3e0.jpeg',
    },
    {
        img: '../dist/images/8db8265e-1cff-11ea-81f0-0c253907d3e0.jpeg',
    }
]

const content = document.getElementById('content');

const showHome = () => {
    const main = document.createElement('div');
    main.id = 'main-2';

    for (let cell of store) {
        const imgWrapper = document.createElement('div');
        imgWrapper.classList = 'img-wrapper';

        const imgTab = document.createElement('img');
        imgTab.src = cell.img;

        const textDiv = document.createElement('div');
        textDiv.classList = 'text-part';
        textDiv.textContent = `${lorem.generateParagraphs(3)}`;
        
        imgWrapper.appendChild(imgTab);
        imgWrapper.appendChild(textDiv);
        main.appendChild(imgWrapper);
    }  

    content.appendChild(main);
}

export {
    showHome,
}