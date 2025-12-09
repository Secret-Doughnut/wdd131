const bunnies = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aut similique! Reprehenderit dolor earum, aliquam, corrupti culpa iure necessitatibus voluptatum magnam natus numquam exercitationem reiciendis quaerat alias officia explicabo suscipit.",
        image: "images/test-bunny-one.webp",
        alt: "bunny picture 1"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aut similique! Reprehenderit dolor earum, aliquam, corrupti culpa iure necessitatibus voluptatum magnam natus numquam exercitationem reiciendis quaerat alias officia explicabo suscipit.",
        image: "images/test-bunny-two.webp",
        alt: "bunny picture 2"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aut similique! Reprehenderit dolor earum, aliquam, corrupti culpa iure necessitatibus voluptatum magnam natus numquam exercitationem reiciendis quaerat alias officia explicabo suscipit.",
        image: "images/test-bunny-three.webp",
        alt: "bunny picture 3"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aut similique! Reprehenderit dolor earum, aliquam, corrupti culpa iure necessitatibus voluptatum magnam natus numquam exercitationem reiciendis quaerat alias officia explicabo suscipit.",
        image: "images/test-bunny-four.webp",
        alt: "bunny picture 4"
    }
]

const alligators = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "hold-on",
        alt: "Not in existence"
    }
]

const axolotls = [
    {
        axolotlText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        axolotlImage: "another-hold-on"
    }
]

let cardHolder = document.querySelector(".basic-needs");
let bunnyCard = document.querySelector("#bunny");
let alligatorCard = document.querySelector("#alligator");
let axolotlCard = document.querySelector("#axolotl");

if (bunnyCard) {
    createAnimalFactCard(bunnies);
}
else if (alligatorCard) {
    createAnimalFactCard(alligators);
}
else if (axolotlCard) {
    createAnimalFactCard(axolotls);
};

const hamburgerButton = document.querySelector('#menu');
const navigation = document.querySelector('.naviagation');

hamburgerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});



function createAnimalFactCard(animals) {
    animals.forEach(animal => {
        let cardContainer = document.createElement("div");
        let imageContainer = document.createElement("img");
        let textContainer = document.createElement("p");

        textContainer.textContent = animal.text;
        imageContainer.setAttribute("src", animal.image);
        imageContainer.setAttribute("alt", animal.alt);
        imageContainer.setAttribute("loading", "lazy");

        
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(textContainer);

        cardHolder.appendChild(cardContainer);
    });
}
