describe('Submit Form', () => {
  it('Select React option with 50 qnt', () => {
    const storage =
      '[{"stickers":["React"],"counter":"50","obs":"Selecionando 50 React stickers"}]';
    cy.clearLocalStorage();
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
});
