const correctAnswers = ['B', 'B', 'B', 'A'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

form.addEventListener('submit', e => {

    e.preventDefault();

    let score = 0;
    const userAnswer = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value];


    userAnswer.forEach((answer, index) => {

        if (answer === correctAnswers[index]) {

            score += 25;
        }
    });

    //console.log(score);

    result.querySelector('span').textContent = score;
    result.classList.remove('d-none');
});