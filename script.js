'Use strict';

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

//Funktion til visning af header og footer
function populateHeaderAndFooter () {

    //Class til header-links
    class GlobalNavLink {
        constructor(name, href, dataId) {
            this._name = name;
            this._href = href;
            this._dataId = dataId;
        }

        get name() {
            return this._name;
        }
        get href() {
            return this._href;
        }
        get dataId() {
            return this._dataId
        }
    }

    //Object med global-nav links
    const globalNavLinks = {
        cases: new GlobalNavLink ('Cases', 'cases.html', 'cases-side'),
        omMig: new GlobalNavLink ('Om mig', 'ommig.html', 'om-side'),
        kontakt: new GlobalNavLink ('Kontakt', 'kontakt.html', 'kontakt-side'),
    }
    const globalNavLinksArray = Object.keys(globalNavLinks);

    //Henter alle globale navigations-diver - Header og burger
    const globalNav = document.querySelectorAll('.header-nav');

    //Opretter a-tag for hver link i alle nav-diver
    globalNav.forEach((nav) => {
        
        globalNavLinksArray.forEach((index) => {
            const globalNavLink = document.createElement('a');
            globalNavLink.innerHTML = globalNavLinks[index].name;
            globalNavLink.href = globalNavLinks[index].href;

            if (globalNavLinks[index].dataId === document.body.id) {
                globalNavLink.classList.add('active-link')
            }

            nav.appendChild(globalNavLink);
        })
    })

    toggleBurgerMenu();

    //Footer
    const footerObject = {
        headings: ['Kontakt', 'Relavante dokumenter'],
        links: [
            {
                text: 'CV (Webudvikler)',
                href: ''
            },
            {
                text: 'CV (Gastronomi)',
                href: 'dokumenter/CV-AndersDamsgaard-hospo.pdf'
            }
        ]
    }

    const footerContainer = document.getElementById('footer-container');

        const footerKontaktColumn = document.createElement('div');
        footerKontaktColumn.classList.add('footer-column');
        footerContainer.appendChild(footerKontaktColumn);

        const footerRelavanteDokumenterColumn = document.createElement('div');
        footerRelavanteDokumenterColumn.classList.add('footer-column');
        footerContainer.appendChild(footerRelavanteDokumenterColumn);

        const footerColumns = document.querySelectorAll('.footer-column');
            footerColumns.forEach( (column, index) => {
                const footerHeading = document.createElement('h3');
                footerHeading.innerHTML = footerObject.headings[index];
                column.appendChild(footerHeading); 
            })

        const footerKontaktFlex = document.createElement('div');
        footerKontaktColumn.appendChild(footerKontaktFlex);

        developers.andersDamsgaard._contactInfo.forEach( (element) => {
            const contactElement = document.createElement('p');
            contactElement.innerHTML = element;
            footerKontaktFlex.appendChild(contactElement);
        })

        const footerLinksFlex = document.createElement('div');
        footerRelavanteDokumenterColumn.appendChild(footerLinksFlex);
        footerObject.links.forEach( (link) => {
            const footerDocument = document.createElement('a');
            footerDocument.innerHTML = link.text;
            footerDocument.href = link.href;
            footerDocument.target = '_blank';
            footerLinksFlex.appendChild(footerDocument);
        })        
}

//Portfolio class
class Portfolio {
    constructor(name, birthdate, address, contactInfo, occupation, bio, skills, projects, portray) {
        this._name = name;
        this._birthdate = birthdate;
        this._address = address;
        this._contactInfo = contactInfo;
        this._occupation = occupation;
        this._bio = bio;
        this._skills = skills;
        this._projects = projects;
        this._portray = portray;
    }

    renderPortfolioInfoFrontPage() {
        const heroPersonligInfo = document.getElementById('hero-personlig-info');

        const nameElement = document.createElement('p');
        nameElement.innerHTML = this._name;
        heroPersonligInfo.appendChild(nameElement);

        const occupationElement = document.createElement('p');
        occupationElement.innerHTML = this._occupation;
        heroPersonligInfo.appendChild(occupationElement);

        const skillsElement = document.createElement('p');
        skillsElement.innerHTML = `Skills: ${this._skills.join(', ')}`;
        heroPersonligInfo.appendChild(skillsElement);

        //Display seneste cases på forside
        const latestsCasesArray = this._projects.slice(0,2); //Slice projects-array til de 2 første

        const latestsCasesContainer = document.getElementById('seneste-cases-container');

        displayCases(latestsCasesArray, latestsCasesContainer);
    }

