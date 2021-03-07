let vedioBtn = document.getElementsByClassName('vBtn');
let vedioContent = document.getElementsByClassName('vContent');

vedioContent[0].className += " active";

for(var i=0;i<vedioBtn.length;i++){
    vedioBtn[i].addEventListener('click',function(){
        for(var j=0;j<vedioBtn.length;j++){
            vedioContent[j].className = 'vContent';
        }
        var vIndex = $(this).index();
        vedioContent[vIndex].className += " active";
    });
}