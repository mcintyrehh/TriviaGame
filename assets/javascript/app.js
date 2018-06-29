$( document ).ready(function() {
    var numberRight = 0;
    var numberWrong = 0;
    var questionBank = {
        question1: {
            q: "What animal was Tesla famously in love with?",
            a: {
                choice: "Horse",
                correct: false,
                asn: "Equus caballus",
            }, 
            b: {
                choice: "Cat",
                correct: false,
                bsn: "Felis catus",
            },
            c: {
                choice: "Ferret",
                correct: false,
                csn: "Mustela putorius furo",
            },
            d: {
                choice: "Pigeon",
                correct: true,
                dsn: "Columbidae",
            },
            answer: "\"I loved that pigeon as a man loves a woman, and she loved me. As long as I had her, there was a purpose to my life.\" - Nikola Tesla",
            gif: "assets/images/pigeon.gif",

        }
    }

function loadQuestion(question) {
    var timeLeft = 10;
    var answered = false;
    var questionNumber = question;
    var currentQuestion = questionNumber.q;
    $('.question-block').html('<div class="sub-box"><div class="timer text-center">' + 
    'Seconds left: </div> <div class="mx-auto text-center" id="secs">10</div><div class="text-center" id="question">' + 
    currentQuestion + '</div><div class="mx-auto text-center" id="answer-box"><button class="col-md-8 btn mx-auto multiple-choice" id="a" value="' + questionNumber.a.correct + '">' +
    questionNumber.a.choice + 
    '</button><button class="col-md-8 btn mx-auto multiple-choice" id="b" value="' + questionNumber.b.correct + '">' + 
    questionNumber.b.choice + 
    '</button><button class="col-md-8 btn mx-auto multiple-choice" id="c" value="'+ questionNumber.c.correct + '">' + 
    questionNumber.c.choice + 
    '</button><button class="col-md-8 btn mx-auto multiple-choice" id="d" value="' +questionNumber.d.correct + '">' +
    questionNumber.d.choice + '</button></div></div>'
    );
    var countDown = setInterval(function() {
        timeLeft--;
        $('#secs').text(timeLeft);
        if (answered) {
            clearInterval(countDown);
        }
        if (timeLeft <= 0) {
            numberWrong++;
            $('.timer').html("Times up!");
            $('#answer-box').html('<img src="' + questionNumber.gif + '" alt="pigeon gif">');
            $('#question').html(questionNumber.answer);
            clearInterval(countDown);
        }
    }, 1000);
    var trueFalse;
    $('.multiple-choice').on('click', function() {
        var trueFalse = $(this).val();
        console.log(trueFalse);
        if (trueFalse === "false") {
            answered = true;
            numberWrong++;
            $('.timer').html('<div class="nope">Nope!<div>');
            $('#answer-box').html('<img src="' + questionNumber.gif + '" alt="pigeon gif">');
            $('#question').html(questionNumber.answer);
        }
        else if (trueFalse === "true") {
            answered = true;
            numberRight++;
            $('.timer').html('<div class="yup">Yup!<div>');
            $('#answer-box').html('<img src="' + questionNumber.gif + '" alt="pigeon gif">');
            $('#question').html(questionNumber.answer);
        }      
    });
}
    $('.start').on("click", function() {
        loadQuestion(questionBank.question1);
    });

});