import mainLogo from './img/logo.png';

const landingPage = () => {
    const homePage = document.createElement('div');
    homePage.classList.add('homepage');
    homePage.id= 'homepage';
    
    const logo = new Image();
    logo.src = mainLogo;
    logo.classList.add('logo');
    homePage.appendChild(logo);

    const navBtn = document.createElement('div');
    navBtn.classList.add('navBtn')

    const navBtnMenu = document.createElement('div');
    navBtnMenu.textContent = 'MENU';
    navBtnMenu.id = 'menuBtn'
    navBtn.appendChild(navBtnMenu);

    const navBtnAbout = document.createElement('div');
    navBtnAbout.textContent = 'ABOUT US';
    navBtnAbout.id = 'aboutBtn'

    navBtn.appendChild(navBtnAbout);
    homePage.appendChild(navBtn);

    return homePage
}

export default landingPage