describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if user can navigate slides using next and previous buttons', function () {
    cy.visit('http://localhost:3000'); 
    
    // Sprawdzenie, czy pierwszy slajd to "Rome"
    cy.get('.swiper-slide-active').should('contain', 'Rome');

    // Kliknięcie "Next" i sprawdzenie, czy aktywny slajd to "London"
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');

    // Kliknięcie "Next" ponownie i sprawdzenie, czy aktywny slajd to "Paris"
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');

    // Kliknięcie "Previous" i sprawdzenie, czy aktywny slajd to "London"
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');

    // Kliknięcie "Previous" ponownie i sprawdzenie, czy wracamy do "Rome"
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});


