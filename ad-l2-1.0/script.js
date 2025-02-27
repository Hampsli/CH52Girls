const riceElements = document.getElementsByClassName("rice");

Array.from(riceElements).forEach(function(element) {
  element.addEventListener("click", function() {
    document.getElementById("burgerPhotoTitle").style.color = "red";
  });
});