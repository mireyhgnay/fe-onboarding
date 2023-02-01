const jiraDefaultLink = 'https://jira.tmon.co.kr/browse/TWORK';

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


/*
    Drag API - start & end
    draggable = true 속성이 있는 요소에는 dragstart 를 사용할 수 있다.
*/
const handleDragStart = e => {
    this.style.opacity = '0.4';
}

const handleDragEnd = e => {
    this.style.opacity = '1';

    const items = document.querySelector('.card.over');
    items.forEach(function (item) {
        item.classList.remove('over');
    });
}

const handleDragOver = e => {
    if (e.preventDefault) {
        e.preventDefault();
    }
    
    return false;
}

// Card 컴포넌트 설정
const Card = ({ number, desc }) => {
    const link = document.createElement('a');
    link.href = `${jiraDefaultLink}-${number}`;
    link.className = 'card';
    link.target = 'blank';
    link.setAttribute('draggable', 'true');
    link.append(cardTitle({ number }), cardDesc({ desc }));
    link.dragstart = handleDragStart;
    link.dragend = handleDragEnd;
    link.dragover = handleDragOver;
    return link;
}

export default Card; 