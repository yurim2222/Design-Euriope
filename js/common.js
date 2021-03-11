//스크롤이벤트
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

//헤더스크롤
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        var tnav = '.tnav';
        var mainNav = '.main_nav';
        if(top>0){
            $(tnav).addClass('active');
            $(mainNav).addClass('active');

        }else{
            $(tnav).removeClass('active');
            $(mainNav).removeClass('active');
        }
    })
});

//gnb
$(document).ready(function(){
    var tourBtn = '.guidetour';
    var tourMenu = '.tour_theme';
    var btn = '.closeBtn';
    var pannel = '.pannel'
    var aside = '.btn';

    function pcGnb(){
        $(tourBtn).click(function(){
            $(tourMenu).addClass('active');
        });
        $(btn).click(function(){
            $(tourMenu).removeClass('active');
        });
    }

    function mobileGnb(){
        $(pannel).click(function(){
            $('.pannelbg').addClass('active');
            $(aside).addClass('active');
        })
        $(btn).click(function(){
            $('.pannelbg').removeClass('active');
            $(aside).removeClass('active');
        })
    }

    $(window).resize(function(){
        $(tourMenu).removeClass('active');
        $('.pannelbg').removeClass('active');
        var w = window.innerWidth;
        if( w >= 1025 ){
            pcGnb();
        }else{
            mobileGnb();
        }
    });
    $(window).trigger('resize');
});