//  Name: Ozias Tumimana
//  Date: 09 /03 / 2024
//  Section: CSE 190E
//  This is the calulator.js page for my color contrast calculator.The purpose of this
//  page is to store javascript code that will be used once a user clicks a button
//  wthin the page.

function norm(colorValue) {
  if (colorValue <= 0.04045) {
    colorValue /= 12.92;
  } else {
    colorValue = ((colorValue + 0.055) / 1.055) ** 2.4;
  }
  return colorValue;
}

function lum(R, G, B) {
  return (0.2126 * norm(R / 255)) + (0.7152 * norm(G / 255)) + (0.0722 * norm(B / 255));
}
let ratio = 0;
function contrast(c1Red, c1Green, c1Blue, c2Red, c2Green, c2Blue) {
  if (lum(c1Red, c1Green, c1Blue) > lum(c2Red, c2Green, c2Blue)) {
    ratio = (lum(c1Red, c1Green, c1Blue) + 0.05) / (lum(c2Red, c2Green, c2Blue) + 0.05);
  } else if (lum(c1Red, c1Green, c1Blue) <= lum(c2Red, c2Green, c2Blue)) {
    ratio = (lum(c2Red, c2Green, c2Blue) + 0.05) / (lum(c1Red, c1Green, c1Blue) + 0.05);
  }
  return ratio;
}
window.onload = function() {
  let logButton = document.getElementById("log");
  let storedBackground = document.getElementById("backgroundcolor");
  let storedForeground = document.getElementById("foregroundcolor");
  let printRatio = document.getElementById("resultratio");
  let exampleBox = document.getElementById("examplebox");
  let accessiblityReport = document.getElementById("accessiblity");
  let ratioContainer = document.getElementById("box");
  let webPage = document.getElementById("webpage");
  let headerUnlineColor = document.getElementById("headingbreak");
  let resultBorder = document.getElementById("buttonpressed")
  logButton.onclick = function() {

    //  Converts Background RGB Hexidecimal codes from strings to numbers

    let rBackground = Number("0x" + storedBackground.value.substr(1, 2));
    let gBackground = Number("0x" + storedBackground.value.substr(3, 2));
    let bBackground = Number("0x" + storedBackground.value.substr(5, 2));

    //  Converts foreground RGB Hexidecimal codes from strings to numbers

    let rForeground = Number("0x" + storedForeground.value.substr(1, 2));
    let gForeground = Number("0x" + storedForeground.value.substr(3, 2));
    let bForeground = Number("0x" + storedForeground.value.substr(5, 2));

    //  Define + calculates contrast variable + prints contrast ratio
    let theratio = contrast(
      rBackground, gBackground, bBackground,
      rForeground, gForeground, bForeground
    ).toFixed(2);

    //    If statement that allows innerHTML & CSS to change if user inputs valid colors

    if (storedBackground.value === storedForeground.value) {
      exampleBox.innerHTML = "Please choose two non-identical color values c:";
    } else {

      //    Sets webpage background and text color to user choice & Prints example box

      webPage.style = "background-color: " + storedBackground.value + "; color: " +
      storedForeground.value + ";";
      headerUnlineColor.style = "border-color: " + storedForeground.value + ";";
      ratioContainer.style = "border: 5px ridge; border-color: " + storedForeground.value +
        "; margin-top: 75px;";
      accessiblityReport.innerHTML = "Contrast Ratio";
      printRatio.innerHTML = theratio + ":1";
      exampleBox.innerHTML = "This is an example of a paragraph " +
        "with your current color configuration";
    }
  }
}