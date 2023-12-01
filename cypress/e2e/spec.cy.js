/* eslint-disable no-undef */
describe('Prueba E2E', () => {
  it('Carga la página principal y realiza una acción', () => {
    cy.visit('http://localhost:3000');
    cy.intercept("https://fakestoreapi.com/products").as('loadItems')
    cy.wait('@loadItems')
    cy.wait(3000)

    cy.get("a").contains("CARRITO").click();
    cy.wait(3000);

    cy.get("a").contains("INICIO").click();
    cy.wait(3000);

    cy.get("div.products > div.product:first-child > a").click();
    cy.wait(3000);

    cy.get('button').contains('Añadir al carrito')
    cy.wait(3000);

    cy.get("a").contains("CARRITO").click();
    cy.wait(3000);

    cy.get("a").contains("INICIO").click();
    cy.wait(3000);

  });
});