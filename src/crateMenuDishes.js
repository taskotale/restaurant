import sok from './img/juice-fresh.jpeg';
import coffee from './img/menu-coffee-urmasica.jpeg';
import japrak from './img/japrak.jpeg';
import something from './img/something-with-eggs.jpg';
import soup from './img/soup.jpeg';
import kaldrmaMix from './img/kaldrma-mix.jpg';
import octopus from './img/octopus.jpg';
import fish from './img/fish.jpeg';
import mignonSalad from './img/fillet-mignon-salad.jpeg';
import vegetables from './img/vegetables.jpeg';


const createMenu = (dishName, imageSrc) => {
    return {
        name: dishName,
        image: imageSrc
    }
}

const menuItems = [];
        
menuItems.push(createMenu('Kaldrma Mix', kaldrmaMix));
menuItems.push(createMenu('japrak the old way', japrak));
menuItems.push(createMenu('homemade soup', soup));
menuItems.push(createMenu('Something with eggs', something));
menuItems.push(createMenu('Octopus', octopus));
menuItems.push(createMenu('Fish fillet', fish));
menuItems.push(createMenu('Healthy vegetables', vegetables));
menuItems.push(createMenu('fillet mignon salad', mignonSalad));
menuItems.push(createMenu('desserts and turkish coffee', coffee));
menuItems.push(createMenu('Fresh squeezed juice cocktails', sok));

export default menuItems;
