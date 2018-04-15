
var config = {
    apiKey: "AIzaSyCQVxKjVxfe7tck-V5cB_TdhpbWYKsBO-0",
    authDomain: "travel-log-b5b5d.firebaseapp.com",
    databaseURL: "https://travel-log-b5b5d.firebaseio.com",
    projectId: "travel-log-b5b5d",
    storageBucket: "travel-log-b5b5d.appspot.com",
    messagingSenderId: "1021747749689"
  };
firebase.initializeApp(config);
var database = firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();
// var user;




$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var token = firebase.auth().currentUser.uid;
            querydatabase();
        } else {
            window.location = "index.html"
        }
    });
});

function querydatabase() {
    firebase.database().ref('/Posts/').once('value').then(function(snapshot) {
        var postObject = snapshot.val();
        console.log(postObject);
        var keys = Object.keys(postObject);
        var currentRow;
        // var Username = $("#name-input").val();
        var newArray=[];
        for (i=0; i<keys.length; i++) {
            var token = firebase.auth().currentUser.uid;
            var currentObject = postObject[keys[i]];
            if (token==currentObject.Username) {
                newArray.push(currentObject)}};
                console.log(newArray);
            // console.log(currentObject.Username);
        for (j=0; j<newArray.length; j++) {
            if (j % 3 == 0) {
                currentRow = document.createElement("div");
                $(currentRow).addClass("row");
                $("#contentHolder").append(currentRow);
            }
            var col = document.createElement("div");
            $(col).addClass("col-lg-4");
            var image = document.createElement("img");
            image.src = newArray[j].url;
            $(image).addClass("contentImage");
            var p = document.createElement("p");
            $(p).html(newArray[j].caption);
            $(p).addClass("contentCaption");
            var p2 = document.createElement("p");
            $(p2).html(newArray[j].location);
            $(p2).addClass("contentLocation");
            $(col).append(image);
            $(col).append(p);
            $(col).append(p2);
            $(currentRow).append(col);}
            
        });
    };
    
 
   