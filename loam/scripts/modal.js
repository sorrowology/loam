// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get ALL images that should trigger the modal using their class
var images = document.getElementsByClassName("modal-trigger");

// Loop through all image elements and attach the click handler
for (var i = 0; i < images.length; i++) {
  var img = images[i]; // Get the current image in the loop
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src; // 'this' refers to the specific image that was clicked
    captionText.innerHTML = this.alt; // Use 'this.alt' for the caption
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}