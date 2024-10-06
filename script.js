'Use strict';

//  PORTFOLIO INFO CLASS
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

        //  Display seneste cases på forside
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

        //  Udfyld forfatter af cases
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

        //  Display alle cases
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

//  MULTIMEDIEDESIGNERE
const developers = {
    andersDamsgaard: new Portfolio (
        'Anders Damsgaard',
        '02/10/1995',
        'Oslogade 2 st tv, Aarhus N',
        ['Telefon: +45 93964789', 'E-mail: andersdamsgaard95@gmail.com'],
        'Front-end webudvikler (studerende)',
        'I 2016 fløj jeg til Malta for at slippe væk fra kedelige Danmark og opleve en form for eventyr. Planen var at ikke have nogen plan, og se hvor vinden ville føre mig hen. Vinden førte mig de følgende 8 år fra Malta til Australien, New Zealand, Østrig, Spanien, Frankrig, Portugal, Sri Lanka, Indonesien plus alt det løse. <br> Nu er jeg omsider vendt hjem for en stund for at tage min uddannelse seriøst og finde en ordentlig praktikplads.',
        ['JavaScript', 'CSS/SCSS', 'HTML', 'UI', 'UX', 'WordPress', 'Figma'],
        [
            {
                title: 'Bookingportal af sommerhus på Fanø',
                client: 'Bjarne Rasmussen',
                description: 'Hjemmesiden fremviser sommerhuset på elegant og troværdig vis og indeholder en brugervenlig bookingportal',
                picture: "img/projekt-billeder/fanø-page-picture1.jpg",
                href: 'projectpagefano.html'
            },
            {
                title: 'WordPress webdesign og rebranding af FireFly',
                client: 'RealLife projektopgave udarbejdet for Gate3Aps',
                description: 'Rebranding af produktet FireFly og udvikling af WordPress webdesign til showcasing og salg af produktet.',
                picture: 'img/projekt-billeder/woodwatch.jpg',
                href: 'projectPageWoodWatch.html'
            },
            {
                title: 'DreamShot multimediebureau',
                client: 'Projektopgave på IBA',
                description: 'Målrettet markedsføringskampagne af fiktivt multimediebureau, DreamShot, med dertilhørende hjemmeside.',
                picture: 'img/projekt-billeder/dreamshot-page-picture1.png',
                href: 'dreamShotProjectPage.html'
            },
            {
                title: 'Infoside vedr. overvågning på sociale medier ',
                client: 'Projektopgave på IBA',
                description: 'Udarbejdelse af hjemmeside til information om overvågning på sociale medier, med fokus på forgrenede scenarier ved brug af JavaScript.',
                picture: 'img/projekt-billeder/datasikkerhed-page-picture1.jpg',
                href: 'datasikkerhedProjectPage.html'
            },
            {
                title: 'Verninge Borgerforenings nye hjemmeside',
                client: 'RealLife projektopgave udarbejdet for Verninge Borgerforening',
                description: 'Målgruppe segmentering og udarbejdelse af hjemmeside for Verninge Borgerforening.',
                picture: 'img/projekt-billeder/verninge-page-picture1.png',
                href: 'verningeProjectPage.html'
            }
        ],
        'img/anders_portræt.jpg'
    )
}

//  PARRENT PAGE CLASS
class Page {
    constructor ({headings, descriptions, cta, images}) {
        this._headings = headings;
        this._descriptions = descriptions;
        this._cta = cta;
        this._images = images;
    }

    //  ERROR MESSAGE
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

    createImages () {
        //  IMAGES
        const imgContainers = document.querySelectorAll('.img-container');
            //  CREATE IMG FOR EACH CONTAINER
                imgContainers.forEach( (container, index) => {
                    const img = document.createElement('img');
                    img.src = this._images[index];
                    container.appendChild(img);
                })
    }
}

//  FRONT PAGE CHILD CLASS
class FrontPage extends Page {
    constructor({headings, descriptions, cta, images}) {
        super({headings, descriptions, cta, images});
    }

