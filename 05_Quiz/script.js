document.addEventListener('DOMContentLoaded', function () {
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];
  let questionContainer = document.querySelector('#question-container')
  let questionText = document.querySelector('#question-text')
  let choicesList = document.querySelector('#choices-list')
  let nextBtn = document.querySelector('#next-btn')
  let resultContainer = document.querySelector('#result-container')
  let score = document.querySelector('#score')
  let restartBtn = document.querySelector('#restart-btn')
  let startBtn = document.querySelector('#start-btn')
  let questionNumber = 0
  let currentScore = 0
  let hasAnsweredCurrentQuestion = false

  startBtn.addEventListener('click', () => {
    nextBtn.classList.add('hidden')
    startBtn.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    showQuestion(questions[questionNumber])
  });
  nextBtn.addEventListener('click', () => {
    if (questionNumber < questions.length) {
      showQuestion(questions[questionNumber])
    } else {
      showResult()
    }
  });
  function showResult() {
    questionContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')
    score.textContent = `${currentScore} our of ${questionNumber}`
    return
  }
  restartBtn.addEventListener('click', function () {
    hasAnsweredCurrentQuestion = false
    questionNumber = 0;
    currentScore = 0;
    startBtn.classList.remove('hidden')
    resultContainer.classList.add('hidden')
    questionText.textContent = ''
    choicesList.innerHTML = ''
    score.textContent = ''
  })
  function showQuestion(obj) {
    questionText.textContent = obj.question
    choicesList.innerHTML = ''
    for (let i = 0; i < 4; i++) {
      let list = document.createElement('li');
      list.textContent = obj.choices[i]
      choicesList.appendChild(list)
    }
  };
  choicesList.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
      checkAnswer(e.target.textContent, questions[questionNumber].answer)
      hasAnsweredCurrentQuestion = true
      nextBtn.classList.remove('hidden')
    }
  });
  function checkAnswer(userAnswer, realAnswer) {
    if (hasAnsweredCurrentQuestion) {
      if (userAnswer == realAnswer) {
        currentScore++;
      }
      hasAnsweredCurrentQuestion = false
    }
    questionNumber++;
  }
})