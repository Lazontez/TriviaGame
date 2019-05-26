
var questions = [{
    question: ["What is a SuperNova"],
    choices: ["The explosion of a star", "When a star dissapears", "zebra"],
    answer: 2
}, {
    question: ["What is the speed of light?"],
    choices: ["299 792 458 m/s", "", ""],
    answer: 0
}, {
    question: ["What is a total lunar eclipse?"],
    choices: ["When the Earth comes between the Sun and the Moon and covers the Moon with its shadow", "", ""],
    answer: 0
}, {
    question: ["What's the closest we've ever gotten to the sun?"],
    choices: ["West Germany got within 45 million km of the sun", "", ""],
    answer: 0
},
{
    question: ["Which planet has the most moons?"],
    choices: ["Whyoming", "Jupiter", "Mars", "Venus"],
    answer: 0
}]
var remainingTime = 55
var unanswered = 0
var correctAnswer = 0
var incorrectAnswer = 0
var currentQuestion = 0




window.onload = function () {
    $("#startBtn").on("click", initialize)

    $("#quiz ul").on("click","li",selected)
}

function selected(){
    $(".choiceSelected").removeClass("choiceSelected")
    $(this).addClass("choiceSelected")


}

function initialize() {
    $("#startBtn").hide();
    $("#quiz").show();
    showQuestion();

}
function showQuestion() {
    var questionAsked = questions[currentQuestion];
    $("#questions").text(questionAsked.question);
    $("#choices").text("")
    for (var i = 0; i < questionAsked.choices.length; i++) {
        $("#choices").append("<li id='" + i + "'>" + questionAsked.choices[i] + "</li>")
        // questions.choices[i]
        console.log(questions[i].question)
        console.log(questions[i].choices)
    }

}
shpw
function startTimer(duration, display) {

    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "" + seconds : seconds;

        display.text(seconds + (" seconds Remaining"));

        if (--timer < 0) {
            timer = duration;
        }
        else if (timer === 0) {
            console.log("Times Up")
            display.text("TIMES UP")
        }
    }, 1000);
}
jQuery(function ($) {
    var time = 60 * 1,
        display = $('#timeCount');
    console.log(display)
    startTimer(time, display);
})


function resetGame() {

}
function showResults() {

}
function checkAnswer() {

}