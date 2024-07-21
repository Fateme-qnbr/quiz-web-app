document.addEventListener('DOMContentLoaded', function() {
    const btn_img = document.getElementById('img');
    const question_mark = document.getElementById('question_mark');
    const shape = document.getElementById('shape');
    const quizSelection = document.getElementById('quiz-selection');
    const quizContainer = document.getElementById('quiz-container');
    const scoreContainer = document.getElementById('score-container');
    
    const questionTitle = document.getElementById('question-title');
    const questionOptions = document.getElementById('question-options');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score');
    const tryAgainBtn = document.getElementById('try-again-btn');
    
    const generalData = [
        { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
        { question: "Which continent is Egypt in?", options: ["Asia", "Africa", "Europe", "Australia"], answer: "Africa" },
        { question: "What is the currency of Japan?", options: ["Yen", "Dollar", "Euro", "Won"], answer: "Yen" },
        { question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
        { question: "What language is spoken in Brazil?", options: ["Spanish", "Portuguese", "English", "French"], answer: "Portuguese" }
    ];
    
    const animalData = [
        { question: "Which animal is known as the king of the jungle?", options: ["Lion", "Tiger", "Elephant", "Cheetah"], answer: "Lion" },
        { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"], answer: "Blue Whale" },
        { question: "Which animal is known for its stripes?", options: ["Tiger", "Leopard", "Zebra", "Giraffe"], answer: "Zebra" },
        { question: "What is a baby kangaroo called?", options: ["Calf", "Joey", "Cub", "Pup"], answer: "Joey" },
        { question: "Which bird is a universal symbol of peace?", options: ["Dove", "Eagle", "Sparrow", "Peacock"], answer: "Dove" }
    ];
    
    const scienceData = [
        { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
        { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
        { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500 km/s"], answer: "300,000 km/s" },
        { question: "What force keeps us on the ground?", options: ["Magnetism", "Gravity", "Friction", "Tension"], answer: "Gravity" },
        { question: "What is the human body's largest organ?", options: ["Heart", "Liver", "Skin", "Lungs"], answer: "Skin" }
    ];
    
    let currentQuestionIndex = 0;
    let currentQuizData = [];
    let score = 0;

    document.querySelectorAll('.quiz-btn').forEach(button => {
        button.addEventListener('click', function() {
            const quizType = this.getAttribute('data-quiz');
            if (quizType === 'General') {
                currentQuizData = generalData;
            } else if (quizType === 'Animal') {
                currentQuizData = animalData;
            } else if (quizType === 'Science') {
                currentQuizData = scienceData;
            }
            startQuiz();
        });
    });

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizSelection.style.display = 'none';
        scoreContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        loadQuestion(currentQuestionIndex);
    }

    function loadQuestion(index) {
        const question = currentQuizData[index];
        questionTitle.textContent = question.question;

        questionOptions.innerHTML = '';
        question.options.forEach(option => {
            const optionElement = document.createElement('button');
            optionElement.textContent = option;
            optionElement.classList.add('option-btn');
            optionElement.addEventListener('click', function() {
                checkAnswer(option);
            });
            questionOptions.appendChild(optionElement);
        });
        feedback.textContent = '';
    }

    function checkAnswer(selectedOption) {
        const currentQuestion = currentQuizData[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            feedback.textContent = 'Correct!';
            feedback.style.color = 'green';
            score++;
        } else {
            feedback.textContent = `Wrong! The correct answer is ${currentQuestion.answer}.`;
            feedback.style.color = 'red';
        }
    }

    nextBtn.addEventListener('click', function() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuizData.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            endQuiz();
        }
    });

    function endQuiz() {
        quizContainer.style.display = 'none';
        scoreContainer.style.display = 'block';
        scoreDisplay.textContent = `You scored ${score} out of ${currentQuizData.length}`;
    }

    tryAgainBtn.addEventListener('click', function() {
        quizContainer.style.display = 'none';
        scoreContainer.style.display = 'none';
        quizSelection.style.display = 'block';
    });

    btn_img.addEventListener('click', function() {
        setTimeout(function() {
            question_mark.classList.add('fade-out');
            shape.classList.add('fade-out');
            btn_img.classList.add('fade-out');
            // quizContainer.classList.add('fade');

            // Remove elements after the transition ends
            question_mark.addEventListener('transitionend', function() {
                question_mark.remove();
            });
            shape.addEventListener('transitionend', function() {
                shape.remove();
            });
            btn_img.addEventListener('transitionend', function() {
                btn_img.remove();
            });

            // Display the quiz selection after fade-out
            
            quizSelection.style.display = 'flex';
          
        }, 100); // Small delay to allow adding fade-out class
    });
});
