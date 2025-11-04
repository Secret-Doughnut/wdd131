const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');

const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌';

li.append(deleteButton);
list.append(li);


button.addEventListener('click', function () {
    if (input.value.trim() !== '') { 
        const li = document.createElement('li');
        li.textContent = input.value.trim();
        list.appendChild(li);
    }
    else {
        list.appendChild("Hello!")
    }
});