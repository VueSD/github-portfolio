// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "GitHub Projects");
    cy.get("a")
      .first("a")
      .click();
    // cy.wait(1000);
    cy.get("h3");
    cy.get(".router-link-active").click();
    cy.contains("h1", "GitHub Projects");
  });
});
