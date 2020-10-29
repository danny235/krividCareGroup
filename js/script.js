const burger = document.querySelector('#burger');
const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');
burger.addEventListener('click', (e) => {
    list.classList.toggle('toggle');
})

fresh.addEventListener('click', (e) =>{
    console.log(e.target.name)
    
})


