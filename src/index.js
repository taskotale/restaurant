import './styles.css';
import landingPage from './createHome.js';
import main from './createMainBones';
import menuPage from './menu';


document.body.appendChild(main())
document.body.appendChild(landingPage())

const menuBtn = document.getElementById('menuBtn')
const aboutBtn = document.getElementById('aboutBtn')

menuBtn.addEventListener('click', () => {
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(menuPage());
})