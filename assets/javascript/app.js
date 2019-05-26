
var questions = [{
    question: ["What is a SuperNova"],
    choices: ["A red planet", "When a star disapears", "The explosion of a star", "The home of Superheros"],
    answer: 0
}, {
    question: ["What is the speed of light?"],
    choices: ["299 792 458 m/s", "399mph", "228 698 m/s", "10000000mph"],
    answer: 0
}, {
    question: ["What is a total lunar eclipse?"],
    choices: ["When the Earth comes between the Sun and the Moon and covers the Moon with its shadow", "When the clouds sing to you", "The giant mystical ball living in our galaxy"],
    answer: 0
}, {
    question: ["What's the closest we've ever gotten to the sun?"],
    choices: ["Unknown species in 4560 came within 20 billion k/s", "America took a selfie with the sun within 21 feet from the sun", "Asia in 1221 landed and discoverred life on the sun", "West Germany got within 45 million km of the sun"],
    answer: 3
},
{
    question: ["Which planet has the most moons?"],
    choices: ["Whyoming", "Jupiter", "Mars", "Venus"],
    answer: 1
}]
var remainingTime = 55
var unanswered = 0
var correctAnswer = 0
var incorrectAnswer = 0
var currentQuestion = 0
var guessed;




window.onload = function () {
    $("#startBtn").on("click", initialize);

    $("#quiz ul").on("click", "li", selected);

    $("#submitBtn").click(function () {
        if ($(".choiceSelected").length != 1) {
            alert("No answer selected");
            unanswered++
            checkAnswer()

        }
        else {
            // console.log("working")
            guessed = parseInt($("li.choiceSelected").attr("id"));
            checkAnswer(guessed)
            // console.log(guessed)
        }
    })

    if (confirm === true) {
        resetGame()
    }
}

function selected() {
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
            // console.log("Times Up")
            display.text("TIMES UP")
        }
    }, 1000);
}
jQuery(function ($) {
    var time = 60 * 1,
        display = $('#timeCount');
    // console.log(display)
    startTimer(time, display);
})


function resetGame() {
    $("#results").hide()
    $("#starter").show()
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;

}

function checkAnswer() {
    var question = questions[currentQuestion]
    if (question.answer === guessed) {
        correctAnswer++
        console.log("Correct, total correct= " + correctAnswer)

    }
    else {
        incorrectAnswer++
    }
    currentQuestion++

    if (currentQuestion >= questions.length) {
        showResults()
    }
    else {
        showQuestion()
    }
    function promptToRestart() {
        setTimeout(function () {
            confirm("Would you like to start over?")

        }

            , 5000)

        if (confirm === true) {
            resetGame()
        }
    }
    function showResults() {
        $("#quiz").hide()
        $("#results").show()
        $("#correct").text("You answered " + correctAnswer + " questions correct")
        $("#incorrect").text("You answered " + incorrectAnswer + " questions Incorrect")
        $("#unanswered").text("You failed to answer " + unanswered + " questions")
        promptToRestart()


    }

}