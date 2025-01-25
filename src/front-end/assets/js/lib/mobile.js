{
    const MenuAtivo = document.querySelectorAll('header .container .main-header .menu-mobile .btn-mobile');

    const FecharMenu = document.querySelectorAll('header .container .mobile-open .fechar');
    
    function openMenuCard() {
        document.documentElement.querySelector('.mobile-open').classList.add('active')
    }
    MenuAtivo.forEach(open => {
        open.addEventListener('click', openMenuCard)
        console.log('teste');
    })

    function closeMenuCard() {
        document.documentElement.querySelector('.mobile-open').classList.remove('active');
    }
    FecharMenu.forEach(close => {
        close.addEventListener('click', closeMenuCard)
    })

}