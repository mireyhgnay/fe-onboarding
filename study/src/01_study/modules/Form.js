import addBoard from "./Board";

const jiraButton = document.querySelector('.jira_button');
const jiraInput = document.querySelector('.jira_input');

const createBoard = () => {
    const todoBoard = document.querySelector('.board.todo');
    todoBoard.append(addBoard({number}));
}

const clickEvent = () => {
    const jiraNumber = document.getElementById('number');
    const jiraText = document.getElementById('text');

    // input 값을 입력하지 않았을 때
    if(!jiraNumber.value){
        return alert('지라번호를 입력해주세요!');
    } else if (!jiraText.value) {
        return alert('설명을 입력해주세요!');
    }

    createBoard({
        number : jiraNumber.value
    });
}

// 버튼 클릭 이벤트
jiraButton.addEventListener('click', clickEvent);

// 엔터키 이벤트
jiraInput.addEventListener('keyup', function(e){
    if (e.keyCode === 13) {
        clickEvent();
    }
});

export default clickEvent; 