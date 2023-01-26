const jiraDefaultLink = 'https://jira.tmon.co.kr/browse/';

// 지라 보드 생성
const addBoard = (number) => {
    const link = document.createElement('a');
    link.href = `${jiraDefaultLink}TWORK-${number}`;
    link.setAttribute('class', 'card');
    link.target = 'blank';
    return link;
}

export default addBoard; 