    renderPortfolioInfoAboutPage() {

        const omMigHeroTekstBoks = document.getElementById('om-hero-tekst-boks');

        const bioElement = document.createElement('p');
        bioElement.innerHTML = this._bio;
        omMigHeroTekstBoks.appendChild(bioElement);
    }

    renderPortfolioInfoCasesPage() {

        //Udfyld forfatter af cases
        const casesHeroHeadingBoks = document.getElementById('cases-hero-heading');
        const casesAuthor = document.createElement('div');
        casesAuthor.id = 'cases-author';
        casesHeroHeadingBoks.appendChild(casesAuthor);

        const portrayContainer = document.createElement('div');
        portrayContainer.id = 'portræt-img-container';
        casesAuthor.appendChild(portrayContainer);
        
        const portray = document.createElement('img');
        portray.src = this._portray;
        portrayContainer.appendChild(portray);
        
        const casesBy = document.createElement('p');
        casesBy.innerHTML = `af ${this._name}`;
        casesAuthor.appendChild(casesBy);

        //Display alle cases
        const allCasesContainer = document.getElementById('alle-cases-container');
        
        displayCases(this._projects, allCasesContainer); 
    }

    renderPortfolioInfoContactPage() {

        //Portray picture
        const contactImgContainer = document.getElementById('kontakt-img-container');
        const portrayImg = document.createElement('img');
        portrayImg.src = this._portray;
        contactImgContainer.appendChild(portrayImg);

        //Contact info
        const contactInfoTextBox = document.getElementById('kontakt-tekst-boks');

        const contactInfoDiv = document.createElement('div');
        contactInfoDiv.id = 'contact-info';
        contactInfoTextBox.appendChild(contactInfoDiv);

        this._contactInfo.forEach( (element) => {
            const contactElement = document.createElement('p');
            contactElement.innerHTML = element;
            contactInfoDiv.appendChild(contactElement);
        })

        const addressElement = document.createElement('p');
        addressElement.innerHTML = `Adresse: ${this._address}`; 
        contactInfoDiv.appendChild(addressElement);
    }
}

