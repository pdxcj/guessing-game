var count=0
var userName = prompt('What\'s your name?',"");
alert("Welcome " + userName + "!" + "\n" + "I'm glad you're here.");


function yesOrNo() {
   var answer=prompt("Hey " + userName + ", are you ready to play a guessing game about CJ?","Yes/No");
   if (answer== "Yes"){
        alert("Great!");
        count++;
   } else {
   alert("Too bad - it\'s time for some more pop-up windows alerts, buster.");
   };
 }
  console.log("if/else for yes no question");
yesOrNo();


function whiskeyOrBeer() {
  var favoriteDrink=prompt("Next:" + "\n" + "Is whiskey or beer their drink of choice?","");
  if (favoriteDrink=="Whiskey") {
    alert("It sure is.");
    count++;
  } else if (favoriteDrink=="Beer") {
    alert("Nope.");
  };
  console.log("else if for favoriteDrink");
}
whiskeyOrBeer();

function westCoastBestCoast() {
  var whichCoast=prompt("Okay! Next:" + "\n" + "Does CJ prefer the East Coast or the West Coast?","");
  if (whichCoast=="West coast") {
    alert("Yes!");
    count++;
    }
  if (whichCoast=="East coast") {
    alert("Nope . . . the West Coast is home.");
  };
  console.log("if else for west coast");
}
westCoastBestCoast();

function howManyCats() {
  var catCount=prompt("How many cats does CJ have?","");
  if (catCount==2 || "two") {
    alert("Exactly!");
    count++;
  } else if (catCount<2 || "one"){
    alert("More then that . . .")
  } else {("Too much fluff.")}
  console.log("if else with numbers for how many cats")
  };
howManyCats();

alert("You got " + count + " out of 4 right.");




/*
A couple things are still misfiring here. whiskeyOrBeer answer "beer" doesn't trigger alert - just goes to next question. And in howMany Cats I thought that by using a general "else" for numbers >2 that would fire regardless of strong or integer input, but it's that only sometimes seems to be happening.
I'm going to check this in and move ahead.
Also, some css color showing in the browser - that's jumping ahead a bit to Tues, even though this submission is catching up on Saturday's homework,
*/
