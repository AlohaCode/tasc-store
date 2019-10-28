

describe('Baskets Page', () => {

  beforeEach(() => {
    cy.fixture('baskets.json').as('basketsJSON');
    cy.server();
    cy.route('/api/baskets', '@basketsJSON').as('baskets');
    cy.visit('/');
  });

  it('should display a list of baskets', () => {
    cy.contains("TASC Task");
    cy.wait('@baskets');
    cy.get('mat-card').should('have.length', 3);
    cy.get('div.mat-list-item-content').should('have.length', 9);
  });

  it('should display a receipt and go home', () => {
    cy.get('.mat-raised-button').should('have.length', 3);
    cy.get('.mat-raised-button').last().click();
    cy.get('.mat-card-header-text .mat-card-title').should('have.length', 1);
    cy.get('.mat-card-header-text .mat-card-title').should('contain', 'Basket 3');
  });

  it('should resolve a bad URL to baskets page', () => {
    cy.visit('/ba');
    cy.contains("TASC Task");
    cy.get('mat-card').should('have.length', 3);
    cy.get('div.mat-list-item-content').should('have.length', 9);
  });

});
