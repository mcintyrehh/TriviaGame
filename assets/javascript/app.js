$( document ).ready(function() {
    var numberRight = 0;
    var numberWrong = 0;
    var questionBank = {
        question1: {
            q: "What animal was Tesla famously in love with?",
            a: {
                choice: "Horse",
                correct: false,
                sub: "Equus caballus",
            }, 
            b: {
                choice: "Cat",
                correct: false,
                sub: "Felis catus",
            },
            c: {
                choice: "Ferret",
                correct: false,
                sub: "Mustela putorius furo",
            },
            d: {
                choice: "Pigeon",
                correct: true,
                sub: "Columbidae",
            },
            answer: "\"I loved that pigeon as a man loves a woman, and she loved me. As long as I had her, there was a purpose to my life.\" - Nikola Tesla",
            gif: "assets/images/pigeon.gif",
            gifAlt: "pigeon gif",
            nextQuestion: function() {
                loadQuestion(questionBank.question2);
            },

        },
        question2: {
            q: "The discovery of a microwave beam's ability to heat things up was because of what food?",
            a: {
                choice: "Popcorn",
                correct: false,
                sub: "Well...regular corn first"
            },
            b: {
                choice: "Chocolate",
                correct: true,
                sub: "The taste of science"
            },
            c: {
                choice: "Meatloaf",
                correct: false,
                sub: "I would do anything for science...but I won't do that"
            },
            d: {
                choice: "An egg",
                correct: false,
                sub: "did it come first?",
            },
            answer: "\"In 1945, the specific heating effect of a high-power microwave beam was accidentally discovered by Percy Spencer, an American self-taught engineer from Howland, Maine. Employed by Raytheon at the time, he noticed that microwaves from an active radar set he was working on started to melt a chocolate bar he had in his pocket.",
            gif: "assets/images/chocolate.gif",
            gitAlt: "chocholate gif",
            nextQuestion: function() {
                loadQuestion(questionBank.question3);
            },
        },
        question3: {
            q: "",
            a: {
                choice: "",
                correct: ,
                sub: ""
            },
            b: {
                choice: "",
                correct: ,
                sub: ""
            },
            c: {
                choice: "",
                correct: ,
                sub: ""
            },
            d: {
                choice: "",
                correct: ,
                sub: "",
            },
            answer: "\"In 1945, the specific heating effect of a high-power microwave beam was accidentally discovered by Percy Spencer, an American self-taught engineer from Howland, Maine. Employed by Raytheon at the time, he noticed that microwaves from an active radar set he was working on started to melt a chocolate bar he had in his pocket.",
            gif: "assets/images/...",
            gitAlt: " gif",
            nextQuestion: function() {
                loadQuestion(questionBank.question4);
            },
        },
        question4: {
            q: "",
            a: {
                choice: "",
                correct: ,
                sub: ""
            },
            b: {
                choice: "",
                correct: ,
                sub: ""
            },
            c: {
                choice: "",
                correct: ,
                sub: ""
            },
            d: {
                choice: "",
                correct: ,
                sub: "",
            },
            answer: "\"In 1945, the specific heating effect of a high-power microwave beam was accidentally discovered by Percy Spencer, an American self-taught engineer from Howland, Maine. Employed by Raytheon at the time, he noticed that microwaves from an active radar set he was working on started to melt a chocolate bar he had in his pocket.",
            gif: "assets/images/...",
            gitAlt: " gif",
            nextQuestion: function() {
                loadQuestion(questionBank.question5);
            },
        },
        question5: {
            q: "",
            a: {
                choice: "",
                correct: ,
                sub: ""
            },
            b: {
                choice: "",
                correct: ,
                sub: ""
            },
            c: {
                choice: "",
                correct: ,
                sub: ""
            },
            d: {
                choice: "",
                correct: ,
                sub: "",
            },
            answer: "\"In 1945, the specific heating effect of a high-power microwave beam was accidentally discovered by Percy Spencer, an American self-taught engineer from Howland, Maine. Employed by Raytheon at the time, he noticed that microwaves from an active radar set he was working on started to melt a chocolate bar he had in his pocket.",
            gif: "assets/images/...",
            gitAlt: " gif",
            nextQuestion: function() {
                loadQuestion(questionBank.question6);
            },
        },
        question6: {
            q: "",
            a: {
                choice: "",
                correct: ,
                sub: ""
            },
            b: {
                choice: "",
                correct: ,
                sub: ""
            },
            c: {
                choice: "",
                correct: ,
                sub: ""
            },
            d: {
                choice: "",
                correct: ,
                sub: "",
            },
            answer: "Until the 1960′s, the only reliable pregnancy test was to inject a woman’s urine into a female African clawed frog. If the woman was pregnant, the frog would ovulate within 12 hours.",
            gif: "assets/images/kermit.gif",
            gitAlt: "frog gif",
            nextQuestion: function() {
                loadQuestion(questionBank.question7);
            },
        },        
        
    };

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
            $('#answer-box').html('<img src="' + questionNumber.gif + '" alt="' + questionNumber.gifAlt + '>');
            $('#question').html(questionNumber.answer);
            clearInterval(countDown);
            setTimeout(questionNumber.nextQuestion, 5000);
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
            setTimeout(questionNumber.nextQuestion, 5000);

        }
        else if (trueFalse === "true") {
            answered = true;
            numberRight++;
            $('.timer').html('<div class="yup">Yup!<div>');
            $('#answer-box').html('<img src="' + questionNumber.gif + '" alt="pigeon gif">');
            $('#question').html(questionNumber.answer);
            setTimeout(questionNumber.nextQuestion, 5000);
        }  

    });
}
    $('.start').on("click", function() {
        loadQuestion(questionBank.question1);
    });

});