import "cypress";

const storybookBase = `http://${Cypress.env("STORYBOOK_HOST")}:${Cypress.env("STORYBOOK_PORT")}`;

describe("My First Test", function() {
  it("Does not do much!", function() {
    cy.visit(`${storybookBase}/?path=/story/layeredcalendar--default`);
  });
});
