var highScoreBtn = document.querySelector("#high-score");
var body = document.querySelector("#body")
var header = document.querySelector("#header");
var mainPage = document.createElement("div");
var timer = 75;
var questions = ["Which is a loop?", "How to end a line in javascript?", "Whats it called when you call a function inside itself?", "Which is a var type?"];
var answers = [["Wheel loop", "conditional loop", "for loop", "if loop"], [":", ".", ",", ";"], ["Loops", "Recursion", "science", "cool stuff"], ["Object", "Function", "Cout", "print"]];
var answerKey = [2, 3, 1, 0];
var clock = document.createElement("h2");
var index = 0;
var quizScreen = document.createElement("div");
var finalScore = 0;
var timeInt;
var initials = [];
var inputScreen = document.createElement("div");
inputScreen.className = "inputScreen";
var highScoreScreen = document.createElement("div");
highScoreScreen.className = "high-score-screen";

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
var timeInterval = function() {
    timeInt = setInterval(function(){
        if (timer <  0) {
            return;
        }
        clock.textContent = "Time: " + timer;
        timer--;
        endTime()
    }, 1000);

}

var buttonHandler = function(event) {
    var targetEl = event.target;
    if (targetEl.matches(".start-btn")) {
        mainPage.remove();
        quiz(questions[index], answers[index]);
        timeInterval();

    }
    else if (targetEl.matches("[data-answer-id]")) {
        var id = targetEl.getAttribute("data-answer-id");
        if (id == answerKey[index]) {
            var correct = document.createElement("h2");
            correct.textContent = "CORRECT!!!";
            quizScreen.appendChild(correct);
            var timeout = setTimeout(function(){
                quizScreen.innerHTML = "";
                index++;
                quiz(questions[index], answers[index],);
            }, 1000);
        } else {
            var incorrect = document.createElement("h2");
            incorrect.textContent = "WRONG!!!";
            console.log("reached")
            quizScreen.appendChild(incorrect);
            timer -= 10;
            var timeout = setTimeout(function(){
                quizScreen.innerHTML = "";
                index++;
                quiz(questions[index], answers[index],);
            }, 1000);
        }
        if(index === questions.length -1) {
            finalScore = timer;
            timeInt = clearInterval(timeInt);
            quizScreen.remove();
            addScore();
        }
    }
    else if (targetEl.matches(".btn")) {
        mainPage.remove();
        quizScreen.remove();
        showHigh();
    }
    else if (targetEl.matches(".return")) {
        mainPage.innerHTML = "";
        highScoreScreen.remove();
        quizScreen.remove();
        highScoreScreen.remove();
        inputScreen.remove();
        frontPage();

    }
    else if (targetEl.matches(".clearBtn")) {
        clear();
    }
}
var quiz = function(q, a) {
    var counter = 0;
    quizScreen.className = "quiz";
    var questionTitle = document.createElement("h1");
    questionTitle.textContent = q;
    var answersButtons = document.createElement("ul");
    answersButtons.className = "answer-list";
    for (var i = 0; i < a.length; i++) {
        var listEl = document.createElement("li");
        var button = document.createElement("button");
        button.textContent = a[i];
        button.setAttribute("data-answer-id", counter)
        listEl.appendChild(button);
        answersButtons.appendChild(listEl);
        counter++;
    }
    quizScreen.appendChild(questionTitle);
    quizScreen.appendChild(answersButtons);
    body.appendChild(quizScreen);
};
var addScore = function() {
    time();
    var initial = document.createElement("form");
    var label = document.createElement("h1");
    label.setAttribute("for", "inital");
    label.textContent = "Enter Initials";
    initial.appendChild(label);
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Your Initials");
    input.setAttribute("id", "inital");
    initial.appendChild(input);
    inputScreen.appendChild(initial);
    body.appendChild(inputScreen);

}
var getIntial = function () {
    var finalIntial = document.getElementById("inital").value;
    initials.push(finalIntial);
    saveInitals();
}
var saveInitals = function() {
    localStorage.setItem(initials, JSON.stringify(finalScore));
}
var showHigh = function() {
    highScoreScreen.innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
        var initial = document.createElement("h1");
        var score = document.createElement("h2");
        var init = localStorage.key(i);
        var personalScore = localStorage[init];
        initial.textContent = init;
        score.textContent = personalScore;
        highScoreScreen.appendChild(initial);
        highScoreScreen.appendChild(score);
    }
    var returnBtn = document.createElement("button");
    returnBtn.className = "return"
    returnBtn.textContent = "Return!";
    highScoreScreen.appendChild(returnBtn);
    var clearBtn = document.createElement("button");
    clearBtn.className = "clearBtn";
    clearBtn.textContent = "Clear High Scores";
    highScoreScreen.appendChild(clearBtn);
    body.appendChild(highScoreScreen);
}
var clear = function() {
    localStorage.clear();
}
var endTime = function() {
    if (timer === 0) {
        finalScore = timer;
        timeInt = clearInterval(timeInt);
        quizScreen.remove();
        addScore();
    }
}
time();
frontPage();
body.addEventListener("click", buttonHandler);
body.addEventListener("submit", getIntial);