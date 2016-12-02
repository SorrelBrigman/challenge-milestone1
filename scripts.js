
var theRange = document.querySelector(".range");
var theNumb = document.querySelector(".numb");

// if (theNumb.value === "") {
   // theNumb.value = 5;
// }

//synch up range and number
  //range moves to number
theNumb.addEventListener("keyup", function (e) {
      theRange.value = theNumb.value;
})

theRange.addEventListener("click", function (e) {
  theNumb.value = theRange.value;
})
