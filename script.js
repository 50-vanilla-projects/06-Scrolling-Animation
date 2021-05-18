

let currentY = window.scrollY;
let stepY = 160;


window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = window.scrollY + 'px';
});

/*
let window = document.querySelector(window);
window.addEventListener('scroll', scrollAnimation(currentY))


console.log(currentY);

function scrollAnimation(parameter) {
  if (parameter is odd) {
    slideInFromLeft();
  }
  else slideInFromLeft();

}

*/







/*

let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})


button.addEventListener('click', (e)=>{
    console.log(e.target.id)
  })


*/