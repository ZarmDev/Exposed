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

function footerhover() {
  bottomFooter.style.backgroundColor = 'rgb(0, 0, 0, 0.1)';
  for (var x = 0; x < bottomFooter.children.length; x++) {
    bottomFooter.children[x].style.color = 'rgb(255, 255, 255, 0.1)';
  }
}
function footerhoverout() {
  bottomFooter.style.backgroundColor = 'rgb(0, 0, 0)';
  for (var z = 0; z < bottomFooter.children.length; z++) {
    bottomFooter.children[z].style.color = 'rgb(255, 255, 255)';
  }
}
for (var i = 0; i < bottomFooter.children.length; i++) {
  bottomFooter.children[i].addEventListener('pointerenter', footerhover)
  bottomFooter.children[i].addEventListener('pointerleave', footerhoverout)
}