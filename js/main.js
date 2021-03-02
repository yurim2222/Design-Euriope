
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
      slidesPerView: 1.5,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 2,
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
      slidesPerView: 1.5,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView:2,
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


  $(document).ready(function(){
    var list = '.notice .list_wrap'; 
    var up = '.notice .up_btn'; 
    var down = '.notice .down_btn'; 
    
    var time = 3000; 
    var speed = 100; 
    var h = $(list).find('li').outerHeight(); 
    
    $(list).find('li').last().prependTo(list);
    
    $(list).find('li:eq(1) a').attr('tabindex','0');
    
    var topMove = function(){
        $(list).stop().animate({
            top: '-=' + h
        },speed,function(){
            $(list).find('li').first().appendTo(list);
            
            $(list).css('top',-70);
            
            $(list).find('li a').attr('tabindex','-1'); 
            $(list).find('li:eq(1) a').attr('tabindex','0'); 
        });
    }
    
    var downMove = function(){
        $(list).stop().animate({
            top: '+=' + h 
        },speed,function(){
            $(list).find('li').last().prependTo(list);
            $(list).css('top',-70);
            
            $(list).find('li a').attr('tabindex','-1');
            $(list).find('li:eq(1) a').attr('tabindex','0');
        });
    }
    
    
    var listMove = setInterval(topMove,time);
    
    $(list).find('li a').on('mouseenter focus',function(){
        clearInterval(listMove);
    });
    
    $(list).find('li a').on('mouseleave blur',function(){
        listMove = setInterval(topMove,time);
    });
    
    $(up).find('a').click(function(e){
        e.preventDefault();
        
        clearInterval(listMove);
        topMove(); 
    });
    
    $(down).find('a').click(function(e){
        e.preventDefault(); 
        clearInterval(listMove);
        
        downMove(); 
    });
    
    
});


$(document).ready(function(){
  var list = '.review .list_wrap'; 
  var up = '.review .up_btn'; 
  var down = '.review .down_btn'; 
  
  var time = 3000; 
  var speed = 100; 
  var h = $(list).find('li').outerHeight(); 
  
  $(list).find('li').last().prependTo(list);
  
  $(list).find('li:eq(1) a').attr('tabindex','0');
  
  var topMove = function(){
      $(list).stop().animate({
          top: '-=' + h
      },speed,function(){
          $(list).find('li').first().appendTo(list);
          
          $(list).css('top',-70);
          
          $(list).find('li a').attr('tabindex','-1'); 
          $(list).find('li:eq(1) a').attr('tabindex','0'); 
      });
  }
  
  var downMove = function(){
      $(list).stop().animate({
          top: '+=' + h 
      },speed,function(){
          $(list).find('li').last().prependTo(list);
          $(list).css('top',-70);
          
          $(list).find('li a').attr('tabindex','-1');
          $(list).find('li:eq(1) a').attr('tabindex','0');
      });
  }
  
  
  var listMove = setInterval(topMove,time);
  
  $(list).find('li a').on('mouseenter focus',function(){
      clearInterval(listMove);
  });
  
  $(list).find('li a').on('mouseleave blur',function(){
      listMove = setInterval(topMove,time);
  });
  
  $(up).find('a').click(function(e){
      e.preventDefault();
      
      clearInterval(listMove);
      topMove(); 
  });
  
  $(down).find('a').click(function(e){
      e.preventDefault(); 
      clearInterval(listMove);
      
      downMove(); 
  });
  
  
});
