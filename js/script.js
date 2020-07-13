var inputContext = document.querySelector('input');

document.querySelector('body').classList.add('container');

document.querySelector('#enviar').addEventListener('click', function(ev){
    ev.preventDefault();

    var ul = document.createElement('ul');

    var li = document.createElement('li');
    li.textContent = inputContext.value;
    li.classList.add('nodecoration');
    ul.appendChild(li);
    document.querySelector('body').appendChild(ul);


});