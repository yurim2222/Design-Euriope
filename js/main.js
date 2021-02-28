
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
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
          },
        loop: true,
      });
  } );