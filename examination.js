const questionData = [
    {
        question: "1. ໄກ່ ກັບ ໄຂ່ ອັນໃດເກີດກ່ອນ",
        a: "ໄກ່",
        b: "ໄຂ່",
        c: "ສະຫຼະ 'ໄx'",
        d: "ໄດໂນເສົາ",
        correct:"b"
    },
    {
        question: "2. 'Two Zero Two Four' ກົງກັບຂໍ້ໃດ",
        a: "2024",
        b: "0044",
        c: "0024",
        d: "2044",
        correct:"a"
    },
    {
        question: "3. ໄກ່ຜັດຂີງໃຊ້ຫຍັງຜັດ",
        a: "ໄກ່",
        b: "ໝໍ້",
        c: "ຕະຫຼິວ",
        d: "ຄົນ",
        correct:"d"
    }
];

const questionEL = document.getElementById("question");
const answerEls = document.querySelectorAll('.answer');
const container = document.querySelector('.question-container')
const choiceA = document.getElementById('a-text');
const choiceB = document.getElementById('b-text');
const choiceC = document.getElementById('c-text');
const choiceD = document.getElementById('d-text');

const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuestion();
function loadQuestion(){
    checkChoice();
    const currentQuizData = questionData[currentQuestion];
    questionEL.innerText = currentQuizData.question;
    choiceA.innerHTML = currentQuizData.a;
    choiceB.innerHTML = currentQuizData.b;
    choiceC.innerHTML = currentQuizData.c;
    choiceD.innerHTML = currentQuizData.d;
}

function checkChoice(){
    answerEls.forEach(answerEl=>answerEl.checked = false);
}

submitBtn.addEventListener('click', () => {
    let answer = getChoiceAnswer();
    if(answer === questionData[currentQuestion].correct){
        score++;
    }
    currentQuestion++;
    if(currentQuestion < questionData.length){
        loadQuestion();
    }else {
        container.innerHTML = `<h2>ຄະແນນ = ${score}/${questionData.length}</h2>`
    }

    console.log(answer);
});

function getChoiceAnswer() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}