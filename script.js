'Use strict';

//Funktion til visning af header og footer
function populateHeaderAndFooter () {

    //Henter alle globale navigations-diver - Header og burger
    const globalNav = document.querySelectorAll('.header-nav');

    //Class til header-links
    class GlobalNavLink {
        constructor(name, href) {
            this._name = name;
            this._href = href;
        }

        get name() {
            return this._name;
        }
        get href() {
            return this._href;
        }
    }

    //Object med global-nav links
    const globalNavLinks = {
        cases: new GlobalNavLink ('Cases', 'cases.html'),
        omMig: new GlobalNavLink ('Om mig', 'ommig.html'),
        kontakt: new GlobalNavLink ('Kontakt', 'kontakt.html'),
    }

    const globalNavLinksArray = Object.keys(globalNavLinks);

    //Opretter a-tag for hver link i alle nav-diver
    globalNav.forEach((nav) => {
        
        globalNavLinksArray.forEach((index) => {
            const globalNavLink = document.createElement('a');
            globalNavLink.innerHTML = globalNavLinks[index].name;
            globalNavLink.href = globalNavLinks[index].href;
            nav.appendChild(globalNavLink);
        })

    })
}
populateHeaderAndFooter();

//Funktion til burgermenu toggle
function toggleBurgerMenu () {

    const burgerMenuIkon = document.getElementById('hamburger-ikon');
    const burgerNav = document.getElementById('burger-nav');

    burgerNav.style.display = 'none';

    burgerMenuIkon.addEventListener('click', function () {
        if (burgerNav.style.display === 'none') {
            burgerNav.style.display = 'flex';
            burgerMenuIkon.src = 'ikoner/hamburger-kryds-ikon.svg'
        } else {
            burgerNav.style.display = 'none';
            burgerMenuIkon.src = 'ikoner/hamburgermenu-ikon.svg'
        }
    })

}
toggleBurgerMenu();

//Portfolio details class
class Portfolio {
    constructor(name, birthdate, address, contactInfo, occupation, bio, skills, projects) {
        this._name = name;
        this._birthdate = birthdate;
        this._address = address;
        this._contactInfo = contactInfo;
        this._occupation = occupation;
        this._bio = bio;
        this._skills = skills;
        this._projects = projects;
    }

    get name() {
        return this._name;
    }
    get birthdate() {
        return this._birthdate;
    }
    get address() {
        return this._address;
    }
    get contactInfo() {
        return this._contactInfo;
    }
    get occupation() {
        return this._occupation;
    }
    get bio() {
        return this._bio;
    }
    get skills() {
        return this._skills;
    }
    get projects() {
        return this._projects;
    }
}

const developers = {
    andersDamsgaard: new Portfolio (
        'Anders Damsgaard',
        '02/10/1995',
        'Oslogade 2 st tv, Aarhus N',
        ['Telefon: +45 93964789', 'E-mail: andersdamsgaard95@gmail.com'],
        'Front-end webudvikler (studerende)',
        'Bio... ',
        ['JavaScript', 'css/scss', 'html', 'UI', 'UX', 'WordPress', 'Figma'],
        [
            {
                title: 'Bookingportal af sommerhus på Fanø',
                client: 'Bjarne Rasmussen',
                description: 'Længere beskrivelse... Webdesign og -udvikling med html, scss og js af bookinghjemmeside til sommerhus på Fanø.',
                picture: 'img/fanø-billede.jpg'
            },
            {
                title: 'WordPress webdesign og rebranding af produktet FireFly',
                client: 'RealLife skoleprojekt udarbejdet for Gate3Aps',
                description: 'Længere beskrivelse... duiewesqw adoiwqjasnwq djiwqoskqwas dxwqopdjiwqjd xwqasdxwqand wqasdjxwqidjxwqas'
            }
        ]
    )
}

//Funktion til display af portefølje info
function showPortfolio(person) {

    const developer = developers[person];

    //Populate hero-tekst-container
    const heroTekstContainer = document.getElementById('hero-personlig-info');

    const nameElement = document.createElement('p');
    nameElement.innerHTML = developer.name;
    heroTekstContainer.appendChild(nameElement);

    const occupationElement = document.createElement('p');
    occupationElement.innerHTML = developer.occupation;
    heroTekstContainer.appendChild(occupationElement);

    const skillsElement = document.createElement('p');
    skillsElement.innerHTML = `Skills: ${developer.skills.join(', ')}`;
    heroTekstContainer.appendChild(skillsElement);

    //Display seneste cases på forside
    const latestsCasesArray = developer.projects.slice(0,2); //Slice projects-array til de 2 første

    const latestsCasesContainer = document.getElementById('seneste-cases-container');

    latestsCasesArray.forEach(project => {
        const projectWindow = document.createElement('div');
        projectWindow.classList.add('project');
        latestsCasesContainer.appendChild(projectWindow);

        const projectWindowText = document.createElement('div');
        projectWindowText.classList.add('project-window-text');
        projectWindow.appendChild(projectWindowText);

        const projectTitleP = document.createElement('p')
        projectTitleP.innerHTML = project.title;
        projectWindowText.appendChild(projectTitleP);

        const projectClient = document.createElement('p');
        projectClient.innerHTML = `Klient: ${project.client}`;
        projectWindowText.appendChild(projectClient);

        const projectDescription = document.createElement('p');
        projectDescription.innerHTML = project.description;
        projectWindowText.appendChild(projectDescription);
    })
}

showPortfolio('andersDamsgaard');