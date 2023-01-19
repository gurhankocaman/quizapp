let questions = [ 
    {
    "question": "Wer hat HTML erfunden?",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3": "Tim Berners-Lee",
    "answer_4": "Justin Bieber",
    "right_answer": 3
    },
    {
    "question": " Was bewirkt der Befehl < i > ??",
    "answer_1": " Ein Bild",
    "answer_2": " Eine Tabellenzelle",
    "answer_3": " Kursive Schrift",
    "answer_4": " Ein Text",
    "right_answer": 3
    
    },
    {
    "question": "Wie fügt man ein Bild ein?",
    "answer_1": "< i... >",
    "answer_2": "< image... >",
    "answer_3": "< iimg.. >",
    "answer_4": "< img ... >",
    "right_answer": 4
    },
    {
    "question": "Wofür wurde HTML ursprünglich entwickelt??",
    "answer_1": "Zum Austausch von Daten",
    "answer_2": "Als Erweiterung des Windows-Desktops",
    "answer_3": "Als Erweiterung zur Schriftmöglichkeiten ",
    "answer_4": "Als Ersatzformat für Word-Dokumente",
    "right_answer": 1
    },  
    {
    "question": "Wie nennt man die HTML-Befehle??",
    "answer_1": "Attribute",
    "answer_2": "Tags",
    "answer_3": "Labels",
    "answer_4": "Funktionen",
    "right_answer": 2
    },
    {
    "question": "Was bedeutet CSS??",
    "answer_1": "Cool Style Sheet",
    "answer_2": "Cascade Style Sheets",
    "answer_3": "Cool Style Sheets",
    "answer_4": "Cascading Style Sheets",
    "right_answer": 4
    },
    {
    "question": "Wie ändert man die Schriftart?",
    "answer_1": "Font-family: ...",
    "answer_2": "Family-font: ...",
    "answer_3": "Family: ...",
    "answer_4": "Font: ...",
    "right_answer": 1
    },
    {
    "question": "Wofür benutzt man die Befehle 1.padding und 2.margin?(es gibt sie auch mit -top -bottom -left -right)",
    "answer_1": "1. Außenabstand 2. Innenabstand",
    "answer_2": "1.Schrift: linksbündig 2.Schrift: rechtsbündig",
    "answer_3": "1.Innenabstand 2. Außenabstand",
    "answer_4": "1.Schrift: rechtsbündig 2.Schrift: linksbündig",
    "right_answer": 3
    }, 
    {
    "question": "Wie stellt man es ein, dass sich ein Menüpunkt in einer Navigationsleiste anders färbt, wenn man mit dem Mauszeiger darüber fährt?",
    "answer_1": "Li: hover{...}",
    "answer_2": "Li: touch{...}",
    "answer_3": "Li: active{...}",
    "answer_4": "Li: over{...}",
    "right_answer": 1
    },
    {
    "question": "Wofür benutzt man CSS?",
    "answer_1": "Zum Formatieren einer Seite.",
    "answer_2": "Zum Strukturieren einer Seite.",
    "answer_3": "Zum Programmieren von Spielen.",
    "answer_4": "Zum Formatieren und Strukturieren einer Seite.",
    "right_answer": 1
    },
    {
    "question": "Wie heißt der Erfinder von JavaScript?",
    "answer_1": "Douglas Crockford",
    "answer_2": "Brendan Eich",
    "answer_3": "John Resig",
    "answer_4": "Steve Jobs",
    "right_answer": 2
    }, 
    {
    "question": "Wie lautete der Mädchenname von JavaScript kurz nach ihrer Geburt?",
    "answer_1": "Micha",
    "answer_2": "Mocha",
    "answer_3": "Mecha",
    "answer_4": "Macha",
    "right_answer": 2
    }

];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');
let AUDIO_END = new Audio('audio/end.mp3');


function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    document.getElementById('start-screen').style = 'display: none;';
    document.getElementById('questionBody').style = '';
    showQuestion();
}


function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();

    } else { 
        updateProgressBar();
        updateToNextQuestion();

    }
function gameIsOver(){
    return currentQuestion >= questions.length;
  }
    
function showEndScreen() {
    document.getElementById('endScreen').style = "";
    document.getElementById('questionBody').style = "display: none";
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/logo.png';
    AUDIO_END.play();
  }

function updateProgressBar() {
    let percent = (currentQuestion + 1)  / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
  }

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    
    showWhiteBalk();
  }

    
}

function showWhiteBalk() {
    whiteBalkHTML();
    whiteBalkCSS();
    whiteBalkJS();
}

function whiteBalkHTML() {
    if (currentQuestion < 5) {
        document.getElementById('html').classList.remove('color-blue');
    }

    else {
        document.getElementById('html').classList.add('color-blue');
    }
}


function whiteBalkCSS() {
    if (currentQuestion >= 5 && currentQuestion < 10) {
        document.getElementById('css').classList.remove('color-blue');
    }

    else {
        document.getElementById('css').classList.add('color-blue');
    }
}


function whiteBalkJS() {
    if (currentQuestion >= 10 && currentQuestion < 12) {
        document.getElementById('js').classList.remove('color-blue');
    }

    else {
        document.getElementById('js').classList.add('color-blue');
    }
}
 
function answer(selection) {
    let question = questions[currentQuestion]; // aktuell sorunun array i icin yazilir dogru cevaba ulasmak icin bsp. soru 1(0)
    let selectedQuestionNumber = selection.slice(-1) // sectigin sayi tikladigin soru sirasi olsun
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {  // Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
        

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
              
    }
    unclickableAnswers();
    document.getElementById('next-button').disabled = false;
   
   
}

function unclickableAnswers() {
    document.getElementById('answers').classList.add('unclick');
}

function clickableAnswers() {
    document.getElementById('answers').classList.remove('unclick')
}


function nextQuestion() {
    currentQuestion++; // z.b. von 0 auf 1
    document.getElementById('next-button').disabled = true;  // button i kitler
    resetAnswerButtons();
    clickableAnswers();
    showQuestion(); // sorulari yükler
   
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    document.getElementById('header-image').src = 'img/logo.png';
    document.getElementById('questionBody').style = ""; // questionBody wieder anzeigen 
    document.getElementById('endScreen').style = "display: none"; // Endscreen ausblenden  
    rightQuestions = 0;
    currentQuestion = 0;
    init();
    
    
  
}

