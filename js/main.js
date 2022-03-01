'use strict';
// Varables
var sideNavStatus = 0;
var pdwCopyBtn = document.getElementById('pdwCopy');
var numberSlideRange = $("#numberSlide").val();
var checkMarkOnePlace = 'clicked';
var checkMarkTwoPlace = 'clicked';
var checkMarkThreePlace = 'unclicked';
var checkMarkFourPlace = 'unclicked';
var checkMarkFivePlace = 'unclicked';
var checkMarkSixPlace = 'unclicked';
var checkMarkSevenPlace = 'unclicked';
var checkMarkEightPlace = 'unclicked';
var checkMarkNinePlace = 'unclicked';
var checkMarkTenPlace = 'unclicked';
var checkMarkElevenPlace = 'unclicked';
var harded = 'unactive';
var base64Place = 'encode';
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "";
var special = "";
var extnd = "";
console.log(sideNavStatus)



// Constants
const sideMenu = document.getElementById("sideMenu");
const sideMenuInnerContent = document.getElementById("sideMenuInnerContent");
const bar = document.querySelector('.menuBar');
const barOne = document.querySelector('.bar-1');
const barTwo = document.querySelector('.bar-2');
const barThree = document.querySelector('.bar-3');
const barFour = document.querySelector('.bar-4');
const checkMarkOne = document.querySelector('#checkMarkOne');
const checkMarkTwo = document.querySelector('#checkMarkTwo');
const checkMarkThree = document.querySelector('#checkMarkThree');
const checkMarkFour = document.querySelector('#checkMarkFour');
const checkMarkFive = document.querySelector('#checkMarkFive');
const checkMarkSix = document.querySelector('#checkMarkSix');
const checkMarkSeven = document.querySelector('#checkMarkSeven');
const checkMarkEight = document.querySelector('#checkMarkEight');
const checkMarkEleven = document.querySelector('#checkMarkEleven');
const numberSlider = $("#numberSlide")[0];


// Functions

function sideNav() {
  var screenwidth = $(window).width();
  if (sideNavStatus == 1) {
    bar.style.transform = "";
    barOne.style.transform = "";
    barTwo.style.transform = "";
    barThree.style.transform = "";
    barFour.style.transform = "";
    sideMenu.style.left = "-33.4%";
    sideMenuInnerContent.style.opacity = "0"
    window.sideNavStatus = 0;
    console.log(sideNavStatus)
    return;
  }
  if (screenwidth < 720 && sideNavStatus == 0) {
    bar.style.transform = "translate(-5px)";
    barOne.style.transform = "rotate(45deg) translate(12.5px, 5px)";
    barTwo.style.transform = "translate(5px)";
    barThree.style.transform = "rotate(-45deg) translate(12.5px, -5px)";
    barFour.style.transform = "rotate(90deg) translate(-23px, -5px)";
    sideMenu.style.left = "0";
    sideMenuInnerContent.style.opacity = "1";
    window.sideNavStatus = 1;
    console.log(sideNavStatus)
    return;
  }
  if (screenwidth > 720 && sideNavStatus == 0) {
    bar.style.transform = "translate(-5px)";
    barOne.style.transform = "rotate(45deg) translate(12.5px, 5px)";
    barTwo.style.transform = "translate(5px)";
    barThree.style.transform = "rotate(-45deg) translate(12.5px, -5px)";
    barFour.style.transform = "rotate(90deg) translate(-23px, -5px)";
    sideMenu.style.left = "0";
    sideMenuInnerContent.style.opacity = "1";
    window.sideNavStatus = 1;
    console.log(sideNavStatus)
    return;
  }
}

/* Password Generator */

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function clearBox(elementID){
  document.getElementById(elementID).innerHTML = "";
}

function removeCheck(i) {
  i.classList.add('checkMarkEmpty');
  i.classList.remove('checkMarkFull');
}

function addCheck(i) {
  i.classList.add('checkMarkFull');
  i.classList.remove('checkMarkEmpty');
}

function adLCL() {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
}

function addSN() {
  var numbers = '0123456789';
}

function addNB() {
  var special = '!@#$%^&*()';
}

function addEA() {
  var extnd = '€‚¢ƒÆµ„ŒÇøŠ•‡†';
}