    renderPage() {
        //  GETTING HERO CONTAINER
        const heroTekstContainer = document.getElementById('hero-tekst-container');
            //  H1
            const h1 = document.createElement('h1');
            h1.innerHTML = this._headings[0];
            heroTekstContainer.insertBefore(h1, heroTekstContainer.firstChild);
            //  CTA1
            const cta1 = document.createElement('a');
            cta1.innerHTML = this._cta[0].text;
            cta1.href = this._cta[0].href;
            heroTekstContainer.appendChild(cta1);

        //  GETTING CASES CONTAINER
        const senesteCasesSection = document.getElementById('seneste-cases');
            //  HEADING
            const h2 = document.createElement('h2');
            h2.innerHTML = this._headings[1];
            senesteCasesSection.insertBefore(h2, senesteCasesSection.firstChild);
            //  CTA
            const cta2 = document.createElement('a');
            cta2.innerHTML = this._cta[0].text;
            cta2.href = this._cta[0].href;
            senesteCasesSection.appendChild(cta2);
        
        //  GETTING TEXT BOX 2
        const textbox2 = document.getElementById('om-mig-forside-tekst-boks');
            //  HEADING
            const h3 = document.createElement('h2');
            h3.innerHTML = this._headings[2];
            textbox2.appendChild(h3);
            //  DESCRIPTION
            const description1 = document.createElement('p');
            description1.innerHTML = this._descriptions[0];
            textbox2.appendChild(description1);
            //  CTA
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
        
        this.createImages();
    }   
}

//CASES PAGE CHILD CLASS
class CasesPage extends Page {
    constructor({headings, descriptions, cta, images}) {
        super({headings, descriptions, cta, images});
    }

    renderPage() {
        // GETTING TEXT BOXES
        const headingContainer = document.getElementById('cases-hero-heading');
        const textBox1 = document.getElementById('cases-hero-tekst-boks');
        const textBox2 = document.getElementById('cases-kontakt-tekst-boks');
            
        //  HEADING
            const h1 = document.createElement('h1');
            h1.innerHTML = this._headings[0];
            headingContainer.insertBefore(h1, headingContainer.firstChild);

        //  BOX 1
            //  DESCRIPTION
            const description1 = document.createElement('p');
            description1.innerHTML = this._descriptions;
            textBox1.appendChild(description1);
            
        //  BOX 2
            // HEADING
            const h2 = document.createElement('h2');
            h2.innerHTML = this._headings[1];
            textBox2.appendChild(h2);
            //  CTA
            const cta1 = document.createElement('a');
            cta1.innerHTML = this._cta[0].text;
            cta1.href = this._cta[0].href;
            textBox2.appendChild(cta1);

        this.createImages();
    }
}

class AboutPage extends Page {
    constructor({headings, descriptions, cta, images, video}) {
        super({headings, descriptions, cta, images});
        this._video = video;
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

        this.createImages();
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

//  PAGES INSTANCES
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
        ],
        images: [
            "img/anders_damsgaard_med_laptop-3.jpg",
            "img/anders_damsgaard_i_skov.jpg",
            "img/serioes_anders.jpg"
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
        ],
        images: [
            'img/sidder-pa-togskinner-2.jpg'
        ]
    }),
    aboutPage: new AboutPage ({
        headings: [
                'Jeg har boet og arbejdet i 8 forskellige lande de sidste 8 år',
                'Interesser',
                'Arbejdserfaring',
                'Webudvikling',
                'Ring nu bare'
        ],
        descriptions: [
                'En af de store grunde til at jeg har flyttet så meget rundt er, at jeg har prioriteret mine hobbyer. Jeg har hovedsageligt jagtet ski og surf og tilrettelagt mit liv derefter. Jeg har altid været af den overbevisning at livet skal være sjovt, ellers er der ingenting, der giver mening.',
                'Jeg har helt vildt meget erhvervserfaring. Bare ikke fra webudvikling. <br> Jeg har over 5 års international erfaring fra 8 forskellige lande indenfor restaurationsbranchen. Selvom bartending ikke har særlig meget til fælles med webudvikling, ved jeg hvad det vil sige at have ansvar og at gå selvstændigt til en opgave.',
                'Min ambition med webudvikling er at blive god til det. Jeg ved, at det er en lang proces og at det kræver hårdt arbejde, men jeg føler mig motiveret, og jeg er klar til at yde mit bedste, for at det kan lykkedes.    '
        ],
        cta: [
            {
                text: 'Kontakt mig',
                href: 'kontakt.html'
            }
        ],
        images : [
            "img/anders_ved_vand-2.jpg",
            "img/anders_paa_ski.jpg",
            "img/anders_surfer.png",
            "img/anders_spiller_guitar.jpg",
            "img/anders_shaker_cocktail.JPG",
            "img/latteart.jpg",
            "img/anders_strainer_cocktail.JPG",
            "img/anders-paa-togskinner.jpg"
        ]
    }),
    contactPage: new ContactPage ({
        headings: [
            'Kontakt'
        ]
    })
}

