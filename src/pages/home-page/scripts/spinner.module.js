const button = document.querySelector('#pay');


button.addEventListener('click', (e) => {
    const span = document.createElement('span');
    button.innerText = '';
    button.appendChild(span);
})