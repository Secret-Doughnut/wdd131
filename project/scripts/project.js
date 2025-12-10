const bunnies = [
    {
        text: "A healthy bunny's diet consists of a lot of hay, leafy greens (such as ROMAINE lettuce and bok choy leaves), herbs (like cilantro and mint) and a little bit of treats (like apples and bananas).",
        image: "images/test-bunny-one.webp",
        alt: "bunny picture 1",
        source: "https://youtu.be/-Bre_hCCLPQ?&t=74",
        nameOfSource: "WHAT TO FEED YOUR PET RABBIT (On YouTube)",
    },
    {
        text: "Contrary to popular belief, bunnies can't eat that many carrots without getting sick. Carrots have a lot of sugar for a bunny, so it's best to treat carrots as a TREAT, rather then a normal food item.",
        image: "images/test-bunny-two.webp",
        alt: "bunny picture 2",
        source: "https://www.reddit.com/r/Rabbits/comments/awthzk/can_i_feed_my_bunnys_carrots/",
        nameOfSource: "Can i feed my bunnys carrots? (Reddit)",
    },
    {
        text: "Bunnies do not have paw pads on their feet, which might be due to wild bunnies living in areas with soft terrain, like grassy fields and forests. So, you'll need to make sure to have carpet for pet bunnies to run on.",
        image: "images/test-bunny-three.webp",
        alt: "bunny picture 3",
        source: "https://www.rabbitholehay.com/blogs/rabbit-hole-hay-blog/do-rabbits-have-paw-pads",
        nameOfSource: "Do Rabbits Have Paw Pads or Not? (Rabbit Hole Hay)",
    },
    {
        text: "Winter is a very hard time for wild bunnies, since most of the greenery is either gone or covered with snow. So, they turn to whatever plants they can find, even if it's pieces of wood, like bark and twigs.",
        image: "images/test-bunny-four.webp",
        alt: "bunny picture 4",
        source: "https://www.rabbitholehay.com/blogs/rabbit-hole-hay-blog/what-do-rabbits-eat-during-the-winter",
        nameOfSource: "Winter Rabbit Diet: What Do They Eat? (Rabbit Hole Hay)",
    }
]

const snakes = [
    {
        text: "Snakes are carnivores",
        image: "images/snake-placeholder.webp",
        alt: "Not in existence",
        source: "https://www.petmd.com/reptile/nutrition/what-do-pet-snakes-eat",
        nameOfSource: "What Do Snakes Eat? (PetMD)"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/snake-placeholder.webp",
        alt: "Not in existence",
        source: "Placeholder Text",
        nameOfSource: "Placeholder once again"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/snake-placeholder.webp",
        alt: "Not in existence",
        source: "Placeholder Text",
        nameOfSource: "Placeholder once again"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/snake-placeholder.webp",
        alt: "Not in existence",
        source: "Placeholder Text",
        nameOfSource: "Placeholder once again"
    }
]

const axolotls = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "another-hold-on",
        alt: "placeholder",
        source: "Placeholder Text",
        nameOfSource: "Placeholder once again"
    }
]

let cardHolder = document.querySelector(".basic-needs");
let bunnyCard = document.querySelector("#bunny");
let snakeCard = document.querySelector("#snake");
let axolotlCard = document.querySelector("#axolotl");
let linkBox = document.querySelector(".links");


let factCounter = 0;
let linkCounter = 0;

if (bunnyCard) {
    createAnimalFactCard(bunnies);
    addFactSource(bunnies);
}
else if (snakeCard) {
    createAnimalFactCard(snakes);
    addFactSource(snakes);
}
else if (axolotlCard) {
    createAnimalFactCard(axolotls);
    addFactSource(axolotls);
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

        cardContainer.classList.add("card");

        factCounter += 1;

        textContainer.textContent = `Fact ${factCounter}: ${animal.text}`
        imageContainer.setAttribute("src", animal.image);
        imageContainer.setAttribute("alt", animal.alt);
        imageContainer.setAttribute("loading", "lazy");

        
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(textContainer);

        cardHolder.appendChild(cardContainer);
    });
}


function addFactSource(animals) {
    animals.forEach(animal => {
        let sourceLink = document.createElement("a");

        linkCounter += 1;

        sourceLink.textContent = `Fact ${linkCounter}: ${animal.nameOfSource}`;
        sourceLink.href = animal.source;


        linkBox.appendChild(sourceLink);
    });
}