//all the letters
let letters = "abcdefghijklmnopqrstuvwxyz";

//get th array from letters
let lettersArray = Array.from(letters);

// select letters containers
let letterscontainer = document.querySelector(".letters");

lettersArray.forEach((letter) => {
  letterscontainer.innerHTML += `<span class="letters-box">${letter}</span>`;
});

//object of wards + categories
const words = {
  programing: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
    "Harry Potter 1",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
//1.Get all the object keys using the Object.keys() method.
//2.Generate a random number between 0 and the length of the array of keys.
//3.Use the random number to get a random key from the array of keys.
//4.Use the random key to get the corresponding array value from the object.
//5.Generate a random number between 0 and the length of the array value.
//6.Use the random number to get a random element from the array value.

// return array from the object that conraines key of the value
//that you can use to acsses to object like noraml way
let allkeys = Object.keys(words);

//random number from 0 to the length of the keys
let randomnumber = Math.floor(allkeys.length * Math.random());
//get random key(proparty) from the object using the gereted number
let getrandomprop = allkeys[randomnumber];
//get the key from the object it self not from the array using the getrandomprop number
let getrandompropname = words[getrandomprop];
//get random number from 0 to choosen word length
let randompropvalue = Math.floor(getrandompropname.length * Math.random());
//get the random value of the key tha choosen
let randompropvaluevalue = getrandompropname[randompropvalue];

document.querySelector(".container .category span").innerHTML =
  getrandomprop + ": answar is " + randompropvaluevalue + " by the way";
//get the letter guess box
let letterguesscontainer = document.querySelector(".letters-guess");
//take the chosen word and turn it into array
let letterandspace = Array.from(randompropvaluevalue);

//loop on the chosoen word and make it make span for every letter
letterandspace.forEach((letter) => {
  //creat empty span
  let emptyspan = document.createElement("span");
  //if the the value from randompropvaluevalue have white-space it will add this class
  if (letter === " ") {
    //add class to the span
    emptyspan.classList.add("with-space");
  }
  //add the span to the guess container
  letterguesscontainer.appendChild(emptyspan);
});














//selset all th spanes
let guessspan = document.querySelectorAll(".letters-guess span");


//the wrong attemp count
let wrongattemp = 0
//get the the hang man draw
let thedraw = document.querySelector(".hangman-draw")

//add event clcik on all elemnt on the windo it will active every time you click on somthing
document.addEventListener("click", function (e) {
  //reeassign to false
  let thestatus = false

  //if the target have letters-box class then its from the letters
  if (e.target.classList.contains("letters-box")) {
    //if the if sucsses this box-letters add class clicked
    e.target.classList.add("clicked");

    //turn the chosen word into array
    let thechosenword = Array.from(randompropvaluevalue.toLowerCase());

    //the target that have been clicked
    let theclicked = e.target.innerHTML.toLowerCase();

    thechosenword.forEach((wordletter, wordindex) => {
      if (theclicked == wordletter) {
        thestatus = true

        guessspan.forEach((span, spanindex) => {
          if (wordindex == spanindex) {
            span.innerHTML = wordletter
          }
        });
      } 
    });
//out
  if (thestatus !== true) {
    wrongattemp++

    thedraw.classList.add(`wrong-${wrongattemp}`)

    if (wrongattemp === 8) {
      letterscontainer.classList.add("finshed")
      endGame()
    }
  }
  }
});


function endGame () {
  let div = `<div class = "poupup">game over, the word is ${randompropvaluevalue}</div> `

  document.body.innerHTML += div
}