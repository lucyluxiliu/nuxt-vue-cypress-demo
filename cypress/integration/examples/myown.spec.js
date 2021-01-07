describe('Test myown.spec.js', () => {
  beforeEach(() => {
    cy.visit('pages/user/search');
  });

  it('some test', () => {
    cy.get('[data-cy=submit]').click();
  });
});
