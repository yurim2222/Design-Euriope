var mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(37.50968342706997, 127.05939416706067), 
        level: 4
    };

var map = new kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