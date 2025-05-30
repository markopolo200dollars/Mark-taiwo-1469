const quizData = [
    {
        question: "Your friend is having a bad day. you:",
        answers: [
            { Text: "Send them a funny text to cheer them up", type:"Entertainer" },
            { Text: "Call them to talk and listen", type:"listener" },
            { Text: "Surprise them with a treat or gift ", type:"Loyal" },
            { Text: "Take them out ", type:"Adventurous" },
        ]
    },
     {
        question: "The ideal way to spend time with your friends is:",
        answers: [
            { Text: "Telling stories and cracking jokes ", type:"Entertainer" },
            { Text: "Have a deep heart felt conservation with them", type:"listener" },
            { Text: "Supporting each other during tough times ", type:"Loyal" },
            { Text: "Doing something new and bold together", type:"Adventurous" },
        ]
    }, 
      {
        question: "When your friend forgets your birthday. you:",
        answers: [
            { Text: "Make a playful joke about it ", type:"Entertainer" },
            { Text: "tell them how it made you feel ", type:"listener" },
            { Text: "forgive them the right way", type:"Loyal" },
            { Text: "Plan something fun together anyway", type:"Adventurous" },
        ]
    },
];

let currentQuestion = 0;
let selectedTypes = [];

function loadQuestion() {
    const questionData =
    quizData [currentQuestion];

    document.getElementById("question").
    textContent = questionData.question;

    const answerButtons =
    document.querySelectorAll( answer-btn);

    questionData.answers.forEach((answer, index) => {
         answerButtons[index].textContent = answer.text;
         answerButtons[index].dataset.type = answer.type;
         answerButtons[index].disabled = false;
    });

    document.getElementById("result").textcontent ="";
    document.getElementById("next-btn").style.display ="none";
}

function checkAnswer(index) {const answerButtons =
 document.querySelectorAll(".answer-btn");
 const selectedType = answerButtons[index].dataset.type;
 selectedTypes.push(selectedType);

document.getElementById("result").textContent = youchose;
{selectedType};
answerButtons.forEach(button=>button.disabled = true);
document.getElementById("next-btn").styledisplay = "inline-block";
}
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion<quizData.length){
        loadQuestion();
    }else {
        showResult();
    }
}
function showResult () {
    const typeCounts = {};

    selectedTypes.forEach(type =>{
        typeCounts[type] = (typeCounts[type] || 0) + 1;
    });

    let resultType = null;
    let maxCount = 0;

    for (const type in typeCounts) {
        if (typeCounts[type] > maxCount) {
            maxCount = typeCounts[type];
            resultType = type;
        }
    }

    const resultDescriptios = {
        Entertainer:"You're the entertainer! You bring laughter, energy and positivity to every friendship.",
        Listener: "You're the listener!.",
        Loyal:"You're the Loayl!",
        Adventurous:"You're adventurous!",
    };
    document.getElementById("quiz").innerHTML = <h2>Your friendship style:${resultType}</h2>
} 