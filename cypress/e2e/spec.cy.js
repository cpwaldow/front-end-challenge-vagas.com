describe('Submit Form', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it('Select React option with 50 qnt', () => {
    const storage =
      '[{"stickers":["React"],"counter":"50","obs":"Selecionando 50 React stickers"}]';
    cy.visit('http://localhost:5173/');
    cy.contains('React').click();
    cy.get('#counter').clear();
    cy.get('#counter').focus().type('50');
    cy.get('textarea').focus().type('Selecionando 50 React stickers');
    cy.get('#btn-submit').click();
    cy.get('.success-submit').should('be.visible');

    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        'http://localhost:5173': {
          info: storage,
        },
      });
    });
  });

  it('Select Vue option with 100 qnt', () => {
    const storage = '[{"stickers":["Vue"],"counter":"100","obs":""}]';
    cy.visit('http://localhost:5173/');
    cy.contains('Vue').click();
    cy.get('#counter').clear();
    cy.get('#counter').focus().type('100');
    cy.get('#btn-submit').click();
    cy.get('.success-submit').should('be.visible');

    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        'http://localhost:5173': {
          info: storage,
        },
      });
    });
  });
});
