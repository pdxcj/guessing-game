var count=0

var userName;

function foodGreeting() {
  var time=new Date();
  var timeToday = time.getHours();
  switch (true) {
    case (timeToday < 10): {
      alert("Welcome " + userName + " - " + "I hope you had a good breakfast today");
      break;
    }
    case (timeToday < 12): {
      alert("Welcome " + userName + " - " + "I hope you ate brunch today");
      break;
    }
    case (timeToday < 17): {
      alert("Welcome " + userName + " - " + "I hope you had a yummy lunch");
      break;
    }
    case (timeToday >= 17): {
      alert("Welcome " + userName + " - " + "I hope your dinner tonight was delicious");
      break;
    }
    default: {
      alert("Welcome " + userName + " - " + "have a cup of tea!");
      break
    }
  }
};

console.log("Switch statement for food greeting");

function whiskeyOrBeer() {
  var favoriteDrink=prompt("Is whiskey or beer CJ\'s drink of choice?","");
  if (favoriteDrink.toLowerCase()==="whiskey") {

    var userSays = document.getElementById("userResponse1")
    userSays.innerHTML="Your response: " + favoriteDrink
    var gameSays = document.getElementById("answer1")
    gameSays.innerHTML="Answer: It sure is whiskey!"
    console.log("case matching");
    count++;

  } else if(favoriteDrink.toLowerCase()==="beer") {

    var userSays = document.getElementById("userResponse1")
    userSays.innerHTML="Your response: " + favoriteDrink
    var gameSays = document.getElementById("answer1")
    gameSays.innerHTML="Answer: Nope, it's whiskey."

  } else {

    var userSays = document.getElementById("userResponse1")
    userSays.innerHTML="Your response: " + favoriteDrink
    var gameSays = document.getElementById("answer1")
    gameSays.innerHTML="Answer: Hey, the options were whiskey or beer..."
  }
  console.log("else if for favoriteDrink");
};

function westCoastBestCoast() {
  var whichCoast=prompt("Okay! Next:" + "\n" + "Do they prefer the East Coast or the West Coast?","");
  if (whichCoast.toLowerCase()==="west coast") {

    var userSays = document.getElementById("userResponse2")
    userSays.innerHTML="Your response: " + whichCoast
    var gameSays = document.getElementById("answer2")
    gameSays.innerHTML="Answer: Yes! West coast is the best coast."
    console.log("case matching");
    count++;

  } else if (whichCoast.toLowerCase()==="east coast") {
    var userSays = document.getElementById("userResponse2")
    userSays.innerHTML="Your response: " + whichCoast
    var gameSays = document.getElementById("answer2")
    gameSays.innerHTML="Answer: Nope, the West Coast is home."

  } else {
    var userSays = document.getElementById("userResponse2")
    userSays.innerHTML="Your response: " + whichCoast
    var gameSays = document.getElementById("answer2")
    gameSays.innerHTML="Answer: Hey, the options were West Coast or East Coast . . ."
  }
  console.log("if else if for west coast");
};

function howManyCats() {
  var catCount=prompt("How many cats does CJ have?","");

  if (parseInt(catCount)===2 || catCount.toLowerCase()==="two") {

    var userSays = document.getElementById("userResponse3")
    userSays.innerHTML="Your response: " + catCount
    var gameSays = document.getElementById("answer3")
    gameSays.innerHTML="Answer: Yes - exactly two cats!"
    count++;

  } else if (parseInt(catCount)<2 || catCount.toLowerCase()==="one"){

    var userSays = document.getElementById("userResponse3")
    userSays.innerHTML="Your response: " + catCount
    var gameSays = document.getElementById("answer3")
    gameSays.innerHTML="Answer: Nope, more cats than that."

  } else {
    var userSays = document.getElementById("userResponse3")
    userSays.innerHTML="Your response: " + catCount
    var gameSays = document.getElementById("answer3")
    gameSays.innerHTML="Answer: Nonono that's way too much fluff!"
  };
  console.log("if else with numbers for how many cats");
};
/*
function favoriteColor() {
var answer=prompt("Is CJ\'s favorite color green, blue, or purple? ,"");
if (favoriteColor.toLowerCase()==="blue") {

var colorOptions = ()"blue", "green", "purple")
for (var i = 0; i < colorOptions.length; i++) {
if(colorOptions[i] === "blue" {
document.getElementById("answer-link").innerHTML+=("Yes, blue is their favorite.");
count++;

})
}

*/
function playGame() {
  userName=prompt("Hi there! What\'s your name?","");
  foodGreeting();
  whiskeyOrBeer();
  westCoastBestCoast();
  howManyCats();
  /*
  favoriteColor();
  */
  document.getElementById("questionCount").innerHTML+=("Well " + userName + ", you got " + count + " out of 3 right.");
};




/*
Notes:
I had a question "would you like to play a game?" which got replaced in the flow by the addition of the "play game" button. So I'm currently down a question from the number I should have. That question, whiskeyOrBeer, and westCoastBestCoast all had the same programming so I didn't build a replacement question since that format is already demo-ed within the current questio set.
Based on the homework I'm currently missing 3 questions from this homework - the for loop, one of the original 3 (dropped per above), and one more that I can't seem to chase down the provinance of in the assignments. I'm going to submit as is with the knowledge this might be partial credit and a re-submit later.
For loop is in progress but currently commented out.
Table is outside of assignment scope, but I was having fun!
*/
