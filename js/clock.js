const deg = 6;


function kTime(params) {
    const khr = document.querySelector("#khr");
    const kmn = document.querySelector("#kmn");
    const ksc = document.querySelector("#ksc");
    
    let kday = new Date();
    let month = kday.getMonth() +1;
    let date = kday.getDate();
    let day = kday.getDay();
    let week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];

    let hh = kday.getHours();
    let hh02 = kday.getHours() * 30;
    let mm = kday.getMinutes() ;
    let ss = kday.getSeconds();
    

    khr.style.transform = `rotateZ(${hh02 + mm / 12 * deg}deg)`;
    kmn.style.transform = `rotateZ(${mm * deg}deg)`;
    ksc.style.transform = `rotateZ(${ss * deg}deg)`; 

    
    const kAnalog = document.getElementById('kAnalog');
    if(hh > 6 && hh < 18 ){
        kAnalog.style.background = ' url(../images/pc/main/main_clock_day.png)';
        kAnalog.style.backgroundSize = 'cover';
    }else {
        kAnalog.style.background = ' url(../images/pc/main/main_clock_night.png)';
        kAnalog.style.backgroundSize = 'cover';
    }

    let dateObject = document.getElementById('kDate');
    let timeObject = document.getElementById('kTime');

    

    if(hh < 10){
        hh = '0' + hh;
    }
    if(mm < 10){
        mm = '0' + mm;
    }

    

    dateObject.textContent = `${month}월 ${date}일 ${week[day]}`;
    timeObject.textContent = `${hh} : ${mm}`

}

kTime();
setInterval(kTime);

setInterval(() => {
    const uhr = document.querySelector("#uhr");
    const umn = document.querySelector("#umn");
    const usc = document.querySelector("#usc");
    let uday = new Date();
    let year = uday.getFullYear();
    let month = uday.getMonth() +1;
    let date = uday.getDate();
    let day = uday.getDay();
    let week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];

    let hh = (uday.getHours() - 9);
    let hh02 = hh * 30;
    let mm = uday.getMinutes();
    let ss = uday.getSeconds();

    

    uhr.style.transform = `rotateZ(${hh02 + mm / 12 * deg}deg)`;
    umn.style.transform = `rotateZ(${mm * deg}deg)`;
    usc.style.transform = `rotateZ(${ss * deg}deg)`; 

    let dateObject = document.getElementById('uDate');
    let timeObject = document.getElementById('uTime');


    if(hh < 0){
        if(date == 1){
            if(month == 1 || month == 5 || month == 7 || month == 9 || month == 11 ){
                date = 31;
                month = month -1;
            }else if(month == 3){
                if(year % 4 == 0){
                    date = 29;
                    month = month -1;
                }else{
                    date = 28;
                    month = month -1;
                }
            }else{
                date = 30;
            }
        }else{
            date = date - 1;
        }
        hh = 24 + hh;
        if(day == 0){
            day = 6;
        }else{
            day = day -1;
        }
    }

    
    const uAnalog = document.querySelector('#uAnalog');

    if(hh >= 6 || hh < 18 ){
        
        uAnalog.style.background = ' url(../images/pc/main/main_clock_day.png)';
        uAnalog.style.backgroundSize = 'cover';
    }else{
        uAnalog.style.background = ' url(../images/pc/main/main_clock_night.png)';
        uAnalog.style.backgroundSize = 'cover';
    }

    if(hh < 10){
        hh = '0' + hh;
    }
    if(mm < 10){
        mm = '0' + mm;
    }


    dateObject.textContent = `${month}월 ${date}일 ${week[day]}`;
    timeObject.textContent = `${hh} : ${mm}`

});

setInterval(() => {

    const ohr = document.querySelector("#ohr");
    const omn = document.querySelector("#omn");
    const osc = document.querySelector("#osc");

    let oday = new Date();
    let year = oday.getFullYear();
    let month = oday.getMonth() +1;
    let date = oday.getDate();
    let day = oday.getDay();
    let week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];

    let hh = (oday.getHours() - 8);
    let hh02 = hh * 30;
    let mm = oday.getMinutes();
    let ss = oday.getSeconds();

    

    ohr.style.transform = `rotateZ(${hh02 + mm / 12 * deg}deg)`;
    omn.style.transform = `rotateZ(${mm * deg}deg)`;
    osc.style.transform = `rotateZ(${ss * deg}deg)`; 

    let dateObject = document.getElementById('oDate');
    let timeObject = document.getElementById('oTime');


    if(hh < 0){
        if(date == 1){
            if(month == 1 || month == 5 || month == 7 || month == 9 || month == 11 ){
                date = 30;
                month = month -1;
            }else if(month == 3){
                if(year % 4 == 0){
                    date = 29;
                    month = month -1;
                }else{
                    date = 28;
                    month = month -1;
                }
            }else{
                date = 30;
            }
        }else{
            date = date - 1;
        }
        hh = 24 + hh;
        if(day == 0){
            day = 6;
        }else{
            day = day -1;
        }
    }
        
        
        const oAnalog = document.querySelector('#oAnalog');

        if(hh >= 6 || hh < 18 ){
        
            oAnalog.style.background = ' url(../images/pc/main/main_clock_day.png)';
            oAnalog.style.backgroundSize = 'cover';
        }else{
            oAnalog.style.background = ' url(../images/pc/main/main_clock_night.png)';
            oAnalog.style.backgroundSize = 'cover';
        }

    if(hh < 10){
        hh = '0' + hh;
    }
    if(mm < 10){
        mm = '0' + mm;
    }


    dateObject.textContent = `${month}월 ${date}일 ${week[day]}`;
    timeObject.textContent = `${hh} : ${mm}`
});