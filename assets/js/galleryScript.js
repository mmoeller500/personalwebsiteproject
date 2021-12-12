function gallery(imgs) { //Gallery script found online, but heavily edited to suit my needs (and i can explain how it works)
  var expandImg = document.getElementById("expandedImg"); //find the expanded image element (will be invisible before we click anything)
  expandImg.src = imgs.src; //make the image source the same as the thumbnail we clicked on
  expandImg.parentElement.style.display = "block"; //finally, make it visible
} 