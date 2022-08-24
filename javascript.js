// let start = document.querySelector(".start");

var gameProgress = 0
var timeLeft = 60;
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('timerEl');

var questionArray = [
    {
        question: "The DOM is:",
        options: ["Directory of Model", "Document Object Model", "Directory of Object Management", "Department of Magic"],
        correctAnswer: "Document Object Model"
    },
    {
        question: "CRUD stands for:",
        options: ["Create, Review, Update, Delete", "Can Read Ur Data", "Create, Read, Update, Delete", "Create, Review, Update, Data"],
        correctAnswer: "Create, Read, Update, Delete"
    },
    {
        question: "MERN stands for:",
        options: ["Mangos Eat Right Now!", "Mongoose, Express, React, NoSql", "MongoDB, Express, React, NoSql", "MongoDB, Express, React, Node"],
        correctAnswer: "MongoDB, Express, React, Node"
    },
    {
        question: "5th Question",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option B"
    },
];

function countdown() {
    console.log("Countdown started");

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            endGame();
        }
    }, 1000);
}


function questionOrder() {
    document.getElementById("answerButton").innerHTML = "";
    document.getElementById("questions").textContent = questionArray[gameProgress].question;
    // Putting option buttons on screen below question
    // document.getElementById('divA').textContent = 'This text is different!';
    for (var i = 0; i < questionArray[gameProgress].options.length; i++) {
        var button = document.createElement("button");
        button.textContent = questionArray[gameProgress].options[i];
        button.onclick = verifyAnswer;
        document.getElementById("answerButton").append(button);
    }
}

function verifyAnswer() {
    console.log("answer button clicked");
    console.log(this.textContent);
    if (this.textContent === questionArray[gameProgress].correctAnswer) {
        console.log("correct")
    } else {
        console.log("incorrect");
    }
    gameProgress++
    if (gameProgress > questionArray.length - 1) {
        console.log("End Game");
        endGame();
    } else {
        questionOrder();
    }
}

function endGame() {
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("endGame").classList.remove("hide");
};

document.getElementById("endGameSubmitButton").addEventListener("click", function () {
    var initials = document.getElementById("initials").value;
    console.log(initials);
    // save player to local storage
})

console.log(questionArray[2].question)

document.getElementById("start").addEventListener("click", start);
document.getElementById('start').addEventListener("click", countdown);

function start() {
    console.log("Worked");
    document.getElementById("welcome").setAttribute("class", "hide");
    document.getElementById("quiz").classList.remove("hide");
    questionOrder();
}
