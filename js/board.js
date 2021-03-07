$(document).ready(function(){
    var list = '.notice .list_wrap'; 
    var up = '.notice .up_btn'; 
    var down = '.notice .down_btn'; 
    
    var time = 3000; 
    var speed = 100; 
    var h = $(list).find('li').outerHeight(); 
    console.log(list);
    
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
            $(list).css('top',-40);
            
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



