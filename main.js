$('#burger').on( 'click', function() {
  $('body').toggleClass('activeBurger');
})

$('li.menu-item-has-children').on('click', function (e) {
	e.stopPropagation();
	$(this).toggleClass('active');
})


if ($('.tech_table-left_table').children().length) {
	$('.tech_table-left_table').children().hide();
  $('.tech-more').show();
	
	$('.tech_table-left_table').children().each(function(i) {
    if (i <= 4) {
      $( this ).show();
    }
	});
}

$('.tech-more').on('click', function (e) {
	e.stopPropagation();
	$('.tech_table-left_table').children().show();
  $('.tech-more').hide();
})

let tech_swiper = new Swiper('.tech_table-right-container', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.tech_table-right-button-next',
    prevEl: '.tech_table-right-button-prev',
  },
});

let photo_swiper = new Swiper('.photo_video-wrapper-photo-swiper', {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: '.photo_video-button-next',
    prevEl: '.photo_video-button-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
    600: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    1000: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    }
  }
});

$('.photo_video h2 span').on('click', function (e) {
	e.stopPropagation();
	const $type = $( this ).data('type');
  $('.photo_video h2 span').removeClass('active');
  $('.photo_video-wrapper').children().removeClass('active');

  $( this ).addClass('active');
  $(`.photo_video-wrapper > .${ $type }`).addClass('active');
})

if ($('[data-fancybox="photo_gallery"]')) {
  Fancybox.bind('[data-fancybox="photo_gallery"]', {});
}