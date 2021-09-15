var highScoreBtn = document.querySelector("#high-score");
var body = document.querySelector("#body")
var header = document.querySelector("#header");
var timer = 75;

var frontPage = function() {
    var mainPage = document.createElement("div");
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
        var removeMain = document.querySelector(".mainpage");
        removeMain.remove();

    }
    else if (targetEl.matches(".btn")) {
        console.log("high score!");
    }
}
var quiz = function() {
    var question = {
        q1: "Which is a loop?",
        a1: "For loop",
        q2: "How do you end a line?",
        a2: ";",
        q3: "how do you declare a varible",
        a3: "var ..."
    }
    var randomAnswers= ["compile loop", "wheel loop", "if loop", ":", ".",
        "endl;", "variable ...", "number ...", "vas ..."];
    var quizScreen = document.createElement("div");
    var question = document.createElement("h1");
    var answers = document.createElement("ul");
    for (var i = 0; i < randomAnswers.length / 3; i++) {
        question.textContent = question.q1;
    }
};

quiz();
time();
body.addEventListener("click", buttonHandler);