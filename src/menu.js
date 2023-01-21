import menuArray from './crateMenuDishes'

const menuPage = () => {
    const menu = document.createElement('div')
    menu.id = 'menu';
    menu.classList.add('menu', 'page');


    const menuList = document.createElement('ul');

    const createMenuItems = () => {
        for (let i = 0; i < menuArray.length; i++) {
            let li = document.createElement('li');
            li.textContent = menuArray[i].name.toUpperCase();
            let pic = new Image;
            pic.src = menuArray[i].image;
            li.appendChild(pic)
            menuList.appendChild(li);
        }
        menu.appendChild(menuList)
    }
    createMenuItems();

    return menu
}


export default menuPage