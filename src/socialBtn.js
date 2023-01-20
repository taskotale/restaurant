import fbIcon from './img/facebook-f.svg';
import igIcon from './img/instagram.svg';

const socialMediaBtn = () => {
    const socialBtn = document.createElement('div');
    socialBtn.classList.add('social-media-btn')

    const fbBtnLink = document.createElement('a') 
    const igBtnLink = document.createElement('a') 
    fbBtnLink.href='https://www.facebook.com/restorankkaldrma.staribar';
    igBtnLink.href='https://www.instagram.com/kaldrmarestaurant/?hl=en';

    const fbBtn = new Image();
    const igBtn = new Image();
    fbBtn.src=fbIcon;
    igBtn.src=igIcon;
    fbBtn.classList.add('fbBtn');
    igBtn.classList.add('igBtn');

    fbBtnLink.appendChild(fbBtn);
    igBtnLink.appendChild(igBtn);

    socialBtn.appendChild(fbBtnLink);
    socialBtn.appendChild(igBtnLink);

    return socialBtn
}

export default socialMediaBtn