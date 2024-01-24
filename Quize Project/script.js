const question = [
    {
        question:"who is the prime minister of india ?",
        answers:[
            {text:"modi",correct: true},
            {text:"mukesh",correct: false},
            {text:"manish",correct: false},
            {text:"himanshu",correct: false},
        ]
    },
    {
        question:"who is the prime minister of india ?",
        answers:[
            {text:"modi",correct: false},
            {text:"mukesh",correct: false},
            {text:"manish",correct: true},
            {text:"himanshu",correct: false},
        ]

    },
    {
    question:"who is the mukesh Ambani?",
    answers:[
        {text:"modi",correct: false},
        {text:"mukesh",correct: false},
        {text:"manish",correct: false},
        {text:"Bsn.Man",correct: true},
    
    ]
    },
    {
        question:"who is the president of india ?",
        answers:[
            {text:"modi",correct: false},
            {text:"mukesh",correct: false},
            {text:"manish",correct: false},
            {text:"D.Murmur",correct: true},
        
        ]
        },
        {
            question:"who is the vice president of india ?",
            answers:[
                {text:"modi",correct: false},
                {text:"mukesh",correct: false},
                {text:"Dankhar",correct: true},
                {text:"himanshu",correct: false},
            
            ]
            },
            {
                question:"RAM stand for",
                answers:[
                    {text:"Random Access Memory" ,correct:true},
                    {text:"Radean Axcess Memory" ,correct:false},
                    {text:"Roma Access Memory" ,correct:false},
                    {text:"Read Access Memories" ,correct:false},
                ]
            }
];

const quesElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton  = document.getElementById("next-btn");

let curentquesIndex = 0;
let score = 0;

function startQuize() {
    curentquesIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[curentquesIndex];
    let questionNo = curentquesIndex + 1;
    quesElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach( answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answers.correct){
            button.dataset.correct = answers.correct;
        }

        button.addEventListener("click", selectAnswer);
    });

}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled  = true;
    });
    nextButton.style.display = "block";
}


function showscore(){
    resetState();
    quesElement.innerHTML = `You scored ${score} out of ${question.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"

}


 function handleNextButton(){
    curentquesIndex++;
    if(curentquesIndex < question.length){
        showQuestion();
    }
    else{
        showscore();
    }
 }
 
nextButton.addEventListener("click",() =>{
    if(curentquesIndex < question.length){
        handleNextButton();

    }
    else{
        startQuize();
    }
});

startQuize();