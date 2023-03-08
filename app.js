// Access HTML elements

const carouselRow = document.querySelector('.slides-row');
const carouselSlides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Declare Variables

let index = 1;
var width;

function slideWidth(){
    width = carouselSlides[0].clientWidth;
}
slideWidth();
window.addEventListener('resize', slideWidth);
carouselRow.style.transform = 'translateX(' + (- width * index) + 'px)' ;

// Go To Next Slide

nextBtn.addEventListener('click' , nextSlide);
function nextSlide(){
    if(index >= carouselSlides.length - 1){return};
    carouselRow.style.transition = 'transform 0.4s ease-out';
    index++;
    carouselRow.style.transform = 'translateX(' + (- width * index) + 'px)';
    dotsLabel();
}

// Go To Previous Slide

prevBtn.addEventListener('click' , prevSlide); 
function prevSlide(){
    if(index <= 0){return};
    carouselRow.style.transition = 'transform 0.4s ease-out';
    index--;
    carouselRow.style.transform = 'translateX(' + (- width * index) + 'px)';
    dotsLabel();
}

// Return to the first slide when reaches last slide

carouselRow.addEventListener('transitionend' , function(){
    if(carouselSlides[index].id === 'firstImageDuplicate'){
        carouselRow.style.transition = 'none';
        index = carouselSlides.length - index;
        carouselRow.style.transform = 'translateX(' + (- width * index) + 'px)';
        dotsLabel();
    }

    if(carouselSlides[index].id === 'lastImageDuplicate'){
        carouselRow.style.transition = 'none';
        index = carouselSlides.length - 2;
        carouselRow.style.transform = 'translateX(' + (- width * index) + 'px)';
        dotsLabel();
    }
})

// Auto Sliding

function autoSlide(){
    deleteInterval = setInterval(timer, 5000);
    function timer(){
        nextSlide();
    }
}
autoSlide();

// // Stop auto sliding when mouse is over

// const mainContainer = document.querySelector('#slides-content');
// mainContainer.addEventListener('mouseover', function(){
//     clearInterval(deleteInterval);
// });

// // Resume auto sliding when mouse is out

// mainContainer.addEventListener('mouseout', autoSlide);

function dotsLabel(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[index - 1].className += ' active';
}