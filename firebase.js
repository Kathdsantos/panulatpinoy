var firebaseConfig = {
    apiKey: "AIzaSyDGBb2zHNGJ9yORUatjNp6jCG_bBXVWnMQ",
    authDomain: "panulat-pinoy.firebaseapp.com",
    databaseURL: "https://panulat-pinoy.firebaseio.com",
    projectId: "panulat-pinoy",
    storageBucket: "panulat-pinoy.appspot.com",
    messagingSenderId: "714524400678",
    appId: "1:714524400678:web:6c8228394e9a4e426e1ae7",
    measurementId: "G-7YY7FWG462"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var username, useremail, details;

function Ready(){
	username=document.getElementById('username').value;
	useremail=document.getElementById('useremail').value;
	details=document.getElementById('details').value;
}

document.getElementById('submit').onclick = function(){
	Ready();
	firebase.database().ref('users/' + username).set({
		username:username,
		useremail:useremail,
  		details:details
	});
	document.querySelector('.submitalert').style.display = 'block';
    setTimeout(function(){
      document.querySelector('.submitalert').style.display = 'none';
    },2000);
    document.getElementById('details').value =' ';
}

window.onload = function(){
    Ready();
    firebase.database().ref('users/' + username).once('value'),then(function(snapshot){
      document.getElementById('details').value = snapshot.val().details;
  });
}

document.getElementById('delete').onclick = function(){
	Ready();
	firebase.database().ref('users/' + username).remove();
	document.querySelector('.deletealert').style.display = 'block';
    setTimeout(function(){
    document.querySelector('.deletealert').style.display = 'none';
    },2000);
    document.getElementById('details').value=' ';
}