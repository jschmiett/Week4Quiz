// let start = document.querySelector(".start");

var gameProgress = 0

var questionArray = [
    {
        question: "1st Question",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option B"
    },
    {
        question: "2nd Question",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option B"
    },
    {
        question: "3rd Question",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option B"
    },
    {
        question: "4th Question",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option B"
    },
    {
        question: "5th Question",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option B"
    },
];

function questionOrder() {
    document.getElementById("questions").textContent = questionArray[gameProgress].question;
    // Putting option buttons on screen below question
    // document.getElementById('divA').textContent = 'This text is different!';
    for (var i = 0; i < questionArray[gameProgress].options.length; i++) {
        var button = document.createElement("button");
        button.textContent = questionArray[gameProgress].options[i];
        document.getElementById("answerButton").append(button);
    }



}

function verifyAnswer() {
    console.log("answer button clicked")
}

console.log(questionArray[2].question)

document.getElementById("start").addEventListener("click", start);

function start() {
    console.log("Worked");
    document.getElementById("welcome").setAttribute("class", "hide");
    document.getElementById("quiz").classList.remove("hide");
    questionOrder();
    button.getElementById("answerButton").addEventListener("click", verifyAnswer);

}
