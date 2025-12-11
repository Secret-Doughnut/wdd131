const bunnies = [
    {
        text: "A healthy bunny's diet consists of a lot of hay, leafy greens (such as ROMAINE lettuce and bok choy leaves), herbs (like cilantro and mint) and a little bit of treats (like apples and bananas).",
        image: "images/hay-bunny.webp",
        alt: "Bunny eating grass hay",
        source: "https://youtu.be/-Bre_hCCLPQ?&t=74",
        nameOfSource: "WHAT TO FEED YOUR PET RABBIT (On YouTube)",
        imageCredit: "<a href=\"https://www.pexels.com/photo/gray-rabbit-1461876/\">Photo by Leanè Jacobs</a>"
    },
    {
        text: "Contrary to popular belief, bunnies can't eat that many carrots without getting sick. Carrots have a lot of sugar for a bunny, so it's best to treat carrots as a TREAT, rather then a normal food item.",
        image: "images/carrots.webp",
        alt: "Carrots",
        source: "https://www.reddit.com/r/Rabbits/comments/awthzk/can_i_feed_my_bunnys_carrots/",
        nameOfSource: "Can i feed my bunnys carrots? (Reddit)",
        imageCredit: "<a href=\"https://www.pexels.com/photo/orange-carrots-on-table-143133/\">Photo by mali maeder</a>"
    },
    {
        text: "Bunnies do not have paw pads on their feet, which might be due to wild bunnies living in areas with soft terrain, like grassy fields and forests. So, you'll need to make sure to have carpet for pet bunnies to run on.",
        image: "images/bunny-paw.webp",
        alt: "Bunny paw",
        source: "https://www.rabbitholehay.com/blogs/rabbit-hole-hay-blog/do-rabbits-have-paw-pads",
        nameOfSource: "Do Rabbits Have Paw Pads or Not? (Rabbit Hole Hay)",
        imageCredit: "<a href=\"https://unsplash.com/photos/girl-holding-white-rabbit-zokLvUcShAc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\\\">Photo by William Daigneault</a>"
    },
    {
        text: "Winter is a very hard time for wild bunnies, since most of the greenery is either gone or covered with snow. So, they turn to whatever plants they can find, even if it's pieces of wood, like bark and twigs.",
        image: "images/winter-bunny.webp",
        alt: "Bunny outside in snow",
        source: "https://www.rabbitholehay.com/blogs/rabbit-hole-hay-blog/what-do-rabbits-eat-during-the-winter",
        nameOfSource: "Winter Rabbit Diet: What Do They Eat? (Rabbit Hole Hay)",
        imageCredit: "<a href=\"https://www.pexels.com/photo/snow-hare-in-winter-landscape-29672772/\">Photo by Stephen Leonardi</a>"
    }
]

const snakes = [
    {
        text: "Snakes are carnivores, meaning that they eat animals like mice and chicks, instead of fruits and vegetables. They also don't eat as often as other animals do, with some eating as often as twice a week and some others as infrequently as a few times per month.",
        image: "images/snake-food.webp",
        alt: "Snake placeholder image",
        source: "https://www.petmd.com/reptile/nutrition/what-do-pet-snakes-eat",
        nameOfSource: "What Do Snakes Eat? (PetMD)",
        imageCredit: "<a href=\"https://www.pexels.com/photo/close-up-shot-of-a-snake-eating-fish-12961010/\">Photo by Ольга Бочкарева</a>"
    },
    {
        text: "There are some snakes who spend most of their life underwater. They still need air though. So, they need to regularly come up to the surface to get that air. These snakes can stay underwater for around 30 minutes on average. Some snakes can stay underwater for around 2 hours!",
        image: "images/sea-snake.webp",
        alt: "Snake placeholder image",
        source: "https://youtu.be/nlLhHduDbgs&t=40",
        nameOfSource: "Sea Snakes | How Do Snakes Survive in the Ocean? (YouTube)",
        imageCredit: "<a href=\"https://www.pexels.com/photo/snake-near-people-diving-7169290/\">Photo by Graham Henderson</a>"
    },
    {
        text: "While snakes can smell with their noses, they mainly use their tongues to smell. When they stick their tongue out, the tongue collect scent particles and brings it to the area where they discern smell. Which is commonly called the \"Jacobson's organ\".",
        image: "images/snake-tongue.webp",
        alt: "Snake placeholder image",
        source: "https://youtu.be/fQaOrxS5iNc&t=32",
        nameOfSource: "How Do Snakes Smell With Their Tongues? | Amazing Animal Senses! | SciShow Kids (YouTube)",
        imageCredit: "<a href=\"https://www.pexels.com/photo/close-up-of-a-snake-on-the-sand-16879408/\">Photo by Robert So</a>"
    }
]

const axolotls = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/axolotl-placeholder.webp",
        alt: "placeholder",
        source: "Placeholder Text",
        nameOfSource: "Placeholder once again",
        imageCredit: "placeholder"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/axolotl-placeholder.webp",
        alt: "placeholder",
        source: "Placeholder Text",
        nameOfSource: "Placeholder once again",
        imageCredit: "placeholder"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/axolotl-placeholder.webp",
        alt: "placeholder",
        source: "Placeholder Text",
        nameOfSource: "Placeholder once again",
        imageCredit: "placeholder"
    }
]

let cardHolder = document.querySelector(".basic-needs");
let bunnyCard = document.querySelector("#bunny");
let snakeCard = document.querySelector("#snake");
let axolotlCard = document.querySelector("#axolotl");
let linkBox = document.querySelector(".links");
let creditBox = document.querySelector(".credits")


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

createCreditCard(bunnies);
createCreditCard(snakes);

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

function createCreditCard(animals) {
    animals.forEach(animal => {
        let credit = document.createElement("div");
        let imagePreview = document.createElement("img");
        
        credit.innerHTML = animal.imageCredit;
        imagePreview.setAttribute("src", animal.image);
        imagePreview.setAttribute("alt", animal.alt);
        imagePreview.setAttribute("loading", "lazy");

        
        credit.appendChild(imagePreview);
        creditBox.appendChild(credit);
    });
}