function handleDragEnter() {
    this.classList.add('over');
  }
  
  function handleDragLeave() {
    this.classList.remove('over');
  }
  
  function handleDragOver(e) {
    e.preventDefault();
  }

export default {
    init : () => {
        let cards = document.querySelector('.card');
        cards.forEach(function(card) {
            card.addEventListener('dragenter', handleDragEnter);
            card.addEventListener('dragleave', handleDragLeave);
            card.addEventListener('dragover', handleDragOver);
        });
    }
}