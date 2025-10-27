import { getGreeting } from '../support/app.po';

describe('RoseE-Commerce-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it.skip('should display welcome message', () => {
  

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});
