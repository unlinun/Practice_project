const clock = document.querySelector('.clock')
const hand = document.querySelector('.hand')
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');

function checkDeg(deg){
const rotate = deg === 0 ? hand.style.transtution = `all 0s` : hand.style.transtution = `all 0.08s`
console.log(rotate)
return `rotate(${deg}deg)`
}
function setClock(){
    const date = new Date();
    console.log(date)

    // set hour-hand
    const hourDeg = (date.getHours()/12*360)+90;
    hourHand.style.transform = checkDeg(hourDeg)

    //set min-hand
    const minDeg = (date.getMinutes()/60*360)+90;
    minHand.style.transform = checkDeg(minDeg)

    // set sec-hand
    const secDeg = (date.getSeconds()/60*360)+90;
    secHand.style.transform =checkDeg(secDeg)
}
// setInterval(setClock,1000)
function setTime (){
    setInterval(setClock,1000)
}
window.addEventListener('load',setTime)