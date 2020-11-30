gallery = document.getElementById("gallery");

creategalleryHolders();
createImages();

function creategalleryHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div")
        pictureHolder.className = "picture";
        pictureHolder.id = "picture-holder-" + i;
        gallery.appendChild(pictureHolder);
    }
}

function createImages() {
    pictureHolder = document.getElementsByClassName("picture");
    for (var i = 0; i < pictureHolder.length; i++) {
      charImage = document.createElement("img");
      charImage.src = "../img/Like" + (i+1) + ".png"

    }
}