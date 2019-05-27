


//**************VARIABLES


//
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
//**********Event Listeners */


//When the start button is clicked run the initialize function
    $("#startBtn").on("click", initialize);
//When a choice is clicked on add the class "selected" to it
    $("#quiz ul").on("click", "li", selected);
//When the submit btn is clicked 
    $("#submitBtn").click(function () {

        //If there wasnt a choice selected 
        if ($(".choiceSelected").length != 1) {
            //alert that there was no answer selected
            alert("No answer selected");
            //add 1 to the unanswered variable
            unanswered++
            //run the check answer function
            checkAnswer()

        }
        else {
            // turn the id of the choice selected into an integer
            guessed = parseInt($("li.choiceSelected").attr("id"));
            //and run the checkAnswer function
            checkAnswer(guessed)
            // console.log(guessed)
        }
    })
    //When the reset button is clicked
    $("#resetBtn").click(function (e) {
        // Run the prevent default function
        e.preventDefault()
        //then run the resetGame function
        resetGame()
    })
   

    // $("#resetBtn").click(function () {
    //     resetGame()


    // })
}

function selected() {
    //remove any class with the choice selected class
    $(".choiceSelected").removeClass("choiceSelected")
    //then add the choiceSelected class
    $(this).addClass("choiceSelected")


}

function initialize() {
    //Hide the start button
    $("#startBtn").hide();
    //show the quiz
    $("#quiz").show();
    //run the showQuestion function
    showQuestion();

}
function showQuestion() {
    //create a variable called questionAsked that goes in the questions
    //object and uses the current question value to decide which question array is 
    //the questionAsked
    var questionAsked = questions[currentQuestion];
    //make the text of the questions id to the questionAsked variable's question
    $("#questions").text(questionAsked.question);
    //empty the choices text
    $("#choices").text("")
    //run looop through the questionAsked choices array
    for (var i = 0; i < questionAsked.choices.length; i++) {
        //Add a list item with the id of i and the content as the questionAsked choices
        $("#choices").append("<li id='" + i + "'>" + questionAsked.choices[i] + "</li>")
        // questions.choices[i]
        console.log(questions[i].question)
        console.log(questions[i].choices)
    }

}
function startTimer(duration, display) {

    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 30, 10);

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
//Hide results
    $("#results").hide()
//show quiz
    $("#quiz").show()
//reset variables back to zero
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    currentQuestion=0;

}

function checkAnswer() {
    var question = questions[currentQuestion]
    //if the question answer has the same value of the guess
    if (question.answer === guessed) {
        //add 1 to correctAnswer variable
        correctAnswer++
        //Alert correct 
        alert("Correct")
        console.log("Correct, total correct= " + correctAnswer)

    }
    else {
        //add one  to the incorrect variable
        incorrectAnswer++
        alert("Sorry, thats wrong :(")

    }
    //add one to current question variable
    currentQuestion++

    //If all question have been shown 
    if (currentQuestion >= questions.length) {
        //Run the show results function
        showResults()
    }
    else {
        //run the showQuestion variable
        showQuestion()
    }

    
    function showResults() {
        //hide the quiz
        $("#quiz").hide()
        //show the results
        $("#results").show()
        //Show the user there results
        
        $("#correct").text("You answered " + correctAnswer + " questions correct")
        $("#incorrect").text("You answered " + incorrectAnswer + " questions Incorrect")
        $("#unanswered").text("You failed to answer " + unanswered + " questions")


    }
}