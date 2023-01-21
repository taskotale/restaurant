const landingPage = () => {
    const homePage = document.createElement('div');
    homePage.classList.add('home','page');
    homePage.id= 'homepage';

    const navBtn = document.createElement('div');
    navBtn.classList.add('navBtn')

    const navBtnMenu = document.createElement('div');
    navBtnMenu.textContent = 'MENU';
    navBtnMenu.id = 'menuBtn'
    navBtn.appendChild(navBtnMenu);

    const navBtnAbout = document.createElement('div');
    navBtnAbout.textContent = 'OUR STORY';
    navBtnAbout.id = 'aboutBtn'

    navBtn.appendChild(navBtnAbout);
    homePage.appendChild(navBtn);

    return homePage
}

export default landingPage