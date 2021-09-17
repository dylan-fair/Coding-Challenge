var highScoreBtn = document.querySelector("#high-score");
var body = document.querySelector("#body")
var header = document.querySelector("#header");
var mainPage = document.createElement("div");
var timer = 75;
var questions = ["Which is a loop?", "How to end a line in javascript?", "Whats it called when you call a function inside itself?"];
var answers = [["Wheel loop", "conditional loop", "for loop", "if loop"], [":", ".", ",", ";"], ["Loops", "Recursion", "science", "cool stuff"]];
var answerKey = [2, 3, 1];
var clock = document.createElement("h2");

var frontPage = function() {
    var title = document.createElement("h1");
    var descript = document.createElement("p");
    var start = document.createElement("button");
    title.textContent = "Coding Quiz";
    title.className = "title";
    mainPage.appendChild(title);
    descript.textContent = "Welcome to the coding quiz! When you press start you will be presented with questions. Each wrong loses time! Once all complete your time is your high score! Good luck!";
    descript.className = "description";
    mainPage.appendChild(descript);
    start.textContent = "Start Quiz";
    start.className = "start-btn";
    mainPage.appendChild(start);
    mainPage.className = "main-page";
    body.appendChild(mainPage);
};
var time = function() {
    clock.textContent = "Time: " + timer;
    header.appendChild(clock);

};
var timeInterval = setInterval(function(){
    if (timer <  0) {
        return;
    }
    clock.textContent = "Time: " + timer;
    timer--;

}, 1000);
var buttonHandler = function(event) {
    var targetEl = event.target;
    if (targetEl.matches(".start-btn")) {
        console.log("hello");
        mainPage.remove();
        quizHandler();
        timeInterval();

    }
    else if (targetEl.matches(".btn")) {
        console.log("high score!");
    }
}
var quizHandler = function() {
    for(var i = 0; i < questions.length; i++) {
        quiz(questions[i], answers[i], answerKey[i]);
    }
}
var quiz = function(q, a , ak) {
    var quizScreen = document.createElement("div");
    quizScreen.className = "quiz";
    var questionTitle = document.createElement("h1");
    questionTitle.textContent = q;
    var answersButtons = document.createElement("ul");
    answersButtons.className = "answer-list";
    for (var i = 0; i < a.length; i++) {
        var listEl = document.createElement("li");
        var button = document.createElement("button");
        button.textContent = a[i];
        listEl.appendChild(button);
        answersButtons.appendChild(listEl);
    }
    quizScreen.appendChild(questionTitle);
    quizScreen.appendChild(answersButtons);
    body.appendChild(quizScreen);
};
time();
frontPage();
body.addEventListener("click", buttonHandler);