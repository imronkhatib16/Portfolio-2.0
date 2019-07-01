window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var button = document.getElementById("modalBtn");
var fixedBar = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > fixedBar) {
  	// console.log('added fixed-bar')
    nav.classList.add("fixed-bar")
  } else {
  	// console.log('removed fixed-bar')
    nav.classList.remove("fixed-bar");
  }
}





var modal = document.getElementById('modal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementById('closeBtn');

// Open modal on button click

modalBtn.addEventListener('click', openModal);

function openModal() {
  modal.style.display = 'grid';
}

// Close modal on close button click

closeBtn.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = 'none';
}

// Close modal on outside click

window.addEventListener('click', outsideClick);

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  } 
}
