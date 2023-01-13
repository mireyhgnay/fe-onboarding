import "./style.scss";

const jiraButton = document.querySelector('.jira_button');
const jiraInput = document.querySelector('.jira_input');

// 클릭 이벤트
const clickEvent = () => {
    const jiraInput = document.querySelector('.jira_input').value;
    const jiraLinkArea = document.querySelector('.jira_link_area');
    const jiraLinkOrigin = "https://jira.tmon.co.kr/browse/";

    // DOM 추가
    const jiraLink = document.createElement('a'); 

    // DOM 속성 지정
    jiraLink.setAttribute('class', 'jira_link'); // 클래스명 설정
    jiraLink.setAttribute('href', jiraLinkOrigin + jiraInput); // 링크 설정
    jiraLink.innerHTML = jiraInput;

    // 기존 돔 안에 생성된 a태그 추가
    jiraLinkArea.appendChild(jiraLink);

    // 지라링크 재활용
    const replaceLink = document.querySelector('.jira_link'); 
    replaceLink.parentNode.replaceChild(jiraLink, replaceLink);
}

// 버튼 이벤트
jiraButton.addEventListener('click', clickEvent);

// 엔터키 이벤트
jiraInput.addEventListener('keyup', function(e){
    if (e.keyCode === 13) {
        clickEvent();
    }
});