function makeid(length) {
  var characterTotal = upperCase + lowerCase + numbers + special + extnd;
  if (characterTotal == "") {
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "You must make a selection for this to work.";
  }
  else if (harded == 'active') {
    var characterTotal = characterTotal.shuffle();
    var result = '';
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "";
    var charactersLength = characterTotal.length;
    for (var i = 0; i < length; i++) {
      result += characterTotal.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
  else {
    var result = '';
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "";
    var charactersLength = characterTotal.length;
    for (var i = 0; i < length; i++) {
      result += characterTotal.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
  return result;
}

function slideRange() {
  var numberSlideRange = $("#numberSlide").val();
  document.getElementById("thumb").innerHTML = numberSlideRange;
  document.getElementById("numberSlideTextBox").value = "";
  document.getElementById("numberSlideTextBox").value = makeid(numberSlideRange);
}

/* End of Password Generator */

/*
____________________________________________________________________________________
Event Listeners
____________________________________________________________________________________
*/

checkMarkOne.addEventListener('click', function() {
  if (checkMarkOnePlace == 'unclicked') {
    addCheck(checkMarkOne);
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    checkMarkOnePlace = 'clicked';
  } else {
    removeCheck(checkMarkOne);
    upperCase = "";
    checkMarkOnePlace = 'unclicked';
  }
});

checkMarkTwo.addEventListener('click', function() {
  if (checkMarkTwoPlace == 'unclicked') {
    addCheck(checkMarkTwo);
    lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    checkMarkTwoPlace = 'clicked';
  } else {
    removeCheck(checkMarkTwo);
    lowerCase = "";
    checkMarkTwoPlace = 'unclicked';
  }
});

checkMarkThree.addEventListener('click', function() {
  if (checkMarkThreePlace == 'unclicked') {
    addCheck(checkMarkThree);
    numbers = '0123456789';
    checkMarkThreePlace = 'clicked';
  } else {
    removeCheck(checkMarkThree);
    numbers = "";
    checkMarkThreePlace = 'unclicked';
  }
});

checkMarkFour.addEventListener('click', function() {
  if (checkMarkFourPlace == 'unclicked') {
    addCheck(checkMarkFour);
    special = '!@#$%^&*()';
    checkMarkFourPlace = 'clicked';
  } else {
    removeCheck(checkMarkFour);
    special = "";
    checkMarkFourPlace = 'unclicked';
  }
});

checkMarkSeven.addEventListener('click', function() {
  if (checkMarkSevenPlace == 'unclicked') {
    addCheck(checkMarkSeven);
    extnd = '€‚¢ƒÆµ„ŒÇøŠ•‡†'
    checkMarkSevenPlace = 'clicked';
  } else {
    removeCheck(checkMarkSeven);
    extnd = "";
    checkMarkSevenPlace = 'unclicked';
  }
});

checkMarkEight.addEventListener('click', function() {
  if (checkMarkEightPlace == 'unclicked') {
    addCheck(checkMarkEight);
    numberSlider.max = 256;
    checkMarkEightPlace = 'clicked';
  } else {
    removeCheck(checkMarkEight);
    numberSlider.max = 64;
    checkMarkEightPlace = 'unclicked';
  }
});

checkMarkNine.addEventListener('click', function() {
  if (checkMarkNinePlace == 'unclicked') {
    addCheck(checkMarkNine);
		harded = 'active';
    checkMarkNinePlace = 'clicked';
  } else {
    removeCheck(checkMarkNine);
		harded = 'unactive';
    checkMarkNinePlace = 'unclicked';
  }
});



// 5 is encode, 6 is decode

checkMarkFive.addEventListener('click', function() {
  removeCheck(checkMarkSix);
  addCheck(checkMarkFive);
  base64Title.innerHTML = 'Base 64 Encoder';
  base64Place = 'encode';
});

checkMarkSix.addEventListener('click', function() {
  addCheck(checkMarkSix);
  removeCheck(checkMarkFive);
  base64Title.innerHTML = 'Base 64 Decoder';
  base64Place = 'decode';
});

// Password Copy Button

pdwCopyBtn.addEventListener('click', function() {
  var nubContent = document.getElementById("numberSlideTextBox");
  nubContent.select();
  nubContent.setSelectionRange(0, 256)
  document.execCommand("copy", );
  alert('Text has been coppied!');
});
