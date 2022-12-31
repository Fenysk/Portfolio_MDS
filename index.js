const button_navigation = document.querySelector('.button_navigation');
const window_navigation = document.querySelector('nav');

let menuOpen = false;

button_navigation.addEventListener('click', () => {
    if (!menuOpen) {
        button_navigation.classList.add('open');
        window_navigation.classList.add('open');
        menuOpen = true;
    } else {
        button_navigation.classList.remove('open');
        window_navigation.classList.remove('open');
        menuOpen = false;

    }
});


var cards = document.querySelectorAll('.card');

var codeColor = 'linear-gradient(to bottom, rgba(253, 72, 0, 0.2), rgba(255, 156, 0, 0.2))';
var videoColor = 'linear-gradient(to bottom, rgba(3, 118, 187, 0.2), rgba(30, 229, 206, 0.2))';
var designColor = 'linear-gradient(to bottom, rgba(87, 0, 129, 0.2), rgba(202, 42, 122, 0.2))';



cards.forEach(function(card) {
    card.addEventListener('mouseover', function() {
        var pageHome = document.querySelector('.page--home');
        
        if (card.classList.contains('card--code')) {
            pageHome.style.background = codeColor;
          } else if (card.classList.contains('card--video')) {
            pageHome.style.background = videoColor;
          } else if (card.classList.contains('card--design')) {
            pageHome.style.background = designColor;
          }

    });

    card.addEventListener('mouseout', function() {
        var pageHome = document.querySelector('.page--home');
        pageHome.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))';
    });
});

