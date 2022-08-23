// let start = document.querySelector(".start");

var gameProgress = 0

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
        question: "Which Values are False-y?",
        options: ["False, 0, -0, On, "", '', ``, null, undefined, NaN, document.all", "False, 0, -0, On, -On, "", '', ``, null, undefined, NaN", "False, 0, -0, On, -On, "", '', ``, null, undefined, NaN, document.all", "False, 0, On, "", '', ``, null, undefined, NaN, document.all"],
        correctAnswer: "False, 0, -0, On, "", '', ``, null, undefined, NaN, document.all"
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
