const navbar = document.getElementsByClassName('navbar')[0];
const storys = document.getElementsByClassName('storys')[0];
const videos = document.getElementsByClassName('videos')[0];
const channels = document.getElementsByClassName('channels'[0]);
const bottomFooter = document.getElementsByClassName('bottomFooter')[0];


function navbarhover() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
}
function navbarhoverout() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(46, 47, 70)';
}

navbar.addEventListener("pointerenter", navbarhover);
navbar.addEventListener("pointerleave", navbarhoverout);