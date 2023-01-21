import './styles.css';
import landingPage from './createHome.js';
import main from './createMainBones';
import menuPage from './menu';


document.body.appendChild(main())
document.body.appendChild(landingPage())

const menuBtn = document.getElementById('menuBtn')
const aboutBtn = document.getElementById('aboutBtn')
const logo = document.getElementById('logo')

logo.addEventListener('click', ()=>window.location.reload())

menuBtn.addEventListener('click', (e) => {
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(menuPage());
})