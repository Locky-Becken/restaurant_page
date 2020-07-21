// substituto para o lorem impsum do HTML
import { lorem } from './lorem'

const content = document.getElementById('content');

// nav-bar home
const showAbout = () => {
    const main = document.createElement('main');
    main.textContent = `${lorem.generateParagraphs(5)}`;

    content.appendChild(main);
};

export {
    showAbout,
};