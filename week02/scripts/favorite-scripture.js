const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const deleteButton = document.createElement('button');
const li = document.createElement('li');





button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        list.appendChild(li);
        li.append(deleteButton);
        list.append(li);
        input.focus();
    }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
    input.value = '';
    input.focus();
});