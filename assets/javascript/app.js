$(document).ready(function () {
    var numberRight = 0;
    var numberWrong = 0;
    var unanswered = 0;
    var gameOver = false;
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
            source: "https://www.huffingtonpost.com/2013/12/03/nicola-tesla-love-pigeon-facts-inventor_n_4320773.html",
            gif: "assets/images/pigeon.gif",
            gifAlt: "pigeon gif",
            nextQuestion: function () {
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
            source: "https://en.wikipedia.org/wiki/Microwave_oven#Discovery",
            gitAlt: "chocolate gif",
            nextQuestion: function () {
                loadQuestion(questionBank.question3);
            },
        },
        question3: {
            q: "Beavers teeth are so strong because they are rich in what?",
            a: {
                choice: "Calcium",
                correct: false,
                sub: "Ca"
            },
            b: {
                choice: "Iron",
                correct: true,
                sub: "Fe",
            },
            c: {
                choice: "Phosphorus",
                correct: false,
                sub: "P"
            },
            d: {
                choice: "Magnesium",
                correct: false,
                sub: "Mg",
            },
            answer: "Despite a lifetime's worth of gnawing on massive tree trunks, beavers are essentially immune to tooth decay; and that's because they've got tiny iron-rich nanowires interwoven throughout the enamel core of those outsized incisors.",
            source: "https://www.upi.com/Science_News/2015/02/12/Beavers-reveal-secret-to-stronger-tooth-enamel/8981423769555/",
            gif: "assets/images/beaver.gif",
            gitAlt: "beaver gif",
            nextQuestion: function () {
                loadQuestion(questionBank.question4);
            },
        },
        question4: {
            q: "A medium-sized cumulus cloud weighs about the same as...?",
            a: {
                choice: "100 Elephants",
                correct: true,
                sub: ""
            },
            b: {
                choice: "2 Schoolbuses",
                correct: false,
                sub: ""
            },
            c: {
                choice: "An olympic sized swimming pool",
                correct: false,
                sub: ""
            },
            d: {
                choice: "1 Rhino",
                correct: false,
                sub: "",
            },
            answer: "The USGS Water Science School estimates the average cumulus cloud weights ~1.1 million pounds! About the weight of 100 elephants. ",
            source: "https://water.usgs.gov/edu/watercycleatmosphere.html",
            gif: "assets/images/elephant.gif",
            gitAlt: "elephant gif",
            nextQuestion: function () {
                loadQuestion(questionBank.question5);
            },
        },
        question5: {
            q: "What is the fastest accelerating organism on Earth?",
            a: {
                choice: "Cheetah",
                correct: false,
                sub: ""
            },
            b: {
                choice: "Peregrine falcon",
                correct: false,
                sub: ""
            },
            c: {
                choice: "Fungus",
                correct: true,
                sub: ""
            },
            d: {
                choice: "Black marlin",
                correct: false,
                sub: "",
            },
            answer: "A type of fungus called Pilobolus crystallinus (otherwise known as the ‘Hat Thrower ‘or the ‘Dung Cannon fungi’). It can accelerate from 0-20km/h in 2 millionths of a second, and reach top speeds of over 300 kilometers per hour.",
            source: "https://futurism.com/fastest-moving-organism-planet-stinks-really/",
            gif: "assets/images/fungus.gif",
            gitAlt: "fungus gif",
            nextQuestion: function () {
                loadQuestion(questionBank.question6);
            },
        },
        question6: {
            q: "Before the 1960's the most reliable pregnancy test was to inject the urine of a woman into what animal?",
            a: {
                choice: "Cow",
                correct: false,
                sub: ""
            },
            b: {
                choice: "Cat",
                correct: false,
                sub: ""
            },
            c: {
                choice: "Frog",
                correct: true,
                sub: ""
            },
            d: {
                choice: "Salamander",
                correct: false,
                sub: "",
            },
            answer: "Until the 1960′s, the only reliable pregnancy test was to inject a woman’s urine into a female African clawed frog. If the woman was pregnant, the frog would ovulate within 12 hours.",
            source: "http://urbantimes.co/2014/05/40-interesting-science-facts-that-will-blow-your-socks-off/",
            gif: "assets/images/kermit.gif",
            gitAlt: "frog gif",
            nextQuestion: function () {
                loadQuestion(questionBank.question7);
            },
        },
        question7: {
            q: "Who has the longest canine (tooth)?",
            a: {
                choice: "Elephant",
                correct: false,
                sub: ""
            },
            b: {
                choice: "Saber tooth lion",
                correct: false,
                sub: ""
            },
            c: {
                choice: "Narwhal",
                correct: true,
                sub: ""
            },
            d: {
                choice: "Megaladon",
                correct: false,
                sub: "",
            },
            answer: "Incredibly, the narwhal’s only visible tooth is outside of its mouth. Its tusk, in fact, is a giant canine tooth—that can grow as long as 9 feet—with a distinct left-hand spiral, covered in a tissue called cementum, normally only found around the base of a tooth lodged in bone.",
            source: "https://insider.si.edu/2012/04/for-dentist-the-narwhals-smile-is-a-mystery-of-evolution/",
            gif: "assets/images/narwhal.gif",
            gitAlt: "narwhal gif",
            nextQuestion: function () {
                loadQuestion(questionBank.question8);
            },
        },
        question8: {
            q: "Which of the following has the greatest number of chromosomes?",
            a: {
                choice: "A type of fern",
                correct: true,
                sub: ""
            },
            b: {
                choice: "Blue whales",
                correct: false,
                sub: ""
            },
            c: {
                choice: "Humans",
                correct: false,
                sub: ""
            },
            d: {
                choice: "Horseshoe Crabs",
                correct: false,
                sub: "",
            },
            answer: "A type of fern called Ophioglossum reticulatum has 1260 chromosomes! Humans have 46, the humble potato has 48.",
            source: "https://genetics.thetech.org/ask/ask257",
            gif: "assets/images/fern.gif",
            gitAlt: "fern gif",
            nextQuestion: function () {
                loadQuestion(questionBank.question9);
            },
        },
        question9: {
            q: "What was Archimedes doing when he discovered his famed principle?",
            a: {
                choice: "Riding a horse",
                correct: false,
                sub: ""
            },
            b: {
                choice: "Sleeping",
                correct: false,
                sub: ""
            },
            c: {
                choice: "Sitting under a tree",
                correct: false,
                sub: ""
            },
            d: {
                choice: "Taking a bath",
                correct: true,
                sub: "",
            },
            answer: "Archimedes had to prove a crown given to Hieron, the king of Syracuse, was not pure gold. Frustrated in not being able to figure it out, he filled a bathtub and noticed that water spilled over the edge as he got in and he realized that the water displaced by his body was equal to the weight of his body. Knowing that gold was heavier than other metals the crown maker could have substituted in, Archimedes had his method.",
            source: "https://www.livescience.com/58839-archimedes-principle.html",
            gif: "assets/images/bath.gif",
            gitAlt: "cat bath gif",
            nextQuestion: function () {
                loadQuestion(questionBank.question10);
            },
        },
        question10: {
            q: "What was the first man made object to break the sound barrier?",
            a: {
                choice: "Bullet from a firearm",
                correct: false,
                sub: ""
            },
            b: {
                choice: "Bullwhip",
                correct: true,
                sub: ""
            },
            c: {
                choice: "Fighter jet",
                correct: false,
                sub: ""
            },
            d: {
                choice: "Arrow from a bow",
                correct: false,
                sub: "",
            },
            answer: "The loud noise you create by cracking a whip occurs because the tip is moving so fast it breaks the speed of sound!",
            source: "https://giphy.com/gifs/whip-it-devo-mark-mothersbaugh-23LIwxLIXgr6M",
            gif: "assets/images/whip.gif",
            gitAlt: "whip gif",
            nextQuestion: function () {
                $('#question').html("Here are your stats!");
                $('#answer-box').html('<p>Correct Answers: ' + numberRight + '</p><br><p>Incorrect Answers: ' + numberWrong + '</p><br><p> Questions timed out: ' + unanswered + '</p><br><div class="flex-column justify-self-center"><div class="btn btn-outline-dark restart">Restart?</div></div>');
                $('.restart').on("click", function() {
                    reset();
                });            
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
            '</button><button class="col-md-8 btn mx-auto multiple-choice" id="c" value="' + questionNumber.c.correct + '">' +
            questionNumber.c.choice +
            '</button><button class="col-md-8 btn mx-auto multiple-choice" id="d" value="' + questionNumber.d.correct + '">' +
            questionNumber.d.choice + '</button></div></div>'
        );
        var countDown = setInterval(function () {
            timeLeft--;
            $('#secs').text(timeLeft);
            if (answered) {
                clearInterval(countDown);
                $('#secs').empty();
            }
            if (timeLeft <= 0) {
                unanswered++;
                numberWrong++;
                $('.timer').html("Times up!");
                $('#answer-box').html('<img src="' + questionNumber.gif + '" alt="answer gif">');
                $('#question').html(questionNumber.answer);
                $('#secs').empty();
                clearInterval(countDown);
                setTimeout(questionNumber.nextQuestion, 8000);
            }
        }, 1000);
        var trueFalse;
        $('.multiple-choice').on("click", function () {
            var trueFalse = $(this).val();
            console.log(trueFalse);
            if (numberRight + numberWrong === 10 || !gameOver) {
                gameOver = true;
            }
            else if (trueFalse === "false" || !gameOver) {
                answered = true;
                numberWrong++;
                $('#secs').empty();
                $('.timer').html('<div class="nope">Nope!<div>');
                $('#answer-box').html('<img src="' + questionNumber.gif + '" alt="answer gif">');
                $('#question').html(questionNumber.answer);
                setTimeout(questionNumber.nextQuestion, 8000);

            }
            else if (trueFalse === "true" || !gameOver) {
                answered = true;
                numberRight++;
                $('#secs').empty();
                $('.timer').html('<div class="yup">Yup!<div>');
                $('#answer-box').html('<img src="' + questionNumber.gif + '" alt="answer gif">');
                $('#question').html(questionNumber.answer);
                setTimeout(questionNumber.nextQuestion, 8000);
            }

        });
    }
    function reset() {
        numberRight = 0;
        numberWrong = 0;
        gameOver = false;
        loadQuestion(questionBank.question1);
    }
    $('.start').on("click", function () {
        loadQuestion(questionBank.question1);
    });

});