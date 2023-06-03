const button = document.querySelector('#pay');
//console.log(button);


button.addEventListener('click', (e) => {
    const span = document.createElement('span');
    button.innerText = '';
    button.appendChild(span);
})