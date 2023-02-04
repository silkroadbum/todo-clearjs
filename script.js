const list = document.querySelector('.list');
const input = document.querySelector('.input');
const btn = document.querySelector('.button')

const createListElement = (text) => {
    const elem = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = 'Удалить';
    elem.className = 'list-item';
    elem.textContent = text;
    elem.appendChild(button);
    button.addEventListener('click', () => {
        elem.remove();
    });
    return elem;
}

btn.addEventListener('click', () => {
    if (input.value) {
        list.append(createListElement(input.value));
        input.value = '';
    }
});