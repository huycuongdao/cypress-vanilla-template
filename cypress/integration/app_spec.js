// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands
/// <reference types="../support" />

describe("Example test", () => {
  it("Should open google page,", () => {
    cy.visit("https://google.com.vn");

    cy
    .get(".gLFyf.gsfi")
    .first()
    .type("Cappu map {enter}");
  });
});
