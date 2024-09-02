$('#burger').on( 'click', function() {
  $('body').toggleClass('activeBurger');
})

$('li.menu-item-has-children').on('click', function (e) {
	e.stopPropagation();
	$(this).toggleClass('active');
})


if ($(".tech_table-left_table").children().length) {
	$(".tech_table-left_table").children().hide();
  $('.tech-more').show();
	
	$(".tech_table-left_table").children().each(function(i) {
    if (i <= 4) {
      $( this ).show();
    }
	});
}

$('.tech-more').on('click', function (e) {
	e.stopPropagation();
	$(".tech_table-left_table").children().show();
  $('.tech-more').hide();
})

const tech_swiper = new Swiper(".tech_table-right-container", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});