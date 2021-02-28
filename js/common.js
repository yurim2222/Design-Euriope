$(document).ready(function(){
    $(window).on('scroll',function(e){
        var wins = $(this).scrollTop();
        var height01 = $('.contents').outerHeight(); //전체컨텐츠높이
        var height02 = $(window).outerHeight(); //윈도우높이
        var height03 = height01 - height02;
        var ani = (wins / height03) * 100;
            if(wins > 0){
                $('.walking_img').css({
                    left : ani + '%',
                    transition : '0.1s'
                });
            }else if(wins == 0){
                $('.walking_img').css({
                    left : -70,
                    transition : '0.3s'
                });
            }
    })
    $(window).on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        if(wheel > 0){
            $('.walking_img').addClass('flip');
        }else{
            $('.walking_img').removeClass('flip');
        }
    });
});

// $(window).scroll(function () {
    var wins = $(this).scrollTop();
    var height01 = $('.contents').outerHeight(); //전체컨텐츠높이
    var height02 = $(window).outerHeight(); //윈도우높이
    var height03 = height01 - height02;
    var ani = (wins / height03 ) * 100;

//     $('.walking_img').css('left', ani + '%');

    

    
// })