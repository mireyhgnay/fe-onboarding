import "./style.scss";

const jiraButton = document.querySelector('.jira_button');
const jiraInput = document.querySelector('.jira_input');

// 클릭 이벤트
const clickEvent = () => {
    const jiraInput = document.querySelector('.jira_input').value;
    const jiraLinkArea = document.querySelector('.jira_link_area');
    const jiraLinkOrigin = "https://jira.tmon.co.kr/browse/";

    // DOM 추가
    const jiraLinkTag = document.createElement('a');
    jiraLinkTag.setAttribute('class', 'jira_link');
    const jiraLink = document.querySelector('.jira_link');

    if(jiraLink) { // .jira_link 가 있는 경우, 링크 & 텍스트만 변경
        jiraLink.href = jiraLinkOrigin + jiraInput;
        jiraLink.innerHTML = jiraInput;
    } else { // .jira_link 가 없는 경우, 새로 돔 추가 및 생성
        jiraLinkTag.setAttribute('href', jiraLinkOrigin + jiraInput);
        jiraLinkTag.innerHTML = jiraInput;

        jiraLinkArea.appendChild(jiraLinkTag);
    }
}

// 버튼 이벤트
jiraButton.addEventListener('click', clickEvent);

// 엔터키 이벤트
jiraInput.addEventListener('keyup', function(e){
    if (e.keyCode === 13) {
        clickEvent();
    }
});