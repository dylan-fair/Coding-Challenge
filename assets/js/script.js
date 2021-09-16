var highScoreBtn = document.querySelector("#high-score");
var body = document.querySelector("#body")
var header = document.querySelector("#header");
var mainPage = document.createElement("div");
var timer = 75;

var frontPage = function() {
    var title = document.createElement("h1");
    var descript = document.createElement("p");
    var start = document.createElement("button");
    title.textContent = "Coding Quiz";
    title.className = "title";
    mainPage.appendChild(title);
    descript.textContent = "Welcome to the coding quiz! When you press start you will be presented with questions. Each wrong loses time! Once all complete your time is your high score! Good luck";
    descript.className = "description";
    mainPage.appendChild(descript);
    start.textContent = "Start Quiz";
    start.className = "start-btn";
    mainPage.appendChild(start);
    mainPage.className = "main-page";
    body.appendChild(mainPage);
};
var time = function() {
    var clock = document.createElement("h2");
    clock.textContent = "Time: " + timer;
    header.appendChild(clock);

};
var buttonHandler = function(event) {
    var targetEl = event.target;
    if (targetEl.matches(".start-btn")) {
        console.log("hello");
        mainPage.remove();
        quiz();

    }
    else if (targetEl.matches(".btn")) {
        console.log("high score!");
    }
}
var quiz = function() {
    var questions = ["Which is a loop?", "how to end a line in javascript?", "Whats it called when you call a function inside itself?"];
    var answers = [["Wheel loop", "conditional loop", "for loop", "if loop"], [":", ".", ",", ";"], ["Loops", "Recursion", "science", "cool stuff"]];
    var answerKey = [2, 3, 1];
    var quizScreen = document.createElement("div");
    quizScreen.className = "quiz";
    var questionTitle = document.createElement("h1");
    var answersButtons = document.createElement("ul");
    answersButtons.className = "answer-list";
    for (var i = 0; i < questions.length; i++) {
        var counter = 0;
        questionTitle.textContent = questions[i];
        quizScreen.appendChild(questionTitle);
        for (var x = 0; x < 4; x++) {
            var answerEl = document.createElement("li");
            var answerbtn = document.createElement("button");
            answerbtn.textContent = answers[i][x];
            answerbtn.setAttribute("data-answer-id", counter);
            answerEl.appendChild(answerbtn);
            answersButtons.appendChild(answerEl);
            counter++;
        }
        quizScreen.appendChild(answersButtons);
        body.appendChild(quizScreen);
    }
};
time();
frontPage();
body.addEventListener("click", buttonHandler);