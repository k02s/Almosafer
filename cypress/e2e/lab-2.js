
describe('solve lab 2', () => {

    it('make assertion that the first result is lower than the last result', () => {


        cy.visit("https://www.almosafer.com/en")
        cy.get('.cta__saudi').click()
        cy.get('#uncontrolled-tab-example-tab-hotels').click()

        let cities = ["dubai", "jeddah", "amman"]
        let randomCities = cities[Math.floor(Math.random() * cities.length)]
        cy.get('[data-testid="AutoCompleteInput"]').type(randomCities)

        cy.wait(200)
        cy.get('[data-testid="AutoCompleteResultItem0"]').click()
        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()
        cy.wait(10000)
        cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click()

        cy.get('.Price__Value').first().invoke('text').then((firstPrice) => {
            cy.get('.Price__Value').last().invoke('text').then((lastPrice) => {

                const firstPriceValue = parseFloat(firstPrice.replace(/[^0-9.]/g, ''));
                const lastPriceValue = parseFloat(lastPrice.replace(/[^0-9.]/g, ''));
                expect(firstPriceValue).to.be.lessThan(lastPriceValue);
            });
        });


    });
}); 