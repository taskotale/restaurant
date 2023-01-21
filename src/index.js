import './styles.css';
import landingPage from './createHome.js';
import footer from './socialBtn';


document.body.appendChild(landingPage())
document.body.appendChild(footer())

const menuBtn = document.getElementById('menuBtn')
const aboutBtn = document.getElementById('aboutBtn')


const menuPage = () => {
    const homePage= document.getElementById('homepage')
    document.body.removeChild(homePage)
}

menuBtn.addEventListener('click', menuPage)