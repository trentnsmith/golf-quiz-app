const STORE = [
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
      
let score = 0;
let questionNumber = 0;

function generateQuestion() {
    if (questionNumber < STORE.length) {
        return createThing(questionNumber);
    }   else {
    }
}

function startQuiz() {
    $('#start').on('click', function(event) {
        renderAQuestion();
    });
}



function resetStats() {
    score = 0;
    questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
  }

function restartQuiz () {
    $('quiz-body').on('click', '#restart', (event) => {
        event.preventDefault();
        resetScore();
        renderAQuestion();
    });
}


function handleQuizApp() {
    startQuiz ();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
}

$(handleQuizApp);