// Drag & Drop Event
// 드래그를 시작하면 발생하는 이벤트
function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;

    // 드래그하여 요소를 옮기기 위해 dataTransfer 개체를 사용한다.
    // 열의 순서를 다시 정렬할 수 있도록 드래그가 시작될 때 요소의 HTML을 저장합니다.
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

// 드래그를 끝내면 발생하는 이벤트
function handleDragEnd(e) {
    this.style.opacity = '1';

    cards.forEach(function(card) {
        card.classList.remove('over');
    });
}

// .card 요소가 닿으면 발생하는 이벤트(over클래스 토글)
function handleDragEnter(e) {
    this.classList.add('over');
}

// .card 요소가 떠나면 발생하는 이벤트
function handleDragLeave(e) {
    this.classList.remove('over');
}

// 이벤트 버블링을 막기 위해 e.stopPropagation()을 호출
function handleDrop(e) {
    e.stopPropagation();

    // 사용자가 드래그한 열과 동일한 열로 드롭하지 않는지 확인한다.
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

// 링크를 드래그할 경우 해당 링크로 이동하는 브라우저의 기본 동작을 방지해야한다.
// dragover 이벤트에서 e.preventDefault() 를 호출한다.
function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
}

export default {
    init : () => {
        let cards = document.querySelectorAll('.board .card');
        cards.forEach(function(card) {
            card.addEventListener('dragstart', handleDragStart);
            card.addEventListener('dragover', handleDragOver);
            card.addEventListener('dragenter', handleDragEnter);
            card.addEventListener('dragleave', handleDragLeave);
            card.addEventListener('dragend', handleDragEnd);
            card.addEventListener('drop', handleDrop);
        });
    }
}