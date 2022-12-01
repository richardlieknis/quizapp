let pageCount = questions.length;
let currentPage = 0;
let points = 0;

const wrongAns = new Audio('src/sounds/wrong.mp3');
const rightAns = new Audio('src/sounds/right.mp3');
const endgame = new Audio('src/sounds/end.mp3');


function renderContent() {
    document.querySelector('.endImg').classList.add('d-none');
    content.innerHTML = '';
    currentPage = 0;
    points = 0;
    renderQuestions();
    disableBtn(true);

}

function renderQuestions() {
    content.innerHTML = '';
    content.innerHTML = renderQuestionsTemp(currentPage);

}

function renderEndScreen() {
    content.innerHTML = '';
    content.innerHTML = renderEndScreenTemp(points);
    document.querySelector('.endImg').classList.remove('d-none');
}

function checkAnswer(a) {
    let rightAns = questions[currentPage].rightAnswer;

    if (rightAns == a) {
        playSound('right');
        colorAnswer(a, true);
        points++;
    } else {
        playSound('wrong');
        colorAnswer(a, false);
        colorAnswer(rightAns, true);
    }
    disableAns(true);
    disableBtn(false);
    checkForLastQuestion();
}

function checkForLastQuestion() {
    if (currentPage === pageCount - 1) {
        document.getElementById('nextBtn').innerHTML = "AUSWERTUNG";
    }
}

function colorAnswer(a, boolean) {
    if (boolean === true) {
        let answer = document.getElementById(`ans${a}`);
        answer.classList.add('true');
    }
    if (boolean === false) {
        let answer = document.getElementById(`ans${a}`);
        answer.classList.add('false');
    }

}

function playSound(sound) {
    if (sound === 'win') {
        endgame.cloneNode(true).play();
    }
    if (sound === 'wrong') {
        wrongAns.cloneNode(true).play();
    }
    if (sound === 'right') {
        rightAns.play();
    }

}

////////////////////////////////////////////////////////////

function nextPage() {
    if (currentPage >= 0 && currentPage < pageCount - 1) {
        currentPage++;
        renderQuestions();
        disableBtn(true);

    }
    if (document.getElementById('nextBtn').innerHTML == "AUSWERTUNG") {
        renderEndScreen();
    }

}

function disableBtn(boolean) {
    document.getElementById('nextBtn').disabled = boolean;
}

function disableAns(boolean) {
    for (let i = 0; i < 4; i++) {
        document.getElementById(`ans${i+1}`).disabled = boolean;
        document.getElementById(`ans${i+1}`).classList.add('noHover');
    }
}