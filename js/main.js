
$('.main').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false,
    touchMove: false,
    prevArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-right"></i></button>',
    
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.main').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.main').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });

  // ==================== screen zoom disable 
   // Disable zooming for mobile (touch events)
   document.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

// Disable zooming on desktop (mouse wheel, etc.)
document.addEventListener('wheel', function (e) {
  if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
  }
}, { passive: false });


// ============back to top gallaery

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
