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

var storyslist = [];
var videoslist = [['https://www.youtube.com/watch?v=94ENNlF_05k', 'Delete Google from Your Life Now']];
var youtubechannelslist = [['https://www.youtube.com/user/thejuicemedia/featured', 'The Juice Media'], ['https://www.youtube.com/channel/UCjr2bPAyPV7t35MvcgT3W8Q', 'The Hated One']];

for (var s = 0; s < storyslist.length; s++) {
  storys.insertAdjacentHTML('beforeend', `<div class="channelLink" style="background-color: rgb(211, 210, 210);"><a style="color: black;" href="${storyslist[s][0]}">${storyslist[s][1]}</a></div>`)
}
for (var v = 0; v < videoslist.length; v++) {
  videos.insertAdjacentHTML('beforeend', `<div class="channelLink" style="background-color: rgb(253, 136, 136);"><a style="color: rgb(122, 94, 94);" href="${videoslist[v][0]}">${videoslist[v][1]}</a></div>`)
}
for (var yc = 0; yc < youtubechannelslist.length; yc++) {
  document.getElementsByClassName('channels')[0].insertAdjacentHTML('beforeend', `<div class="channelLink" style="background-color: rgb(219, 22, 22);"><a style="color: rgb(255, 231, 231);" href="${youtubechannelslist[yc][0]}">${youtubechannelslist[yc][1]}</a></div>`)
}