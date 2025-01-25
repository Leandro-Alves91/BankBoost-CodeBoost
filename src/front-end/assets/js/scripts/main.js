AOS.init({
    duration: 1250
}
);

{
    const MenuAtivo = document.querySelectorAll('.header .container .main-header .menu-mobile .btn-mobile');

    const FecharMenu = document.querySelectorAll('.header-mobile .main-active .icon-fechar');
    
    function openMenuCard() {
        document.documentElement.querySelector('.menu').classList.add('active')
    }
    MenuAtivo.forEach(open => {
        open.addEventListener('click', openMenuCard)
        console.log('teste');
    })

    function closeMenuCard() {
        document.documentElement.querySelector('.header-mobile').classList.remove('ativo');
    }
    FecharMenu.forEach(close => {
        close.addEventListener('click', closeMenuCard)
    })

}