const STORE = {
    questions: [
    {
      question: 'What does the term "scratch golfer" mean?',
      answers: [
        'Someone that will scratch out a score and make a better one.',
        'Someone that has shot a "hole in one".',
        'Someone with a handicap of zero.',
        'Someone that scratches their head constantly.'
      ],
      correctAnswer:
        'Someone with a handicap of zero.'
    },
    {
      question:
        'What is a "birdie"?',
      answers: [
        'A bird that you try to catch on the golf course.',
        'When a person scores one shot better than par.',
        'The trophy when you win a golf tournament.',
        'The annoying pidgeon from the parking lot.'
      ],
      correctAnswer:
        'When a person scores one shot better than par.'
    },
    {
      question:
        'What was the longest putt ever made?',
      answers: [
        '375 feet',
        '200 feet',
        '534 feet',
        '187 feet'
      ],
      correctAnswer: '375 feet'
    },
    {
      question: 'What color shirt does Tiger Woods wear on Sundays?',
      answers: [
        'Tidi',
        'Pink',
        'Red',
        'Purple'
      ],
      correctAnswer: 'Red'
    },
    {
      question:
        'How many majors has Jack Nicklaus won?',
      answers: [
        '5',
        '18',
        '37',
        '25'
      ],
      correctAnswer: '18'
    }
],
score: 0,
questionNumber: 0
};

//will start the quiz when someone clicks on "Let's Go!"
function startQuiz() {
    $('#start').on('click', function(event) {
        generateQuestion();
    });
}

//chooses which answers to display from the store array
function questionOptions() {
    let question = STORE.questions[STORE.questionNumber];
    for(let i=0; i<question.options.length; i++) {
         
}


//displays a question
function generateQuestion() {
    /*let question = STORE.questions[STORE.questionNumber];
    updateScore();
    //let answers =  
    const questionHtml = $(`
    <div>
    <form id="js-questions" class="question-form">
        
        <fieldset>
            <div class="question-title">
                <legend>${question.question}</legend>
                
                <input type="radio" name="answer" value=" ">${STORE.questions}<br>
                <input type="radio" name="answer" value=" ">${STORE.questions}<br>
                <input type="radio" name="answer" value=" ">${STORE.questions}<br>
                <input type="radio" name="answer" value=" ">${STORE.questions}<br>
             </div>
        <div class="button-options">
            <button type="button" id="next-question">Next Question</button>
        </div>
        </fieldset>
    </form>
    </div>`);
    $('main').html(questionHtml);
    questionOptions();*/
    console.log('`generateQuestion ran`')
}

/*checks whether the chosen option is right or wrong and displays respective message*/ 
function handleSelectOption() {
    console.log('`handleSelectOption ran`')
}


//reset the stats on the final page after someone restarts the quiz
function resetStats() {
    console.log('`resetStates ran`')
  }

  //restarts the quiz when someone clicks on the restart button on the final page
function restartQuiz() {
    $('quiz-body').on('click', '#restart', (event) => {
        generateQuestion();
    });
}

//display the final page with score and retake quiz option
function displayFinal() {
    console.log('`displayFinal ran`')
}

//decides whether or not to display the next question or display the final page
function handleQuestions() {
     $('body').on('submit', '#next-question', (event) => {
         if(STORE.questionNumber === STORE.questions.length) {
             displayFinal();
        } else {
            generateQuestion();
        }
     });
 }

function handleQuizApp() {
    startQuiz();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
}

$(handleQuizApp);