//  PROJECT PAGE CLASS
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
        
        // GETTING MAIN
        const productPageMain = document.querySelector('main');
        //  RENDER MAIN 
        productPageMain.innerHTML = this.createPage();
        
        //  GETTING SKILLS-USED CONTAINER
        const skillsUsedGrid = document.getElementById('skills-used-grid');
        //  PRINT SKILLS
        this._skillsUsed.forEach( (skill) => {
            const skillP = document.createElement('p');
            skillP.innerHTML = skill;
            skillsUsedGrid.appendChild(skillP);
        })
        
    }
}

//  PROJECT PAGE INSTANCES
const projectPages = {
    projectPageFano: new ProjectPage (
        'Sommerhus på Fanø',
        'Bookingportal af sommerhus på Fanø',
        'Projektet',
        'Webløsning',
        'Færdigheder brugt:',
        'Sommerhuset på Fanø er privatejet, og bliver til tider lejet ud, når det ikke benyttes af familien selv. Familien ønsker ikke at liste sommerhuset på populære offentlige portaler, da huset er tiltænkt kun at skulle lejes ud til bekendte og familier i den nære omkreds. Hjemmesiden skal derfor vise huset frem og forsøge at sælge en dejlig ferie på Fanø.  ',
        'Hjemmesiden har et elegant og overskueligt design. Siden har tre primære funktioner; at vise huset visuelt frem, at give alt nødvendig fakta vedr. huset og tilbyde en bookingformular til booking af huset. <br> Hjemmesiden er kodet fra bunden med HTML, SCSS og JavaScript.',
        ['JavaScript', 'HTML', 'SCSS', 'Figma', 'UI', 'UX'],
        "img/projekt-billeder/fanø-page-picture2.png",
        "img/projekt-billeder/fanø-page-picture3.png",
        'https://www.fanø-sommerhus.dk'
    ),
    projectPageWoodWatch: new ProjectPage (
        'RealLife projekt - FireFly',
        'WordPress webdesign or rebranding af FireFly',
        'Projektet',
        'Webløsning',
        'Færdigheder brugt:',
        'Virksomheden Gate3Aps ønskede at få hjemmeside til salg af produktet FireFly; et produkt brugt til justering af brændeovnsfyring i hjemmet. Herudover ønskede Gate3Aps en mere målrettet markedsføring af produktet.',
        'Hjemmesiden er udarbejdet i WordPress efter krav i projektbeskrivelsen fra IBA. Siden tilbyder et indbydende og overskueligt layout. Designet taler direkte til målgruppen med dens 1950er stil. Brugeren kan med det samme danne sig et overblik over hvad formålet med siden er, hvad, det omdøbte produkt, WoodWatch, er for noget, hvordan det kan skabe værdi og hvordan det kan anskaffes. Siden indeholder desuden en simpel explainervideo lavet af undertegnet.',
        ['WordPress', 'CSS', 'Figma', 'UI', 'UX', 'Adobe AfterEffects'],
        'img/projekt-billeder/woodwatch-page-picture2.png',
        'img/projekt-billeder/woodwatch-page-picture3.png',
        'https://mothasmilk.com/woodwatch/'
    ),
    projectPageDreamShot: new ProjectPage (
        'DreamShot multimediebureau',
        'DreamShot multimediebureau',
        'Projektet',
        'Webløsning',
        'Færdigheder brugt:',
        'Gruppeprojektet gik ud på at gruppen skulle forestille sig at være et rigtigt multimediebureau. Der skulle derfor udføres markedsanalyse og målgruppesegmentering. Dernæst skulle der udarbejdes en markedsføringskampagne med dertilhørende hjemmeside.',
        'Hjemmesiden henvender sig til en specifik målgruppe i caféindustrien. Den giver hurtigt udtryk for hvem den er tiltænkt og tilbyder et klart overblik over, hvad mediebureauet tilbyder. Samtidig udstråler hjemmesiden masser af personlighed som en del af markedsføringskampagnen. <br> Hjemmesiden er kodet fra bunden med HTML og SCSS (uden brug af JS).',
        ['HTML', 'SCSS', 'Figma', 'UI', 'UX'],
        'img/projekt-billeder/dreamshot-page-picture2.png',
        'img/projekt-billeder/dreamshot-page-picture3.png',
        'https://mothasmilk.com/dreamshot-media/'
    ),
    projectPageDatasikkerhed: new ProjectPage (
        'Datasikkerhed projekt',
        'Infoside vedr. overvågning på sociale medier',
        'Projektet',
        'Webløsning',
        'Færdigheder brugt:',
        'I løbet af projektet blev der for første gang stiftet bekendtskab med JavaScript. Projektet gik ud på udarbejdelse af en hjemmeside, der formidler et aspekt af datasikkerhed. JavaScript blev implementeret ved udarbejdelse af forgrenede scenarier på hjemmesiden.',
        'Hjemmesiden formidler problematikken ved overvågning på sociale medier. Brugeren bliver ført igennem siden, der først formidler problematikken, derefter tester brugerens egen adfærd og til sidst quizzer brugeren i den ny tilegnede viden.',
        ['JavaScript', 'SCSS', 'HTML', 'Figma', 'UX'],
        'img/projekt-billeder/datasikkerhed-page-picture2.png',
        'img/projekt-billeder/datasikkerhed-page-picture3.png',
        'https://mothasmilk.com/DatasikkerhedRepo/'
    ),
    projectPageVerninge: new ProjectPage (
        'RealLife projekt - Verninge Borgerforening',
        'Verninge Borgerforenings nye hjemmeside',
        'Projektet',
        'Webløsning',
        'Færdigheder brugt:',
        'Verninge Borgerforening vil gerne have flere tilflyttere til byen. Derfor ville de have udarbejdet en ny hjemmeside, der tager højde for målgruppen og viser Verninge frem fra sin bedste side.',
        'Hjemmesiden tager højde for den primære målgruppe, som udgør potentielle tilflyttere og den sekundære målgruppe, som udgør nuværende beboere. Hjemmesiden tilbyder en proppet, men overskuelig navigation, og visuelt repræsenterer Verninge som det fantastiske sted, det er. <br> Hjemmesiden er kodet fra bunden med HTML og CSS (Uden brug af JS).',
        ['HTML', 'CSS', 'Figma', 'UI', 'UX'],
        'img/projekt-billeder/verninge-page-picture2.png',
        'img/projekt-billeder/verninge-page-picture3.png',
        'https://mothasmilk.com/verninge-og-omegn/'
    )
}

