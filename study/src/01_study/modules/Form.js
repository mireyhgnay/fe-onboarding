import Card from "./Card";

// todo 보드에 카드 생성하기
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

    // 이미 입력된 지라 번호인 경우
    // if(Card({number}) === jiraNumber.value) {
    //     return alert('똑같은 지라 넘버가 있습니다.');
    // }

    // input value 받아와 카드 생성
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
        const jiraInput = document.querySelector('.jira_input');

        // 버튼 클릭 이벤트
        jiraButton.addEventListener('click', clickEvent);

        // 엔터키 이벤트
        jiraInput.addEventListener('keyup', function(e){
            if (e.keyCode === 13) {
                clickEvent();
            }
        });
    },

    // 이미 생성되어 있는 카드
    create : () => {
        createCard({ number: 3108, desc: '[레거시 서비스 코드 개선] 카테고리 딜리스트 PC' });
        createCard({ number: 3525, desc: '[개선][딜상세] 앱 딜 상세 공유하기 팝업에서 페이스북 빼기' });
    },
}; 