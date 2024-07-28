document.addEventListener('DOMContentLoaded', function() {
    const btn_img = document.getElementById('img');
    const question_mark = document.getElementById('question_mark');
    const shape = document.getElementById('shape');
    const quizSelection = document.getElementById('quiz-selection');
    const quizContainer = document.getElementById('quiz-container');
    const scoreContainer = document.getElementById('score-container');
    const quizTitle = document.getElementById('quiz-title');
    const questionTitle = document.getElementById('question-title');
    const questionOptions = document.getElementById('question-options');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score');
    const tryAgainBtn = document.getElementById('try-again-btn');
    const startBtn = document.getElementById('start-btn');

    const generalData = [
        { title:"General", question: "1.What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
        { title:"General", question: "2.Which continent is Egypt in?", options: ["Asia", "Africa", "Europe", "Australia"], answer: "Africa" },
        { title:"General", question: "3.What is the currency of Japan?", options: ["Yen", "Dollar", "Euro", "Won"], answer: "Yen" },
        { title:"General", question: "4.What is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
        { title:"General", question: "5.What language is spoken in Brazil?", options: ["Spanish", "Portuguese", "English", "French"], answer: "Portuguese" }
    ];
    
    const animalData = [
        { title:"Animal", question: "1.Which animal is known as the king of the jungle?", options: ["Lion", "Tiger", "Elephant", "Cheetah"], answer: "Lion" },
        { title:"Animal", question: "2.What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"], answer: "Blue Whale" },
        { title:"Animal", question: "3.Which animal is known for its stripes?", options: ["Tiger", "Leopard", "Zebra", "Giraffe"], answer: "Zebra" },
        { title:"Animal", question: "4.What is a baby kangaroo called?", options: ["Calf", "Joey", "Cub", "Pup"], answer: "Joey" },
        { title:"Animal", question: "5.Which bird is a universal symbol of peace?", options: ["Dove", "Eagle", "Sparrow", "Peacock"], answer: "Dove" }
    ];
    
    const scienceData = [
        { title:"Science", question: "1.What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
        { title:"Science", question: "2.What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
        { title:"Science", question: "3.What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500 km/s"], answer: "300,000 km/s" },
        { title:"Science", question: "4.What force keeps us on the ground?", options: ["Magnetism", "Gravity", "Friction", "Tension"], answer: "Gravity" },
        { title:"Science", question: "5.What is the human body's largest organ?", options: ["Heart", "Liver", "Skin", "Lungs"], answer: "Skin" }
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
        const title = currentQuizData[index];
        const question = currentQuizData[index];
        quizTitle.textContent = title.title;
        questionTitle.textContent = question.question
        
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
        const optionButtons = document.querySelectorAll('.option-btn');
        let selectedButton = questionOptions;
        optionButtons.forEach(button => button.disabled = true);
        if (selectedOption === currentQuestion.answer) {
            feedback.textContent = 'Correct!';
            feedback.style.color = 'green';
            selectedButton.style.backgroundColor = '#7BE29E';
            
            score++;
        } else {
            feedback.textContent = `Wrong! The correct answer is ${currentQuestion.answer}.`;
            feedback.style.color = 'red';
            selectedButton.style.backgroundColor = '#F2A8A8';
            optionButtons.forEach(button => {
                if (button.textContent === currentQuestion.answer) {
                    button.style.backgroundColor = '#7BE29E';
                }
            });
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

    startBtn.addEventListener('click', function() {
        setTimeout(function() {
            question_mark.classList.add('fade-out');
            startBtn.classList.add('fade-out');
            btn_img.classList.add('fade-out');
            // quizContainer.classList.add('fade');

            // Remove elements after the transition ends
            question_mark.addEventListener('transitionend', function() {
                question_mark.remove();
            });
            startBtn.addEventListener('transitionend', function() {
                startBtn.remove();
            });
            btn_img.addEventListener('transitionend', function() {
                btn_img.remove();
            });

            // Display the quiz selection after fade-out
            
            quizSelection.style.display = 'flex';
          
        }, 100); // Small delay to allow adding fade-out class
    });
});
