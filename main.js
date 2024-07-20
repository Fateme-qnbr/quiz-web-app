// import './style.css'

document.addEventListener('DOMContentLoaded', function() {
    const btn_img = document.getElementById('img');
    const img = document.getElementById('img');
    const question_mark = document.getElementById('question_mark');
    const shape = document.getElementById('shape');


    const chooseQuiz = [{
        title:"choose your favorite",
        button_choose:["General","Animal","Science"]
    }];

    const generalData = [
        {
            question:"",
            options: [],
            answer:""
        }
    ];
    const animalData = [
        {
            question:"",
            options: [],
            answer:""
        }
    ];

    const scienceData = [
        {
            question:"",
            options: [],
            answer:""
        }
    ];

    let currentQuestionIndex = 0;

    const questionTitle = document.getElementById('');
    const questionOptions = document.getElementById('');
    const nextBtn = document.getElementById('');

    



    btn_img.addEventListener('click', function() {
        setTimeout(function() { 
            question_mark.classList.add('fade-out');
            shape.classList.add('fade-out');
            img.classList.add('fade-out')

            // Remove elements after the transition ends
            question_mark.addEventListener('transitionend', function() {
                question_mark.remove();
            });
            shape.addEventListener('transitionend', function() {
                shape.remove();
            });
            img.addEventListener('transitionend', function() {
                img.remove();
            });
        });
    
        





















    });












});