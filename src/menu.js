/* items aleatorios do cardapio */
let store = [
    {
        name: 'item-1',
        value: '5.5'
    },
    {
        name: 'item-2',
        value: '5.9'
    },
    {
        name: 'item-3',
        value: '1.35'
    },
    {
        name: 'item-4',
        value: '5.1'
    },
    {
        name: 'item-5',
        value: '2.5'
    },
    {
        name: 'item-6',
        value: '5.0'
    },
]

const content = document.getElementById('content')

const showMenu = () => {
    const menu = document.createElement('div');
    menu.id = 'menu';

    for (let cell of store){
        const menuItem = document.createElement('div');
        menuItem.classList = 'menu-item';

        const name = document.createElement('p');
        name.textContent = cell.name;

        const value = document.createElement('p');
        value.textContent = cell.value;

        menuItem.appendChild(name);
        menuItem.appendChild(value);
        menu.appendChild(menuItem);
    }
    content.appendChild(menu);
}

export {
    showMenu,
}