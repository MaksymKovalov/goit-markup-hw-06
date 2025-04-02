(() => {  
  const mobileMenu = document.querySelector('.js-menu-container');  
  const openMenuBtn = document.querySelector('.js-open-menu');  
  const closeMenuBtn = document.querySelector('.js-close-menu');  

  const toggleMenu = () => {  
    const isMenuOpen = mobileMenu.classList.contains('is-open');  
    mobileMenu.classList.toggle('is-open');  
    document.body.classList.toggle('no-scroll', !isMenuOpen);  
  };  

  openMenuBtn.addEventListener('click', toggleMenu);  
  closeMenuBtn.addEventListener('click', toggleMenu);  

  // Close the mobile menu on wider screens if the device orientation changes  
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {  
    if (e.matches) {  
      mobileMenu.classList.remove('is-open');  
      document.body.classList.remove('no-scroll');  
    }  
  });  
})();  