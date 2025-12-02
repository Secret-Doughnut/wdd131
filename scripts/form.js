const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select = document.querySelector("#drop");
const mainContent = document.querySelector(".main-thing");

if (select) {
    products.forEach(product => {
        let dropdownItem = document.createElement('option');
        dropdownItem.value = product.id;
        dropdownItem.textContent = product.name;
    
        select.appendChild(dropdownItem);
    });

}

console.log(mainContent);

if (mainContent) {
    let counter = document.createElement('p');
    let visitNumber = Number(window.localStorage.getItem("times-visited")) || 0;
    

    mainContent.appendChild(counter)
    visitNumber++;
    localStorage.setItem("times-visited", visitNumber);

    if (visitNumber != 1) {
        counter.textContent = `You have submitted ${visitNumber} reviews! Thank you for your support!`;
    }
    else {
        counter.textContent = `This is your first review! Thank you again for your support!`;
    }
    
}