function displayCases(array, container) {
    array.forEach( (project) => {
        const projectWindow = document.createElement('div');
        projectWindow.classList.add('project');
        container.appendChild(projectWindow);

        const projectWindowImgContainer = document.createElement('div');
        projectWindowImgContainer.classList.add('project-img-container');
        projectWindow.appendChild(projectWindowImgContainer);
        const projectImg = document.createElement('img');
        projectImg.src = project.picture;
        projectWindowImgContainer.appendChild(projectImg);

        const projectWindowText = document.createElement('a');
        projectWindowText.classList.add('project-window-text');
        projectWindowText.href = project.href;
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

const developers = {
    andersDamsgaard: new Portfolio (
        'Anders Damsgaard',
        '02/10/1995',
        'Oslogade 2 st tv, Aarhus N',
        ['Telefon: +45 93964789', 'E-mail: andersdamsgaard95@gmail.com'],
        'Front-end webudvikler (studerende)',
        'Bio hnjwsndjwnsjqnjdbnwqja',
        ['JavaScript', 'css/scss', 'html', 'UI', 'UX', 'WordPress', 'Figma'],
        [
            {
                title: 'Bookingportal af sommerhus på Fanø',
                client: 'Bjarne Rasmussen',
                description: 'Længere beskrivelse... Webdesign og -udvikling med html, scss og js af bookinghjemmeside til sommerhus på Fanø. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur officiis repudiandae autem minus natus. Quae neque ratione corporis laudantium odio corrupti facere harum, dolorum repudiandae aut sapiente, quos illo, eum fugiat tempora vel facilis enim voluptate delectus accusantium adipisci? Similique voluptates, provident necessitatibus consequatur aperiam delectus impedit blanditiis illo. Fanø.',
                picture: "img/projekt-billeder/fanø-page-picture1.jpg",
                href: 'projectpagefano.html'
            },
            {
                title: 'WordPress webdesign or rebranding af FireFly',
                client: 'RealLife skoleprojekt udarbejdet for Gate3Aps',
                description: 'Længere beskrivelse... duiewesqw adoiwqjasnwq djiwqoskqwas dxwqopdjiwqjd xwqasdxwqand wqasdjxwqidjxwqas',
                picture: 'img/projekt-billeder/woodwatch.jpg',
                href: 'projectPageWoodWatch.html'
            },
            {
                title: 'DreamShot',
                client: 'Projektopgave på IBA',
                description: 'Længere beskrivelse... Webdesign og -udvikling med html, scss og js af bookinghjemmeside til sommerhus på Fanø. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur officiis repudiandae autem minus natus. Quae neque ratione corporis laudantium odio corrupti facere harum, dolorum repudiandae aut sapiente, quos illo, eum fugiat tempora vel facilis enim voluptate delectus accusantium adipisci? Similique voluptates, provident necessitatibus consequatur aperiam delectus impedit blanditiis illo. Fanø.',
                picture: 'img/projekt-billeder/dreamshot-page-picture1.png',
                href: 'dreamShotProjectPage.html'
            },
            {
                title: 'Datasikkerhed',
                client: 'Projektopgave på IBA',
                description: 'Længere beskrivelse',
                picture: 'img/projekt-billeder/datasikkerhed-page-picture1.jpg',
                href: 'datasikkerhedProjectPage.html'
            },
            {
                title: 'Verninge',
                client: 'Reallife projektopgave for Verninge Borgerforening',
                description: 'Længere beskrivelse',
                picture: 'img/projekt-billeder/verninge-page-picture1.png',
                href: 'verningeProjectPage.html'
            }
        ],
        'img/anders_portræt.jpg'
    )
}

//Parrent Page Class
class Page {
    constructor ({headings, descriptions, cta}) {
        this._headings = headings;
        this._descriptions = descriptions;
        this._cta = cta;
    }

    //Error Message
    renderPage() {
        const header = document.querySelector('header');
        const main = document.querySelector('main');
        const footer = document.querySelector('footer');
        header.innerHTML = '';
        main.innerHTML = '';
        footer.innerHTML = '';
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = 'HOV, der skete vidst en fejl!';
        errorMessage.style.fontSize = '1.5em';
        errorMessage.style.textAlign = 'center';
        main.appendChild(errorMessage);
    }
}

//Front Page Child Class
class FrontPage extends Page {
    constructor({headings, descriptions, cta}) {
        super({headings, descriptions, cta});
    }

    renderPage() {
        //Getting hero container
        const heroTekstContainer = document.getElementById('hero-tekst-container');
            //h1
            const h1 = document.createElement('h1');
            h1.innerHTML = this._headings[0];
            heroTekstContainer.insertBefore(h1, heroTekstContainer.firstChild);
            //CTA1
            const cta1 = document.createElement('a');
            cta1.innerHTML = this._cta[0].text;
            cta1.href = this._cta[0].href;
            heroTekstContainer.appendChild(cta1);

        //Getting cases container
        const senesteCasesSection = document.getElementById('seneste-cases');
            //Heading
            const h2 = document.createElement('h2');
            h2.innerHTML = this._headings[1];
            senesteCasesSection.insertBefore(h2, senesteCasesSection.firstChild);
            //CTA
            const cta2 = document.createElement('a');
            cta2.innerHTML = this._cta[0].text;
            cta2.href = this._cta[0].href;
            senesteCasesSection.appendChild(cta2);
        
        //Getting text box2
        const textbox2 = document.getElementById('om-mig-forside-tekst-boks');
            //Heading
            const h3 = document.createElement('h2');
            h3.innerHTML = this._headings[2];
            textbox2.appendChild(h3);
            //Description
            const description1 = document.createElement('p');
            description1.innerHTML = this._descriptions[0];
            textbox2.appendChild(description1);
            //CTA
            const cta3 = document.createElement('a');
            cta3.innerHTML = this._cta[1].text;
            cta3.href = this._cta[1].href;
            textbox2.appendChild(cta3);

        //Getting text box3
        const textbox3 = document.getElementById('kontakt-forside-tekst-boks')
            //Heading
            const h4 = document.createElement('h2');
            h4.innerHTML = this._headings[3];
            textbox3.appendChild(h4);
            //CTA
            const cta4 = document.createElement('a');
            cta4.innerHTML = this._cta[2].text;
            cta4.href = this._cta[2].href;
            textbox3.appendChild(cta4);
    }   
}

//CASES PAGE CHILD CLASS
class CasesPage extends Page {
    constructor({headings, descriptions, cta}) {
        super({headings, descriptions, cta});
    }

    renderPage() {
        //Getting heading container
        const headingContainer = document.getElementById('cases-hero-heading');
            //Heading
            const h1 = document.createElement('h1');
            h1.innerHTML = this._headings[0];
            headingContainer.insertBefore(h1, headingContainer.firstChild);
        //Getting Text Box    
        const textBox1 = document.getElementById('cases-hero-tekst-boks');
            //Description
            const description1 = document.createElement('p');
            description1.innerHTML = this._descriptions;
            textBox1.appendChild(description1);
        //Getting text box 2
        const textBox2 = document.getElementById('cases-kontakt-tekst-boks');
            //Heading
            const h2 = document.createElement('h2');
            h2.innerHTML = this._headings[1];
            textBox2.appendChild(h2);
            //CTA
            const cta1 = document.createElement('a');
            cta1.innerHTML = this._cta[0].text;
            cta1.href = this._cta[0].href;
            textBox2.appendChild(cta1);
    }
}

class AboutPage extends Page {
    constructor({headings, descriptions, cta}) {
        super({headings, descriptions, cta});
    }

    renderPage() {
        //  GETTING TEXT BOXES
        const textBox1 = document.getElementById('om-hero-tekst-boks');
        const textBox2 = document.getElementById('fritid-tekst-boks');
        const textBox3 = document.getElementById('hospo-tekst-boks');
        const textBox4 = document.getElementById('konklussion-om-tekst');
        const textBox5 = document.getElementById('kontakt-om-side-tekst-boks');

        //  BOX 1
            //  HEADING
            const h1 = document.createElement('h1');
            h1.innerHTML = this._headings[0];
            textBox1.insertBefore(h1, textBox1.firstChild);

        //  BOX 2
            //  HEADING
            const h2 = document.createElement('h2');
            h2.innerHTML = this._headings[1];
            textBox2.appendChild(h2);
            //  DESCRIPTION
            const description1 = document.createElement('p');
            description1.innerHTML = this._descriptions[0];
            textBox2.appendChild(description1);
        // BOX 3
            //  HEADING
            const h3 = document.createElement('h2');
            h3.innerHTML = this._headings[2];
            textBox3.appendChild(h3);    
            //  DESCRIPTION
            const description2 = document.createElement('p');
            description2.innerHTML = this._descriptions[1];
            textBox3.appendChild(description2);
        // BOX 4
            //  HEADING
            const h4 = document.createElement('h2');
            h4.innerHTML = this._headings[3];
            textBox4.appendChild(h4);
            //  DESCRIPTION
            const description3 = document.createElement('p');
            description3.innerHTML = this._descriptions[2];
            textBox4.appendChild(description3);
        //  BOX 5
            // HEADING
            const h5 = document.createElement('h2');
            h5.innerHTML = this._headings[4];
            textBox5.appendChild(h5);
            //  CTA
            const cta1 = document.createElement('a');
            cta1.innerHTML = this._cta[0].text;
            cta1.href = this._cta[0].href;
            textBox5.appendChild(cta1);
    }
}

class ContactPage extends Page {
    constructor({headings}) {
        super({headings});
    }

    renderPage() {
        //  GETTING HERO BOX
        const heroBox = document.getElementById('kontakt-tekst-boks');
            // HEADING
            const h1 = document.createElement('h1');
            h1.innerHTML = this._headings[0];
            heroBox.insertBefore(h1, heroBox.firstChild);
    }
}

//Pages Instances
const pages = {
    frontPage: new FrontPage ({
        headings: [
            'Portefølje',
            'Seneste Cases',
            'Jeg har aldrig brudt mig om ferier',
            'Jeg forstår ikke, hvorfor I ikke har ringet endnu'
        ],
        descriptions: [
            'Jeg bestræber mig altid på at få en hverdag, jeg ikke har lyst til en ferie fra.'
        ],
        cta: [
                {
                    text: 'Se alle Cases',
                    href: 'cases.html'
                },
                {
                    text: 'Om mig',
                    href: 'ommig.html'
                },
                {
                    text: 'Kontakt mig',
                    href: 'kontakt.html'
                }
        ]
    }),
    casesPage: new CasesPage ({
        headings: [
            'Cases',
            'Jeg kan sagtens lave flere'
        ],
        descriptions: 
            'Alle cases er udarbejdet af Anders Damsgaard som individuelt eller gruppeprojekt. <br> Der er en del forskel fra projekt til projekt, både i indhold og i kvalitet. Dette skyldes at der i skoleprojekter bliver stillet forskellige krav til forskellige projekter. Det betyder at fokus er forskellig fra projekt til projekt. Fx er der i nogle projekter højere fokus på det æstetiske og i andre på det tekniske. Desuden er generel kodning blevet lært sideløbende med udarbejdelsen af projekter, hvilket betyder at den tekniske kunnen har været mindre og mindre jo ældre projekterne er.',
        cta: [
            {
                text: 'Ansæt mig',
                href: 'kontakt.html'
            }
        ]
    }),
    aboutPage: new AboutPage ({
        headings: [
            'Jeg har boet og arbejdet i 8 forskellige lande de sidste 8 år',
            'Fritid overskrift',
            'Arbejdserfaring Overskrift',
            'Nu overskrift',
            'Ring nu bare'
        ],
        descriptions: [
            'Beskrivelse 1',
            'Beskrivelse 2',
            'beskrivelse 3'
        ],
        cta: [
            {
                text: 'Kontakt mig',
                href: 'kontakt.html'
            }
        ]
    }),
    contactPage: new ContactPage ({
        headings: [
            'Kontakt'
        ]
    })
}

//Project page class
class ProjectPage {
    constructor(projectName, heading1, heading2, heading3, heading4, description1, description2, skillsUsed, picture1, picture2, link) {
        this._projectName = projectName;
        this._heading1 = heading1;
        this._heading2 = heading2;
        this._heading3 = heading3;
        this._heading4 = heading4;
        this._description1 = description1;
        this._description2 = description2;
        this._skillsUsed = skillsUsed;
        this._picture1 = picture1;
        this._picture2 = picture2;
        this._link = link;
    }

    createPage() {
        return `
        <nav class="ygrid">
            <div id="brødkrummesti" class="content">
                <a href="cases.html">Cases</a> / <p>${this._projectName}</p>
            </div>
        </nav>

        <section class="ygrid">
            <div id="project-page-section" class="content">
                <h1>${this._heading1}</h1>
                <div class="project-page-img-container">
                    <img src="${this._picture1}">
                </div>
                <div class="project-page-text-box">
                    <h2>${this._heading2}</h2>
                    <p>${this._description1}</p>
                </div>
                <div class="project-page-img-container">
                    <img src="${this._picture2}">
                </div>
                <div class="project-page-text-box">
                    <h2>${this._heading3}</h2>
                    <p>${this._description2}</p>
                </div>
                <div id="project-page-skills">
                    <h2>${this._heading4}</h2>
                    <div id="skills-used-grid"></div>
                </div>
                <div id="project-link-container">
                    <a href="${this._link}" target="_blank">Besøg hjemmeside</a>
                </div>  
            </div>
        </section>
        `
    }

    renderProductPage() {
        
        const productPageMain = document.querySelector('main');
    
        productPageMain.innerHTML = this.createPage();
    
        const skillsUsedGrid = document.getElementById('skills-used-grid');
    
        this._skillsUsed.forEach( (skill) => {
            const skillP = document.createElement('p');
            skillP.innerHTML = skill;
            skillsUsedGrid.appendChild(skillP);
        })
        
    }
}

const projectPages = {
    projectPageFano: new ProjectPage (
        'Fanø Sommerhus Bookingportal',
        'Fanø',
        'Fanø2',
        'Fanø3',
        'Færdigheder brugt:',
        'beskrivelse 1 fanø',
        'beskrivelse2 fanø',
        ['JavaScript', 'HTML', 'SCSS', 'Figma', 'UI', 'UX'],
        "img/projekt-billeder/fanø-page-picture2.png",
        "img/projekt-billeder/fanø-page-picture3.png",
        'https://www.fanø-sommerhus.dk'
    ),
    projectPageWoodWatch: new ProjectPage (
        'WoodWatch brød',
        'WoodWatch1',
        'WoodWatch2',
        'WoodWatch3',
        'Færdigheder brugt:',
        'beskrivelse 1 woodwatch',
        'beskrivelse 2 woodwatch',
        ['WordPress', 'CSS', 'Figma', 'UI', 'UX'],
        'img/projekt-billeder/woodwatch-page-picture2.png',
        'img/projekt-billeder/woodwatch-page-picture3.png',
        'https://mothasmilk.com/woodwatch/'
    ),
    projectPageDreamShot: new ProjectPage (
        'DreamShot brød',
        'DreamShot1',
        'DreamShot2',
        'DreamShot3',
        'Færdigheder brugt:',
        'beskrivelse 1 DreamShot',
        'beskrivelse 2 DreamShot',
        ['SCSS', 'HTML', 'Figma', 'UI', 'UX'],
        'img/projekt-billeder/dreamshot-page-picture2.png',
        'img/projekt-billeder/dreamshot-page-picture3.png',
        'https://mothasmilk.com/dreamshot-media/'
    ),
    projectPageDatasikkerhed: new ProjectPage (
        'Datasikkerhed brød',
        'Datasikkerhed1',
        'Datasikkerhed2',
        'Datasikkerhed3',
        'Færdigheder brugt:',
        'beskrivelse 1 Datasikkerhed',
        'beskrivelse 2 Datasikkerhed',
        ['JavaScript', 'SCSS', 'HTML', 'Figma', 'UX'],
        'img/projekt-billeder/datasikkerhed-page-picture2.png',
        'img/projekt-billeder/datasikkerhed-page-picture3.png',
        'https://mothasmilk.com/DatasikkerhedRepo/'
    ),
    projectPageVerninge: new ProjectPage (
        'Verninge-brød',
        'Verninge1',
        'Verninge2',
        'Verninge3',
        'Færdigheder brugt:',
        'beskrivelse 1 Verninge',
        'beskrivelse 2 Verninge',
        ['CSS', 'HTML', 'Figma', 'UI', 'UX'],
        'img/projekt-billeder/verninge-page-picture2.png',
        'img/projekt-billeder/verninge-page-picture3.png',
        'https://mothasmilk.com/verninge-og-omegn/'
    )
}

//Render pages
populateHeaderAndFooter();
switch(document.body.id) {
    case 'forside':
        developers.andersDamsgaard.renderPortfolioInfoFrontPage();
        pages.frontPage.renderPage();
        break;
    case 'om-side':
        developers.andersDamsgaard.renderPortfolioInfoAboutPage();
        pages.aboutPage.renderPage();
        break;
    case 'cases-side':
        developers.andersDamsgaard.renderPortfolioInfoCasesPage();
        pages.casesPage.renderPage();
        break;
    case 'kontakt-side':
        developers.andersDamsgaard.renderPortfolioInfoContactPage();
        pages.contactPage.renderPage();
        break;
    case 'fanø-project':
        projectPages.projectPageFano.renderProductPage();
        break;
    case 'woodwatch-project-page':
        projectPages.projectPageWoodWatch.renderProductPage();
        break;
    case 'dreamshot-project-page':
        projectPages.projectPageDreamShot.renderProductPage();
        break;
    case 'datasikkerhed-project-page':
        projectPages.projectPageDatasikkerhed.renderProductPage();
        break;
    case 'verninge-project-page':
        projectPages.projectPageVerninge.renderProductPage();
        break;
}
 
