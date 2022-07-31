"use strict";
const key = document.querySelectorAll(".key");


const activePlaying = function (e) {
    e.stopPropagation();
    // console.log(e.target)
    let keycode = e.keyCode || this.getAttribute('data-key')
    // console.log(keycode)
    const audio = document.querySelector(`audio[data-key="${keycode}"]`)
    if(!audio) return; //stop the event
    audio.currentTime =0;
    audio.play();
    const audioBox = document.querySelector(`.key[data-key="${keycode}"]`)
    audioBox.classList.add('playing')
    // console.log(audioBox)

};

const reomveTransition = function(e){
    // console.log(e)
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

window.addEventListener('keydown',activePlaying)
key.forEach(k=> k.addEventListener('click',activePlaying))
key.forEach((k) => k.addEventListener("transitionend", reomveTransition));
