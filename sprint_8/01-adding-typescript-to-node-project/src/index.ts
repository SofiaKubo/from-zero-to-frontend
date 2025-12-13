import { streetDogs } from './dog';

streetDogs.forEach(dog => {
    console.log(`На нашей улице гуляет собака по имени`, dog.name);

    if (dog.owner) {
        console.log(`Её хозяин -`, dog.owner);
    }
    else {
        console.log(`Кажется, у неё нет своего дома :(`);
    }
});