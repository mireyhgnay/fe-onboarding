import Card from "./Card";

// 카드 생성하기
const createCard = ({ number, desc }) => {
    const todoBoard = document.querySelector('.board.todo');
    todoBoard.append(Card({ number, desc }));
}

// Form 클릭 이벤트
const clickEvent = () => {
    const jiraNumber = document.getElementById('number');
    const jiraText = document.getElementById('text');

    // input 값을 입력하지 않았을 때
    if(!jiraNumber.value){
        return alert('지라번호를 입력해주세요!');
    } else if (!jiraText.value) {
        return alert('설명을 입력해주세요!');
    }

    // 지라번호 input값 number로 받아오기
    createCard({
        number : jiraNumber.value,
        desc : jiraText.value,
    });

    // input 값 초기화
    jiraNumber.value = '';
    jiraText.value = '';
}

export default {
    init : () => {
        const jiraButton = document.querySelector('.jira_button');
        jiraButton.addEventListener('click', clickEvent);
    }
}; 