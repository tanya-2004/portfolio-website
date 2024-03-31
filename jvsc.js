// Hide the menu initially
document.getElementById("sidemenu").style.right = "-200px";

// Add event listener for the menu button
document.querySelector('.fa-bars').addEventListener('click', openmenu);

function openmenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
    document.querySelector('nav').classList.add('open');
}

// Add event listener for the close button
document.querySelector('.fa-times').addEventListener('click', closemenu);

function closemenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
    document.querySelector('nav').classList.remove('open');
}

// Check if the screen size is less than or equal to 600 pixels (small screens)
if (window.matchMedia("(max-width: 600px)").matches) {
    // Functions and event listeners for small screens
    var sidemenu = document.getElementById("sidemenu");

    // Hide the menu initially
    sidemenu.style.right = "-200px";
}

function opentab(event, tabname) {
  // Hide all tab contents
  var tabContents = document.querySelectorAll('.tab-contents');
  tabContents.forEach(function(tabContent) {
    tabContent.classList.remove('active-tab');
  });

  // Remove active class from all tab links
  var tabLinks = document.querySelectorAll('.tab-links');
  tabLinks.forEach(function(tabLink) {
    tabLink.classList.remove('active-link');
  });

  // Show the selected tab content
  document.getElementById(tabname).classList.add('active-tab');

  // Add active class to the clicked tab link
  event.currentTarget.classList.add('active-link');
}

// Rest of your JavaScript code
const scriptURL = 'https://script.google.com/macros/s/AKfycbwU5_ngyczFiiKt8ioAi5rrnbB1hYB6TXIgNazGd3TAlEGwYK5Andv7dEh4cOjBeIOc/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

// Add event listener for the menu button
document.querySelector('.fa-bars').addEventListener('click', openmenu);

function openmenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
    document.querySelector('nav').classList.add('open');
}

// Add event listener for the close button
document.querySelector('.fa-times').addEventListener('click', closemenu);

function closemenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
    document.querySelector('nav').classList.remove('open');
}
