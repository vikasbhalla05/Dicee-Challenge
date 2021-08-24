// numbering for dice 1
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImg1="dice"+randomNumber1+".png";
var randomImgSrc1="images/"+randomDiceImg1;
var Img1=document.querySelectorAll("img")[0];
Img1.setAttribute("src",randomImgSrc1);  

// numbering for dice 2
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImg2="dice"+randomNumber2+".png";
var randomImgSrc2="images/"+randomDiceImg2;
var Img2=document.querySelectorAll("img")[1];
Img2.setAttribute("src",randomImgSrc2);

// showing results
if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent="Draw Both Players have half 😉";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}