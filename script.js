// Define variables
var btt = document.getElementById('back-to-top'),
    docElem = document.documentElement,
    offset = 100,
    scrollPos;

// Add scroll event listener
window.addEventListener('scroll', function(event) {
    scrollPos = document.body.scrollTop || docElem.scrollTop;
    btt.className = (scrollPos > offset) ? 'visible' : '';
});

// Add click event listener
btt.addEventListener('click', function(event) {
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});