//  FUNKTION TIL BURGERMENU TOGGLE
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

//  FUNKTION TIL VISNING AF HEADER OG FOOTER
function populateHeaderAndFooter () {

    //  CLASS TIL HEADER LINKS
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

    //  GLOBALE NAV LINKS
    const globalNavLinks = {
        cases: new GlobalNavLink ('Cases', 'cases.html', 'cases-side'),
        omMig: new GlobalNavLink ('Om mig', 'ommig.html', 'om-side'),
        kontakt: new GlobalNavLink ('Kontakt', 'kontakt.html', 'kontakt-side'),
    }
    const globalNavLinksArray = Object.keys(globalNavLinks);

    //  HENTER ALLE GLOBALE NAV DIV'ER - HEADER OG BURGER
    const globalNav = document.querySelectorAll('.header-nav');

    //  OPRETTER A-TAG FOR HVER LINK I ALLE NAV'ER
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

    // FOOTER
    const footerObject = {
        headings: ['Kontakt', 'Relavante dokumenter'],
        links: [
            {
                text: 'CV (Webudvikler)',
                href: 'dokumenter/CV_webudvikling_AndersDamsgaard.pdf'
            },
            {
                text: 'CV (Restauration)',
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

// FUNKTION TIL DISPLAY AF CASES
function displayCases(array, container) {
    array.forEach( (project) => {
        // OPRET CONTAINER TIL PROJEKT
        const projectWindow = document.createElement('div');
        projectWindow.classList.add('project');
        container.appendChild(projectWindow);

        //  OPRET IMG-CONTAINER
        const projectWindowImgContainer = document.createElement('div');
        projectWindowImgContainer.classList.add('project-img-container');
        projectWindow.appendChild(projectWindowImgContainer);
        //  OPRET IMG
        const projectImg = document.createElement('img');
        projectImg.src = project.picture;
        projectWindowImgContainer.appendChild(projectImg);

        //  OPRET KLIKBAR ELEMENT TIL TEKST
        const projectWindowText = document.createElement('a');
        projectWindowText.classList.add('project-window-text');
        projectWindowText.href = project.href;
        projectWindow.appendChild(projectWindowText);

        //  OPRET PARAGRAF TIL PROJEKT-TITEL
        const projectTitleP = document.createElement('p')
        projectTitleP.innerHTML = project.title;
        projectWindowText.appendChild(projectTitleP);

        //  OPRET PARAGRAF TIL PROJEKT-KLIENT
        const projectClient = document.createElement('p');
        projectClient.innerHTML = `Klient: ${project.client}`;
        projectWindowText.appendChild(projectClient);

        //  OPRET PARAGRAF TIL PROJEKT-BESKRIVELSE
        const projectDescription = document.createElement('p');
        projectDescription.innerHTML = project.description;
        projectWindowText.appendChild(projectDescription);
    })  
}

//  RENDER PAGES
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