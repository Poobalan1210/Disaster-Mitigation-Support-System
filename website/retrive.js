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

// firebase.initializeApp(firebaseConfig);

// var Voluntername,Phone,Street,City,District,State,Pincode,Email,Helpwith,Quantity;

function selectalldata(){
    firebase.database().ref('Volunter').once('value',
    function(Allrecords){
        Allrecords.forEach(
            function(CurrentRecord){
                var Voluntername= CurrentRecord.val().Voluntername;
                var Phone = CurrentRecord.val().Phone;
                var Street = CurrentRecord.val().Street;
                var City = CurrentRecord.val().City;
                var District = CurrentRecord.val().District;
                var State = CurrentRecord.val().State;
                var Pincode = CurrentRecord.val().Pincode;
                var Email = CurrentRecord.val().Email;
                var Helpwith = CurrentRecord.val().Helpwith;
                var Quantity = CurrentRecord.val().Quantity;
                Additemstotable(Voluntername,Phone,Street,City,District,State,Pincode,Email,Helpwith,Quantity);
            }
        )
    }
    );
}

window.onload = selectalldata;

var stdno=0;
function Additemstotable(Voluntername,Phone,Street,City,District,State,Pincode,Email,Helpwith,Quantity){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    td1.innerHTML=++stdno;
    td2.innerHTML = Voluntername;
    td3.innerHTML = Phone;
    td4.innerHTML = Street;
    td5.innerHTML = City;
    td6.innerHTML = District;
    td7.innerHTML = State;
    td8.innerHTML = Pincode;
    td9.innerHTML = Email;
    td10.innerHTML = Helpwith;
    td11.innerHTML = Quantity;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    trow.appendChild(td11);
    tbody.appendChild(trow);
}