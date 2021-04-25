
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

var Voluntername,Phone,Street,City,District,State,Pincode,Email,Helpwith,Quantity;

function insert(){

    Voluntername = document.getElementById('namebox').value;
    Phone = document.getElementById('phone').value;
    Street = document.getElementById('streetbox').value;
    City = document.getElementById('citybox').value; 
    District = document.getElementById('districtbox').value;
    State = document.getElementById('statebox').value;
    Pincode = document.getElementById('pincodebox').value;
    Email = document.getElementById('emailbox').value;
    Helpwith = document.getElementById('helpwithbox').value;
    Quantity = document.getElementById('quantitybox').value;
};

let button=document.getElementById('insert')
document.addEventListener('DOMContentLoaded',function (){
    button.addEventListener('click',function (){
        insert();
        firebase.database().ref('Volunter/'+Phone).set({
            Voluntername : Voluntername,
            Phone : Phone,
            Street : Street,
            City : City,
            District : District,
            State : State,
            Pincode : Pincode,
            Email : Email,
            Helpwith : Helpwith,
            Quantity : Quantity
    
        });
    })
});


