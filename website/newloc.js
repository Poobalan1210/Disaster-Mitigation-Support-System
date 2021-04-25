var firebaseConfig = {
    apiKey: "AIzaSyAysywWbD4O4UPpCQrci50kaLHVQbrJm7Y",
    authDomain: "dmss-308701.firebaseapp.com",
    databaseURL: "https://dmss-308701-default-rtdb.firebaseio.com",
    projectId: "dmss-308701",
    storageBucket: "dmss-308701.appspot.com",
    messagingSenderId: "245597012331",
    appId: "1:245597012331:web:0da20d1dc511e17a074c2e",
    measurementId: "G-HJ72TBGN7T"
  };

  firebase.initializeApp(firebaseConfig);  

  function initMap() {
    
  
  var center = {lat: 10.9094334, lng: 78.3665347};
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: center
    });
  var infowindow =  new google.maps.InfoWindow({});
  var marker, count;

  firebase.database().ref("Locations").on('value',function(data){
    var location = data.val();
    var keys = Object.keys(location);
    
    for (var i = 0 ;i < keys.length;i++){
      var k=keys[i];
      var loc = location[k].location;
      var lat = location[k].latitude;
      var long = location[k].longitude;
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,long),
        map: map,
      });
      google.maps.event.addListener(marker, 'click', (function (marker,loc) {
        return function () {
          infowindow.setContent(loc);
          infowindow.open(map, marker);
        }
      })(marker,loc));
      
    }
  });
}
