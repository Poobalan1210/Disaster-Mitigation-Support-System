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



function initMap() {

    firebase.initializeApp(firebaseConfig);

    var center = {lat: 34.052235, lng: -118.243683};
    // var locations = [
    //   ['Philz Coffee<br>\
    //   801 S Hope St A, Los Angeles, CA 90017<br>\
    //  <a href="https://goo.gl/maps/L8ETMBt7cRA2">Get Directions</a>',   34.046438, -118.259653],
    //   ['Philz Coffee<br>\
    //   525 Santa Monica Blvd, Santa Monica, CA 90401<br>\
    //  <a href="https://goo.gl/maps/PY1abQhuW9C2">Get Directions</a>', 34.017951, -118.493567],
    //   ['Philz Coffee<br>\
    //   146 South Lake Avenue #106, At Shoppers Lane, Pasadena, CA 91101<br>\
    //   <a href="https://goo.gl/maps/eUmyNuMyYNN2">Get Directions</a>', 34.143073, -118.132040],
    //   ['Philz Coffee<br>\
    //   21016 Pacific Coast Hwy, Huntington Beach, CA 92648<br>\
    //   <a href="https://goo.gl/maps/Cp2TZoeGCXw">Get Directions</a>', 33.655199, -117.998640],
    //   ['Philz Coffee<br>\
    //   252 S Brand Blvd, Glendale, CA 91204<br>\
    //  <a href="https://goo.gl/maps/WDr2ef3ccVz">Get Directions</a>', 34.142823, -118.254569]
    // ];

    var locations= [],temp=[];
    firebase.database().ref("Locations").on('value',function(snapshot){
        let snap = snapshot.val();
        // console.log(snap);
        for (i in snap){
            for (n in snap[i]){
                console.log(snap[i][n]);
                temp.push(snap[i][n]);
            }
            locations.push(temp);
            temp=[];
        }
        // console.log(locations);
    });
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: center
    });
  var infowindow =  new google.maps.InfoWindow({});
  var marker, count;
  for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][0], locations[count][2]),
        map: map,
        title: locations[count][0]
      });
  google.maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
          infowindow.setContent(locations[count][1]);
          infowindow.open(map, marker);
        }
      })(marker, count));
    }
  }