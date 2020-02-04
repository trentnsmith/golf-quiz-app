const STORE = {
  questions: [
    {
      question: '1. What does the term "scratch golfer" mean?',
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
        '2. What is a "birdie"?',
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
        '3. What was the longest putt ever made?',
      answers: [
        '375 feet',
        '200 feet',
        '534 feet',
        '187 feet'
      ],
      correctAnswer: '375 feet'
    },
    {
      question: '4. What color shirt does Tiger Woods wear on Sundays?',
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
        '5. How many majors has Jack Nicklaus won?',
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

function startQuiz() {
  $('#start').click(function() {
    console.log('STAERING QUIXK');
    generateQuestion()
  });
}

function nextQuestion() {
  $('#nextQuestion').click(function() {
    STORE.questionNumber++;  
    if (STORE.questionNumber < STORE.questions.length) { 
      generateQuestion();
    } else {
      finalPage();
    }
  })
}

function finalPage () {
  $('main').html( `
  <main role="main" class="quiz-body">
  <fieldset>
      <div class="question-title">
          <legend>Hope you enjoyed these fun facts about golf!</legend>
          <p>Your score: ${STORE.score} </p>
      </div>
      <div class="button-options">
          <button type="button" id="restart">Retake Quiz</button>
      </div>
  </fieldset>
</main>`)
  restartQuiz();
}

function submitAnswer() {
  $('#submitButton').click(function() {
    event.preventDefault();
    let selection = $('input:checked');
    let userChoice = selection.val();
    let correct = STORE.questions[STORE.questionNumber].correctAnswer;

    console.log(selection);
    console.log(correct);

    if (userChoice === correct) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  });
}


// //displays a question
function generateQuestion() {
  let question = STORE.questions[STORE.questionNumber];
  // updateScore();

  let answers = '';

  for (let i in question.answers) {
    answers += `<input type="radio" name="answer" value="${question.answers[i]}">${question.answers[i]}<br>`;
  }

  const questionHtml = $(`
    <div>
      <form id="js-questions" class="question-form">
          <fieldset>
              <div class="question-title">
                  <legend>${question.question}</legend>
                  ${answers}
               </div>
          <div class="button-options">
              <button type="button" id="submitButton">Submit</button>
          </div>
          </fieldset>
      </form>
    </div>`);
  $('main').html(questionHtml);

  const scoreAndQuestionHtml = $(`
      <header class="flex-container-header">
          <div class="quiz-title">
              <h1>Fun Facts Golf Quiz</h1>
              <div class="score">Question: ${STORE.questionNumber + 1}/5  Score: <span id="userScore">${STORE.score}</span></div>
          </div>
      </header>`);
  $('header').html(scoreAndQuestionHtml);


  // questionOptions();
  console.log('`generateQuestion ran`')
  submitAnswer();
}

function correctAnswer () {
  console.log('CORRECT!!!!');
  $('.question-title').html(
    `<legend>You got it!</legend>
    <img src="images/hole_in_one.jpg" alt="guy excited about a hole in one" class="images">
      <p class="holeInOne_fore">"Hole in One!"</p>
            <div class="button-options">
                <button type="button" id="nextQuestion">Next Question</button>
            </div>`
  );
  STORE.score++;
  $('#submitButton').hide();


  $('#userScore').html(STORE.score);
  nextQuestion();

}

function wrongAnswer () {
  console.log('WRONG ANSWER!');
  $('.question-title').html(
    `<legend>Sorry, that is incorrect..</legend>
      <img src="images/fore.jpg" alt="guy yelling fore!" class="images">
      <p class="holeInOne_fore">"FORE!"</p>
            <div class="button-options">
                <button type="button" id="nextQuestion">Next Question</button>
            </div>`
  )
  $('#submitButton').hide();
  nextQuestion();
}

function restartQuiz () {
  $('#restart').click(function() {
      $('main').html(` 
      <main role="main" id="quiz_body" class="quiz-body">
      <fieldset>
          <div class="question-title">
              <legend>Golf originated in 15th century Scotland</legend>
              <p>Are you ready to learn more fun facts about the game of golf?</p>
          </div>
          <div class="button-options">
              <button type="button" id="start">Let's Go!</button>
          </div>
      </fieldset>
  </main>`)
  startQuiz();
  STORE.questionNumber = 0;
  STORE.score = 0;
  $('.score').hide();
  })
}

startQuiz();
nextQuestion(); 