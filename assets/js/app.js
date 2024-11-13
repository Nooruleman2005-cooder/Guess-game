function guessNum(){
    var randomNum = Math.random()*10;
    var correctNum = Math.floor(randomNum) + 1;
    var userNum = parseInt(document.getElementById("Guess").value);
    var resultMessage = document.getElementById("resultMessage");
    if (isNaN(userNum)) {
        resultMessage.textContent = "Please enter a valid number.";
        return;
    }
    if(userNum === correctNum){
        resultMessage.textContent = "Congratulations! You Won.";
    }
    else if (userNum === correctNum + 1 || userNum === correctNum-1){
         resultMessage.textContent ="Almost there! the correct number is : " + correctNum;
        }
    else{
    
         resultMessage.textContent ="You lose! the correct number is : " + correctNum;
        }
}