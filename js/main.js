//Check Local Storage Color Option && Add Color Of Local Storage
let changeColor = localStorage.getItem('color-option');
if (changeColor !== null){
    document.documentElement.style.setProperty('--main-color',changeColor);
    
    // Remove Active class from All color Items
    document.querySelectorAll('.color-list li').forEach(elament =>{
    
        elament.classList.remove('active');
        // Add Active Class on Element Acrive
        if (elament.dataset.color === changeColor){
            elament.classList.add('active');
        }
    });
}



//Color Change
// Toggle And Spin Settings Box
document.querySelector('.toggle-set').onclick = function () {

  //Gear Spin
  document.querySelector('.set-palette').classList.toggle('fa-spin');
  //Open And Close Settings Box
  document.querySelector('.setting-box').classList.toggle('appear');
};
//Change Color Of Page
let colorItems = document.querySelectorAll ('.color-list li');
colorItems.forEach(li => {

// Add Event Click
li.addEventListener('click', (e) => {

//Set Color Of Root
       document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
       localStorage.setItem('color-option', e.target.dataset.color);

       //Clear All Active Class From LI (Items)
     e.target.parentElement.querySelectorAll('.active').forEach((elament) => {
           elament.classList.remove('active');
     });
       //Add Class Active Of Active Li (Items)        
        e.target.classList.add('active');
 });
});


// Logo Animation
/*
 var myLogo = document.getElementById('logo');
 window.onload = function () {
  setInterval(function(){myLogo.classList.toggle('pulse'); }, 6000);
 };   */

 var $myLogo = $(".logo");
setInterval(function(){
    $myLogo.toggleClass("pulse");
}, 3000);


$(document).ready(function(){

  // Slider Timer
  $('.carousel').carousel({
    interval: 3000
  })


  // Brands Slider
  $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
      pauseOnHover: false,
      responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });


  //scroll To Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});







