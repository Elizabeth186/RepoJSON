var frequent_questions = [
    {
        question: "Waar kan ik Wait N' Rest-producten kopen?",
        answer: "Je vindt een touchscreen in je kamer waarmee je al onze producten kunt kopen. In onze winkel vind je nachtkleding, dekens, kussens en de coolste merch die je ooit hebt gezien.<br><br>Kies wat je het leukst vindt en onze medewerkers brengen het naar je kamer."
    },
    {
        question: "Hoeveel personen kunnen tegelijkertijd gebruik maken van de ruimte?",
        answer: "Onze kamers zijn alleen voor één (01) persoon. Het niet naleven van deze regel zal resulteren in een boete van <label id='pen-multi'></label> die in rekening wordt gebracht op de geregistreerde betaalmethode."
    },
    {
        "question": "Hoeveel kost het?",
        "answer": "Het Wait N' Rest-tarief is per uur of fractie en is <label class='answer' id='price-questions'></label> USD. Als u zich tussen 06:00 uur en 18:00 uur registreert, krijgt u toegang tot een exclusieve aanbieding van 3uur voor 16,98 USD (33% KORTING op de normale prijs). De tijd begint te lopen vanaf het moment dat u incheckt en stopt wanneer u uitcheckt op het touchscreen buiten uw kamer.<br><br>U heeft na elk uur 5 minuten de tijd om uit te checken zonder dat het extra uur in rekening wordt gebracht."
    },
    {
        question: "Hoe breng je mij in rekening?",
        answer: "Tijdens uw check-in voeren we een pre-autorisatie uit van het equivalent van 8 uur verblijf (maximaal toegestane tijd) via onze STRIPE-betalingsgateway op uw bankpas of creditcard. <br><br>Toen u klaar was met het uitchecken voor uw kamer, registreerde ons systeem alleen het bedrag dat overeenkomt met de tijd van uw verblijf. De vrijgave van het resterende 'bevroren saldo is afhankelijk van het autorisatiebeleid van uw bank. Meestal duurt het 2-20 werkdagen. Onthoud dat een pre-autorisatie een 'incasso in afwachting van bevestiging' is en hoewel het op uw afschrift kan verschijnen als een inhouding; Het is niet."
    },
    {
        question: "Hoe doe ik mijn check-out?",
        answer: "Gebruik het touchscreen buiten uw kamer en druk op de uitcheckknop. Voer het wachtwoord voor uw kamer in, sluit de deur en volg de instructies. Het is een heel eenvoudig proces."
    },
    {
        question: "Wat zijn jullie protocollen tegen COVID-19?",
        answer: "Uw kamer wordt na elk gebruik gedesinfecteerd door onze medewerkers. We gebruiken de nieuwste richtlijnen van de Colombiaanse overheid om COVID-19 te bestrijden.<br><br>We injecteren elke kamer met frisse lucht gezuiverd door HEPA H13-filters. HEPA-filters zijn bijna 100% efficiënt in het opvangen van het spectrum van deeltjes tot de allerkleinste deeltjes in de lucht. We gebruiken een luchtverversingssysteem dat vergelijkbaar is met het systeem dat wordt gebruikt in operatiekamers in ziekenhuizen of in vliegtuigen.<br><br>De lucht in uw kamer wordt elke 2 minuten ververst."
    },
    {
        question: "Kan ik vluchtinformatie in mijn kamer controleren?",
        answer: "Ja. Uw kamer is uitgerust met een aanraakscherm waarop u de status van uw vlucht in realtime kunt controleren, de temperatuur van uw kamer, de verlichting kunt regelen en al onze producten kunt kopen."
    },
    {
        question: "Kan ik vooraf een kamer reserveren voor een bepaalde datum?",
        answer: "Ja. Ga naar onze website <label class='l-bold'>www.waitnrest.com</label> en reserveer uw kamer. Wij accepteren alleen reserveringen 24 uur voor uw aankomstdatum en voor een minimum verblijf van 4 uur."
    },
    {
        question: "Zijn ze 24/7 bereikbaar?",
        answer: "Ja. Wait N 'Res kamers zijn 24 uur per dag voor u beschikbaar."
    },
    {
        question: "Mag ik het pand of mijn kamer zo vaak in en uit gaan als ik wil?",
        answer: "Ja. Gebruik de 're-enter'-knop op de touchscreens bij ons incheckgedeelte om weer naar binnen te gaan.<br><br>Zoek uw kamer en druk op de re-enter-knop op het aanraakscherm buiten uw kamer. Om binnen te komen, moet u bij het inchecken het wachtwoord invoeren dat u bij ons hebt geregistreerd.<br><br>Zolang u niet in uw kamer bent, blijft de kamer op slot."
    },
    {
        "question": "Hoe werkt het?",
        "answer": "Meld u aan op de incheckschermen buiten ons hoofdkantoor. U moet een wachtwoord voor uw kamer, uw kaartgegevens en een e-mail invoeren om u de factuur te kunnen sturen wanneer u klaar bent met de service. We wijzen u een kamernummer toe en u kunt ons hoofdkantoor betreden. Het Wait N' Rest tarief is per uur of fractie of per pakket. Als je je tussen 09.00 uur en 12.00 uur aanmeldt, heb je toegang tot een 6-uurs aanbieding voor USD 16,98 (33% korting). <br><br>De tijd begint te tellen vanaf het moment dat u incheckt en stopt wanneer u succesvol uitcheckt. Voor het uitchecken hoeft u alleen de instructies op het touchscreen buiten uw kamer te volgen"
    },
    // {
    //     question: "Hoe werkt het?",
    //     answer: "Meld je aan bij de incheckschermen voor ons hoofdkantoor. <br><br> U moet uw kamerwachtwoord, kaartgegevens en e-mailadres invoeren om u te kunnen factureren nadat de service is beëindigd. <br><br> Wij wijzen u een kamernummer toe en u kunt ons hoofdkantoor betreden. <br><br> Het Wait N' Rest tarief is per uur of fractie en is dynamisch. Van 08:01 uur tot 20:59 uur is ons uurtarief of deeltarief <label  id='price-tarifa-reducida-1'></label> en van 21:00 uur tot 8:00 uur is ons uurtarief of deeltarief <label  id='price-tarifa-regular-1'></label>. <br><br>Maak je geen zorgen als je tijdens je verblijf een uur de tijd hebt waarin minuten worden gedeeld tussen beide slots! U betaalt voor dit uur het laagste tarief. <br><br> De tijd begint bij het inchecken en eindigt bij het succesvol uitchecken. Om uit te checken hoeft u alleen maar de instructies op het touchscreen buiten uw kamer te volgen. <br><br> Na elk uur heeft u 5 minuten de tijd om uit te checken zonder dat het extra uur in rekening wordt gebracht."
    // },
    // {
    //     question: "Hoe werkt onze dynamische tarief?",
    //     answer: "In perioden van lage vraag, verlagen we onze tarieven zodat u langer kunt blijven.<br><br>Onze prijs per uur of gedeelte van een uur zal afhangen van de tijdsperiode waarin de klant bij ons blijft. Dit zijn de twee tijdsperioden die we hebben:<br><br><ul><li>Tijdsperiode met gereduceerd tarief: 8:01 AM tot 8:59 PM <ul><li>Prijs per uur of gedeelte van een uur: 8,49 USD</li></ul></li><br><li>Tijdsperiode met regulier tarief: 6:00 PM tot 8:00 AM</li> <ul><li>Prijs per uur of gedeelte van een uur: 11,49 USD</li></ul></ul><br>Vergeet niet dat we u 5 minuten extra geven na elk uur om uit te checken zonder dat u voor een extra uur wordt gefactureerd.<br><br>Onthoud, als u binnen uw verblijf een uur heeft waarin minuten tussen beide tijdsperioden worden gedeeld, maakt u zich geen zorgen! U zult de laagste tarief betalen voor dat uur.<br><br>Voorbeeld:<br>Als u 5 uur bij ons wilt blijven en om 8:30 PM uw kamer binnenkomt, zal uw eerste verblijfsuur (8:30 PM tot 9:30 PM) worden gefactureerd tegen het gereduceerde tarief, omdat u minuten tussen beide tijdsperioden deelt. De overige 4 uren zullen worden gefactureerd tegen het reguliere tarief.<br><br>De extra 5 minuten na elk uur om uit te checken tellen niet mee als verblijf, dat wil zeggen dat ze geen invloed hebben op het tarief dat u zult betalen. Als u twijfels heeft, raden we u aan onze <label class='l-bold'>verblijfsberekening te gebruiken.</label>"
    // },
    // {
    //     question: "Als ik incheck tijdens een periode met een verlaagd tarief, wordt dan voor mijn hele verblijf hetzelfde tarief in rekening gebracht?",
    //     answer: "Niet noodzakelijk. De prijs die voor uw verblijf in rekening wordt gebracht, is afhankelijk van de periode waartoe alle uren behoren die u bij ons verbleef. Het kan voorkomen dat bij een verblijf van 3uur 3 uur tot de verlaagde tariefperiode behoren en de andere 3 tot de reguliere tariefperiode. <br><br>Niet noodzakelijk. De prijs die voor uw verblijf in rekening wordt gebracht, is afhankelijk van de periode waartoe alle uren behoren die u bij ons verbleef. Het kan voorkomen dat bij een verblijf van 3uur 3 uur tot de verlaagde tariefperiode behoren en de andere 3 tot de reguliere tariefperiode. <br><br>Vergeet niet dat ons tarief per uur of fractie is. Vergeet niet dat we u na elk uur 5 minuten extra geven, zodat u kunt uitchecken zonder dat u voor het volgende uur van uw verblijf hoeft te betalen. <br><br>Voorbeeld: <br><ul><li>Periode met verlaagd tarief: 08:01 uur tot 20:59 uur</li><li>Reguliere tariefperiode: 21:00 tot 8:00 uur <br><br>Er was eens een reiziger genaamd Juan, die erg moe was na een lange reis. Om 06:00 uur checkte Juan bij ons in tijdens de reguliere tariefperiode. Juan was zo moe dat hij na het inchecken diep in slaap viel en pas om 13.00 uur wakker werd. Hoewel Juan 7 uur bij ons verbleef, hoefde hij niet zoveel geld te betalen voor zijn verblijf. Hij betaalde slechts 2 uur regulier tarief (06:00 uur tot 08:00 uur) en 5 uur verlaagd tarief (08:01 uur – 13:00 uur). Juan was erg blij dat hij tijdens zijn verblijf geld had bespaard en was klaar om zijn avontuur voort te zetten.</li></ul>"
    // },
    // {
    //     question:"Wat gebeurt er als mijn eerste of laatste uur van verblijf minuten deelt tussen het tijdslot met verlaagd tarief en het tijdslot met normaal tarief?",
    //     answer:"Maak je geen zorgen als je tijdens je verblijf een uur hebt waarin minuten worden gedeeld tussen beide slots! Voor dat uur betaalt u het laagste tarief. Vergeet niet dat de 5 minuten die we u geven om uit te checken voordat het volgende uur in rekening wordt gebracht, niet worden beschouwd als onderdeel van uw verblijf; dat wil zeggen, ze hebben geen invloed op het tarief dat u betaalt. <br><br> Bijvoorbeeld:<br><ul><li>Tijdslot met verlaagd tarief: 08:01 uur tot 20:59 uur</li><li>Regulier tarief tijdslot: 21:00 tot 8:00 uur</li></ul> Stel dat Juan, een vermoeide reiziger, besluit om om 07:00 uur in te checken bij onze service en wil dat zijn verblijf een (1) uur duurt (Juan gaat een tijdslot met normale prijs in). <br><br>Juan weet dat hij tot 08:05 uur de tijd heeft om uit te checken zonder dat het tweede uur van het verblijf in rekening wordt gebracht. Juan heeft het vorige bericht niet begrepen en denkt dat die 5 minuten cadeau om zijn kassa te doen bij zijn verblijf horen. <br><br>Juan wil beweren dat aangezien hij 5 minuten binnen het tijdslot met verlaagd tarief verbleef, we hem het verlaagde tarief voor zijn verblijf in rekening moeten brengen. <br><br>Juan, we hebben je verteld dat de 5 gratis minuten geen deel uitmaken van je verblijf, daarom heb je geen minuten gedeeld tussen de twee slots. <br><br> Juan, we proberen hier, in de vorige schermen en in de Algemene Voorwaarden uit te leggen dat die 5 minuten geen deel uitmaken van je verblijf en geen invloed hebben op het tarief dat je betaalt. <br><br> Juan, als je twijfelde, ¿waarom heb je dan onze verblijfscalculator niet gebruikt? <br><br>Wees niet zoals John. <br><br>Maar … <br><br> Wat zou er gebeuren als Juan van 07.00 uur tot 08.10 uur bij ons was gebleven? <br><br> Juan zou 2 uur verblijf hebben moeten betalen omdat Juan weet dat onze service per uur of fractie wordt berekend, en Juan overschreed de gratis 5 minuten om uit te checken. Juan zou het eerste uur tegen een regulier tarief hebben betaald en het tweede tegen een verlaagd tarief."
    // }
    

]