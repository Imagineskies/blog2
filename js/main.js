'use strict';
// Varables


// Constants




// Functions

function OpenPoemsNav() {
  var screenwidth = $(window).width();
  if (screenwidth < 720) {
    document.getElementById("mainPoemsMenuM").style.width = "100%";
    document.getElementById("mainPoemsContentM").style.opacity = 1;
  } else {
    document.getElementById("mainPoemsMenuM").style.width = "40%";
    document.getElementById("mainPoemsContentM").style.opacity = 1;
  }

}

function exitPoemsMenu() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
}

// Event Listeners
