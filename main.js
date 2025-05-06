// Funções para abrir e fechar imagem em tela cheia
function openFull(imgElement) {
  const fullImgContainer = document.getElementById("fullImgContainer");
  const fullImg = document.getElementById("fullImg");
  fullImg.src = imgElement.src;
  fullImgContainer.style.display = "flex";
}

function closeFull() {
  document.getElementById("fullImgContainer").style.display = "none";
}

// Função para criar confetes
function createConfetti() {
  const confettiElement = document.createElement("div");
  confettiElement.classList.add("confetti");
  document.getElementById("confetti").appendChild(confettiElement);

  const xPos = Math.random() * window.innerWidth;
  const duration = Math.random() * 3 + 2;
  
  confettiElement.style.left = `${xPos}px`;
  confettiElement.style.animationDuration = `${duration}s`;

  setTimeout(() => {
    confettiElement.remove();
  }, duration * 1000);
}
setInterval(createConfetti, 100);

// Efeito de coração ao clicar na tela
document.body.addEventListener('click', function(event) {
  const heart = document.createElement('div');
  heart.classList.add('heartEffect');
  heart.style.left = `${event.clientX - 12}px`;
  heart.style.top = `${event.clientY - 12}px`;

  document.getElementById('heartClickEffect').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});

// Contador de dias juntos
const startDate = new Date('2023-01-08');
const currentDate = new Date('2025-05-06'); // Data certa de hoje!
const diffTime = currentDate - startDate;
const daysTogether = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById('counter').textContent = `Estamos juntos há ${daysTogether} dias!`;

// Contador de beijos
let kissCount = 0;
const kissButton = document.getElementById('kiss-button');
const kissCounter = document.getElementById('kiss-counter');

kissButton.addEventListener('click', () => {
  kissCount++;
  kissCounter.textContent = `Beijos dados: ${kissCount}`;

  if (kissCount === 50) {
    showSurprise();
  }
});

// Função para mostrar surpresa ao atingir 50 beijos
function showSurprise() {
  const surpriseMessage = document.createElement('div');
  surpriseMessage.classList.add('surprise');
  surpriseMessage.innerHTML = `
    <h2>🎉 Surpresa! 🎉</h2>
    <p>Você merece todos os beijos do universo, meu amor! 💖</p>
    <button id="close-surprise">Fechar</button>
  `;
  document.body.appendChild(surpriseMessage);

  document.getElementById('close-surprise').addEventListener('click', () => {
    surpriseMessage.remove();
  });
}

// Quiz de perguntas
let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "Qual foi o nosso primeiro encontro?",
    answers: {
      A: "No cinema 🎬",
      B: "Jantando juntos em um restaurante 🍽",
      C: "Um encontro improvisado no parque 🌳",
      correct: "A"
    }
  },
  {
    question: "Qual é o meu prato favorito que você sempre faz?",
    answers: {
      A: "Lasanha 🧀",
      B: "Macarrão 🍝",
      C: "Strogonoff 🍄",
      correct: "A"
    }
  },
  {
    question: "Qual filme nós sempre assistimos juntos?",
    answers: {
      A: "Vingadores 🦸‍♂️🦸‍♀️",
      B: "Titanic 🚢",
      C: "Velozes e Furiosos 💕",
      correct: "C"
    }
  },
  {
    question: "Qual apelido fofo eu te chamo?",
    answers: {
      A: "Mamaca 💖",
      B: "Bixinha",
      C: "Meu Amor",
      correct: "A"
    }
  },
  {
    question: "Se tivéssemos que viajar juntos agora, qual destino você acha que eu escolheria?",
    answers: {
      A: "EUA",
      B: "Suiça",
      C: "Uma cidade histórica na Europa 🏰",
      correct: "A"
    }
  },
  {
    question: "Qual foi o nosso melhor momento até agora?",
    answers: {
      A: "Aquele dia de viagem de Flexeiras",
      B: "Quando ficamos 4 dias seguidos juntos",
      C: "Não tem",
      correct: "B"
    }
  }
];

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");
const scoreMessage = document.getElementById("score-message");

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;

  document.querySelectorAll(".answer-btn").forEach((btn, index) => {
    const answerKey = Object.keys(currentQuestion.answers)[index];
    btn.textContent = currentQuestion.answers[answerKey];
    btn.onclick = () => checkAnswer(answerKey);
  });
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestionIndex].answers.correct;
  if (selectedAnswer === correctAnswer) {
    score++;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.style.display = "none";
  resultContainer.style.display = "block";

  if (score === questions.length) {
    resultMessage.textContent = "Você me conhece como ninguém! 💖";
  } else {
    resultMessage.textContent = "Hum... ainda dá pra melhorar! 😅";
  }

  scoreMessage.textContent = `Sua pontuação: ${score} de ${questions.length}`;
}

// Inicializa o quiz
showQuestion();
