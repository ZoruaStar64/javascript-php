var random = 0;
var slideholder = document.getElementById("sliderholder");
slideholder.style.backgroundImage = "url('../img/Link9.jpg')";
slideholder.style.backgroundSize = "300px 300px";

slideholder.addEventListener("click", function() {
    slideholder.style.backgroundImage = "url('../img/Link" + getLink() + ".jpg')";

});

function getLink() {
    random = Math.floor(Math.random() * 9) + 1;


    console.log(random);
    return random;
}

//document.getElementById("randomShower").innerHTML = "" + random;

