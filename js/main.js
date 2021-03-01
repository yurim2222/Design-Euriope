
//달력
$( function() {
    $( "#enddate").datepicker({
        minDate:-0,
        maxDate:"+6M",
        showButtonPanel: true
    });
    $( "#startdate").datepicker({
        minDate:-0,
        maxDate:"+6M",
        showButtonPanel: true
    });          
});
//메인슬라이드
$( function() {
    var swiper = new Swiper('main .swiper-container', {
        navigation: {
          nextEl: 'main .swiper-button-next',
          prevEl: 'main .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
          },
        loop: true,
      });
  } );
  //프로모션
  $(function(){
    
    var swiper = new Swiper('.steady .swiper-container', {
      navigation: {
        nextEl: '.steady .swiper-button-next',
        prevEl: '.steady .swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
      }
    });
  });
  
  //이벤트
  $(function(){
    
    var swiper = new Swiper('.event .swiper-container', {
      navigation: {
        nextEl: '.event .swiper-button-next',
        prevEl: '.event .swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
      }
    });
  })