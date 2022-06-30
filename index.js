var randomNumber1 = (Math.floor(Math.random()*6))+1;     //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png";         //1-6 linked with dice image
var randomImageSource = randomDiceImage;                //ab mai html mai gaya src ko change karne , jab tak source change nahi hoga tab tak image nahi ayegi
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource)


var randomNumber2 = (Math.floor(Math.random()*6))+1;     //1-6
var randomDiceImage2 = "dice" + randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2)


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 won";
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="🚩 Player 2 won";
}
else {
  document.querySelector("h1").innerHTML="NO body wins"
}
