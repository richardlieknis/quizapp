let pageCount = questions.length;
let currentPage = 0;


function renderContent() {
    content.innerHTML = '';
    renderQuestions();
    disableBtn(true);

}

function renderQuestions() {
    content.innerHTML = '';
    content.innerHTML = renderQuestionsTemp(currentPage);

}

function checkAnswer(a) {
    if (questions[currentPage].rightAnswer == a) {
        colorAnswer();
        disableBtn(false);
    } else colorAnswer();
}

function colorAnswer() {
    //TODO
}


////////////////////////////////////////////////////////////

function nextPage() {
    if (currentPage >= 0 && currentPage < pageCount - 1) {
        currentPage++;
        renderQuestions();
        disableBtn(true);
    }
}

function lastPage() {
    if (currentPage > 0 && currentPage < pageCount) {
        currentPage--;
        renderQuestions()
    }
}

function disableBtn(boolean) {
    console.log(boolean);
    document.getElementById('nextBtn').disabled = boolean;
}