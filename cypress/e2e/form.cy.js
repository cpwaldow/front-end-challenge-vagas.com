describe('Submit Form', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('http://localhost:5173/');
  });

  it('Select React option with 50 qnt', () => {
    const storage =
      '[{"stickers":["React"],"counter":"50","obs":"Selecionando 50 React stickers"}]';

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

    cy.wait(5000);
    cy.get('.success-submit').should('not.be.visible');
  });

  it('Select Vue option with 100 qnt', () => {
    const storage = '[{"stickers":["Vue"],"counter":"100","obs":""}]';

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

    cy.wait(5000);
    cy.get('.success-submit').should('not.be.visible');
  });

  it('Select Angular option with 35 qnt', () => {
    const storage = '[{"stickers":["Angular"],"counter":"35","obs":""}]';

    cy.contains('Angular').click();
    cy.get('#counter').clear();
    cy.get('#counter').focus().type('35');
    cy.get('#btn-submit').click();
    cy.get('.success-submit').should('be.visible');

    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        'http://localhost:5173': {
          info: storage,
        },
      });
    });

    cy.wait(5000);
    cy.get('.success-submit').should('not.be.visible');
  });
});

describe('Handle erros on form with qnt stickers 0', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Select React option with 0 qnt', () => {
    cy.on('window:alert', (msg) => {
      const alertMsg = 'Valor incorreto, insira um número válido maior que 0';
      expect(msg).to.equal(alertMsg);
    });

    cy.contains('React').click();
    cy.get('#counter').clear();
    cy.get('#counter').focus().type('0');
    cy.get('#btn-submit').click();
  });

  it('Select Vue option with 0 qnt', () => {
    cy.on('window:alert', (msg) => {
      const alertMsg = 'Valor incorreto, insira um número válido maior que 0';
      expect(msg).to.equal(alertMsg);
    });

    cy.contains('Vue').click();
    cy.get('#counter').clear();
    cy.get('#counter').focus().type('0');
    cy.get('#btn-submit').click();
  });

  it('Select Angular option with 0 qnt', () => {
    cy.on('window:alert', (msg) => {
      const alertMsg = 'Valor incorreto, insira um número válido maior que 0';
      expect(msg).to.equal(alertMsg);
    });

    cy.contains('Angular').click();
    cy.get('#counter').clear();
    cy.get('#counter').focus().type('0');
    cy.get('#btn-submit').click();
  });

  it('Select all option with 0 qnt', () => {
    cy.on('window:alert', (msg) => {
      const alertMsg = 'Valor incorreto, insira um número válido maior que 0';
      expect(msg).to.equal(alertMsg);
    });

    cy.contains('React').click();
    cy.contains('Vue').click();
    cy.contains('Angular').click();
    cy.get('#counter').clear();
    cy.get('#counter').focus().type('0');
    cy.get('#btn-submit').click();
  });

  it('Set qnt stickers without select any option', () => {
    cy.on('window:alert', (msg) => {
      const alertMsg = 'Selecione pelo menos uma opção de adesivo';
      expect(msg).to.equal(alertMsg);
    });

    cy.get('#counter').focus().type('100');
    cy.get('#btn-submit').click();
  });
});
