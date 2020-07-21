import { popHeader } from './header';
import { showAbout } from './aboutUs';
import { showHome } from './home';
import {showMenu} from './menu';

popHeader();
showHome();

const content = document.getElementById('content');
const divNav = document.getElementById('nav-div');

divNav.addEventListener('click', switchTab);

function switchTab(e) {
    if (e.target.id === 'nav-div') return;

    if (e.target.id === 'nav-Menu') {
        content.removeChild(content.lastChild); // remove o item anterior e exibite o target clicado
        showMenu();
    } else if (e.target.id === 'nav-Home'){
        content.removeChild(content.lastChild);
        showHome();
    }else if (e.target.id === 'nav-About') {
        content.removeChild(content.lastChild);
        showAbout();
    }
}

