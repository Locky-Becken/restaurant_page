const content = document.getElementById('content')

const popHeader = () => {
    const header = document.createElement('header');

    // restaurant title
    const h1Tag = document.createElement('h1');
    h1Tag.textContent = 'yukihiras';

    // nav-bar
    const navDiv = document.createElement('div');
    navDiv.id = 'nav-div';

    // home of nav-bar
    const home = document.createElement('a');
    home.id = 'nav-Home';
    home.href = '#';
    home.textContent = "home";

    // About us of nav-bar
    const about = document.createElement('a');
    about.id = 'nav-About';
    about.href = '#';
    about.textContent = 'about';

    // Menu of nav-bar
    const menu = document.createElement('a');
    menu.id = 'nav-Menu';
    menu.href = '#';
    menu.textContent = 'menu';

    navDiv.appendChild(home);
    navDiv.appendChild(about);
    navDiv.appendChild(menu);
    header.appendChild(h1Tag);
    header.appendChild(navDiv);
    content.appendChild(header);
}

export {
    popHeader,
}