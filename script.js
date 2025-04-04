() => {
  const dateStr = "2023-08-11"; // Return a valid date string

  cy.visit(baseUrl, {
    onBeforeLoad(win) {
      cy.stub(win, "prompt").onFirstCall().returns(dateStr); // Stub prompt with a valid date string
    }
  });

  cy.on("window:alert", (str) => {
    expect(str).to.equal("true"); // Expect alert to be the string "true"
  });
}


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
