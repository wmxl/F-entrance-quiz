// This is polyfill for Fetch API
// Unfortunately Cypress does not support Fetch API
// See Issue for more detail https://github.com/cypress-io/cypress/issues/95

let polyfill;

before(() => {
  const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';
  cy.request(polyfillUrl)
    .then((response) => {
      polyfill = response.body
    })
});

Cypress.on("window:before:load", win => {
  delete win.fetch;
  win.eval(polyfill);
  win.fetch = win.unfetch
});
