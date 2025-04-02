(() => {  
  const refs = {  
    openModalBtn: document.querySelector("[data-modal-open]"),  
    closeModalBtn: document.querySelector("[data-modal-close]"),  
    modal: document.querySelector("[data-modal]"),  
  };  

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) return;  

  refs.openModalBtn.addEventListener("click", toggleModal);  
  refs.closeModalBtn.addEventListener("click", toggleModal);  
  refs.modal.addEventListener("click", handleBackdropClick);  

  function toggleModal() {  
    refs.modal.classList.toggle("is-hidden");  
    document.body.classList.toggle("no-scroll");  
  }  

  function handleBackdropClick(event) {  
    if (event.target === event.currentTarget) {  
      toggleModal();  
    }  
  }  
})();  