// 지라 번호
const cardTitle = ({ number }) => {
    const cardTitle = document.createElement('strong');
    cardTitle.className = 'card_title';
    cardTitle.innerText = `TWORK-${number}`;
    return cardTitle;
}

// 지라 설명
const cardDesc = ({ desc }) => {
    const cardDesc = document.createElement('p');
    cardDesc.className = 'card_desc';
    cardDesc.innerText = desc;
    return cardDesc;
}

// Card 컴포넌트 설정
const Card = ({ number, desc }) => {
    const jiraDefaultLink = 'https://jira.tmon.co.kr/browse/TWORK';
    const link = document.createElement('a');
    link.href = `${jiraDefaultLink}-${number}`;
    link.className = 'card';
    link.target = '_blank';
    link.setAttribute('draggable', 'true');
    link.append(cardTitle({ number }), cardDesc({ desc }));
    return link;
}

export default Card; 