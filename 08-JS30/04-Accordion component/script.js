"use strict"

const dropIcon = document.querySelectorAll('.drop-icon')

let drop = false;
function dropDown(){
    drop = !drop;
    const div = this.closest('.item-container')
    div.classList.toggle('item-active')

}

dropIcon.forEach(icon => icon.addEventListener('click', dropDown))