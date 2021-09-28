$(function(){
// banner slider

$('#banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: 'linear',
    prevArrow:'<a href="#" class=" arow"><i class="fas fa-arrow-right"></i></a> ',
    nextArrow:'<a href="#" class="arowr"><i class="fas fa-arrow-right"></i></a> ', 
  });

// scrollup
$.scrollUp({
  scrollName: 'scrollUp', // Element ID
  topDistance: '300', // Distance from top before showing element (px)
  topSpeed: 300, // Speed back to top (ms)
  animation: 'fade', // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: '<i class="fas fa-angle-double-up"></i>', // Text for element
  activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});





// home2 counter up
$('.counte').counterUp({
  delay: 2,
  time: 1000
});
// another slider part
$('.another-part').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false
});


// preloder
$(window).load(function() {
	//$("#loading").delay(2000).fadeOut(500);
	$("#loading").fadeOut(1000);
})






});