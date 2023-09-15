
describe('testing on almosafer website', () => {

    it('set of testing o almosafer', () => {
        
        let AlmosaferEndpoint = ["https://www.almosafer.com/en", "https://www.almosafer.com/ar"]
        let AlmosaferEndpointRandom = AlmosaferEndpoint[Math.floor(Math.random() * AlmosaferEndpoint.length)]
        cy.visit(AlmosaferEndpointRandom) // here we are visiting the website randomly may be EN or AR

        cy.get('.cta__saudi').click()

        cy.get('#uncontrolled-tab-example-tab-hotels').click() // click on hotels tab

        cy.get('[data-testid="Header__LanguageSwitch"]').invoke('text').then((lang) => {
            let location; // save the location or distination in this variable
            if (lang.includes('English')) { // if the text equal english thats mean the website in arabic lang els its english
                let ArabicLocation = ['دبي', 'جدة'];
                location = ArabicLocation[Math.floor(Math.random() * ArabicLocation.length)]; 

            } else {
                let EnglishLocation = ['Dubai', 'Jeddah', 'Riyadh'];
                location = EnglishLocation[Math.floor(Math.random() * EnglishLocation.length)];
            }
            cy.get('[data-testid="AutoCompleteInput"]').type(location);// send the location or disination to typing in the field for search

            cy.get('[data-testid="AutoCompleteResultItem0"]').click() // click on the first option

        })

        let OptionsForRoom = ['A', 'B']; // in option html element the elements have a value attribute the first option A and the second B
        let RandomOptionsForRoom = OptionsForRoom[Math.floor(Math.random() * OptionsForRoom.length)]; // save the index of option random
        cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(RandomOptionsForRoom); // select the value 

        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click() // here to click on search hotel button to discover the hotels


    });

});
