var close = document.getElementById('close');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var overlay = document.querySelector('.overlay');
var currentImageIndex = 0;

var myImages = Array.from(document.querySelectorAll('.imges'));

close.addEventListener('click', hideOverLay);
next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);

for (var i = 0; i < myImages.length; i++) {
  myImages[i].addEventListener('click', showOverlay);
}

function showOverlay(e) {
  overlay.style.display = 'flex';
  var imgSrc = e.target.src;
  currentImageIndex = myImages.indexOf(e.target);
  overlay.firstElementChild.style.backgroundImage = `url(${imgSrc})`;
}

function hideOverLay() {
  overlay.style.display = 'none';
}

function goNext() {
  currentImageIndex++;
  if (currentImageIndex == myImages.length) {
    currentImageIndex = 0;
  }
  overlay.firstElementChild.style.backgroundImage = `url(${myImages[currentImageIndex].src})`;
}
function goPrev() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = myImages.length - 1;
  }
  overlay.firstElementChild.style.backgroundImage = `url(${myImages[currentImageIndex].src})`;
}
document.addEventListener('keydown', function (e) {
  if (e.keyCode == 39) {
    goNext();
  } else if (e.keyCode == 37) {
    goPrev();
  } else if (e.keyCode == 27) {
    hideOverLay();
  }
});
