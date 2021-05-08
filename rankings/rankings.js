const navbar = document.getElementsByClassName('navbar')[0];
const storys = document.getElementsByClassName('storys')[0];
const videos = document.getElementsByClassName('videos')[0];
const channels = document.getElementsByClassName('channels'[0]);
const bottomFooter = document.getElementsByClassName('bottomFooter')[0];


const rankingLists = document.getElementsByClassName('rankingLists')[0];


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

var rankingListsArray = [['Most Climate Action', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi'], ['Most Climate Action', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi', '1. Hello', '2. Hi']];



window.rankTrackDiv = -1;

window.toggled = false;

function hideDropdown(dropdown) {
  if (window.toggled === false) {
    for (var hd = 0; hd < document.getElementsByClassName(`dropdown${window.rankTrackDiv}`).length; hd++) {
      document.getElementsByClassName(`dropdown${dropdown}`)[hd].style.display = 'none';
    }
    document.getElementsByTagName('i')[dropdown].style = `transform: rotate(180deg); margin-bottom: 2vw;`;
    window.toggled = true;
  } else {
    for (var hd = 0; hd < document.getElementsByClassName(`dropdown${window.rankTrackDiv}`).length; hd++) {
      document.getElementsByClassName(`dropdown${dropdown}`)[hd].style.display = '';
    }
    document.getElementsByTagName('i')[dropdown].style = `transform: rotate(0deg); margin-bottom: 2vw;`;
    window.toggled = false;
  }
}


for (var rla = 0; rla < rankingListsArray.length; rla++) {
  window.rankTrackDiv++
  for (var il = 0; il < rankingListsArray[rla].length; il++) {
    if (il === 0) {
      rankingLists.insertAdjacentHTML('beforeend', `<h1>${rankingListsArray[rla][0]}</h1><i class="fa fa-sort-desc" aria-hidden="true" onclick="hideDropdown(${rankTrackDiv})"></i><br>`)
    } else {
      rankingLists.insertAdjacentHTML('beforeend', `<li class="dropdown${window.rankTrackDiv}">${rankingListsArray[rla][il]}<br><progress value="${1 - il / rankingListsArray[rla].length}"></progress></li>`)
    }
  }
}