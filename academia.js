
//when hovering over image 1 in gallery, change image to description
function hover1() {
    document.getElementById("img1").src = "images/museum1Hover.JPG"
  }
  
  //when mouse leaves image, restore original image
  function hover1Stop() {
    document.getElementById("img1").src = "images/museum (1).JPG"
  
  }
  
  //above structure is repeated for each image
  function hover2() {
    document.getElementById("img2").src = "images/museum2Hover.jpg"
  }
  
  function hover2Stop() {
    document.getElementById("img2").src = "images/museum (2).JPG"
  
  }
  
  function hover3() {
    document.getElementById("img3").src = "images/museum3Hover.jpg"
  }
  
  function hover3Stop() {
    document.getElementById("img3").src = "images/museum (3).JPG"
  
  }