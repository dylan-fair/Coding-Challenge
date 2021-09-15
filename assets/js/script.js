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

};


time();
frontPage();
body.addEventListener("click", buttonHandler);