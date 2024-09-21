'Use strict';

//Funktion til visning af header og footer
function populateHeaderAndFooter () {

    //Henter alle globale navigations-diver
    const globalNav = document.querySelectorAll('.header-nav');

    //Header links
    const globalNavLinks = ['Cases', 'Om mig', 'Kontakt'];

    //hrefs for links
    const globalNavHrefs = ['cases.html', 'ommig.html', 'kontakt.html'];

    //Opretter a-tag for hver link i alle nav-diver
    globalNav.forEach((nav) => {
        
        globalNavLinks.forEach((link, index) => {
            const globalNavLink = document.createElement('a');
            globalNavLink.innerHTML = link;
            globalNavLink.href = globalNavHrefs[index]
            nav.appendChild(globalNavLink);
        })

    })
}

populateHeaderAndFooter();

//Funktion til toggle burgermenu
function toggleBurgerMenu () {

    const burgerMenuIkon = document.getElementById('hamburger-ikon');
    const burgerNav = document.getElementById('burger-nav');

    burgerNav.style.display = 'none';

    burgerMenuIkon.addEventListener('click', function () {
        if (burgerNav.style.display === 'none') {
            burgerNav.style.display = 'flex';
        } else {
            burgerNav.style.display = 'none';
        }
    })

}

toggleBurgerMenu();