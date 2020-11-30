

gallery = document.getElementById("gallery");

createGalleryHolders();
createImages();

function createGalleryHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        gallery.appendChild(pictureHolder);

    }
}

function createImages() {
    pictureHolder = document.getElementsByClassName("picture-holder");

    for (var i = 0; i < pictureHolder.length; i++) {
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite_" + (i+1);
      charImage = document.createElement("img");
      charImage.src = "../img/Like" + (i+1) + ".png";

      charImage.id = (i+1);
      charImage.addEventListener("click", function () {
          likeIt(this.id);
        });
      pictureHolder[i].appendChild(favorite);
      pictureHolder[i].appendChild(charImage);

    }
}

function likeIt(id) {
 favorite = document.getElementById("favorite_" + id);
 notfavorite = document.getElementsByClassName("favorite");

for (var i = 0; i < notfavorite.length; i++) {
    notfavorite[i].style.backgroundImage = "none";
}
favorite.style.backgroundImage = "url(../img/heart.jpg)";
favorite.style.backgroundSize = "300px 150px";
}