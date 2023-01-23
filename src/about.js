const aboutPage = () => {
    const about = document.createElement('div')
    about.id = 'about';
    about.classList.add('about', 'page');

    const textContent =document.createElement('div')
    textContent.classList.add('text-content')

    const para = document.createElement('p')
    const para2 = document.createElement('p')
    const para3 = document.createElement('p')
    const para4 = document.createElement('p')
    const para5 = document.createElement('p')

    para.textContent = 'First authentic restaurant specialized for traditional cuisine in Montenegro. Owned by the Bećović family';
    para2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro modi beatae sapiente architecto.';
    para3.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel nam libero. Rem ex hic numquam laborum est omnis explicabo expedita reiciendis.';
    para4.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel nam libero. Rem ex hic numquam laborum est omnis explicabo expedita reiciendis.';
    para5.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel nam libero. Rem ex hic numquam laborum est omnis explicabo expedita reiciendis.';

    textContent.appendChild(para);
    textContent.appendChild(para2);
    textContent.appendChild(para3);
    textContent.appendChild(para4);
    textContent.appendChild(para5);

    about.appendChild(textContent);

    return about
}

export default aboutPage