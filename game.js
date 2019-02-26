var animals = ["cat", "giraffe","dog","caw","horse","lion","tiger"]
var win = 0;
var lose = 0;
var guessed = []
var leftguesess = 10;
var answer = []
var computerchoice = []
var word = []
//


console.log(answer)
document.onkeyup = function (event) {
  var userchoice = event.key
  if (word.includes(userchoice)) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === userchoice) {
        answer[i] = userchoice;
      }

    }
    document.querySelector("#word").innerHTML=answer.join("  ")
    if (!answer.includes("_")) { alert("you won!");
      win++;
      document.querySelector("#wins").innerHTML=win
      reset()

    }


  }
  else {guessed.push(userchoice)
    document.querySelector("#wrong").innerHTML=guessed
    leftguesess--;
    document.querySelector("#left").innerHTML=leftguesess
    if (leftguesess === 0) {
     alert("you lost!"); lose++;
      reset()
    }
  }

}
function reset() {
  computerchoice = animals[Math.floor(Math.random() * animals.length)]
  console.log(computerchoice)
  word = computerchoice.split("")
  console.log(word)
  answer=[]
  for (var i = 0; i < word.length; i++) {
    answer.push("_");

  }
document.querySelector("#word").innerHTML=answer.join(" ")
leftguesess=10
guessed=[]
}
reset()
