import 'cypress-file-upload';
import { blueLionLoginAction } from '../../PageObjects/PageActions/blueLionLoginAction';


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types = "cypress" />
/// <reference types = "cypress-xpath"/>

module.exports = {
    defaultCommandTimeout: 10000, // sets a 10-second timeout for all commands
  }
  const Login_Action = new blueLionLoginAction

  // Cypress.Commands.add('loginWithSession',(username,password)=>{
  //   cy.session([username,password],()=>{
  //       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  //       cy.get("input[placeholder='Username']").clear().type(username)
  //       cy.get("input[placeholder='Password']").clear().type(password)
  //       cy.get("button[type='submit']").click()
  //   })
  // })

  Cypress.Commands.add('loginBlueLion',(phoneNumber,FirstDigit,SecondDigit,ThirdDigit,FourthDigit,FirstName,LastName,Email)=>{
    cy.session([phoneNumber,FirstDigit,SecondDigit,ThirdDigit,FourthDigit],()=>{
        cy.visit("https://www.bluelionlifestyle.com/login");
        cy.get("#phoneInput").clear().type(phoneNumber)
        cy.get("button[type='submit']").click()
        cy.get(":nth-child(1) > .form-control").type(FirstDigit)
        cy.get(":nth-child(2) > .form-control").type(SecondDigit)
        cy.get(":nth-child(3) > .form-control").type(ThirdDigit)
        cy.get(":nth-child(4) > .form-control").type(FourthDigit)

        // Wait for possible redirection and check if the registration form appears

        cy.get('body').then(($body) => {
          if ($body.find("Complete Your Registration").length > 0) { 
              cy.log("New user detected, filling registration form...");
              cy.get('.row > :nth-child(1) > .form-control').should('be.visible').clear().type(FirstName);
              cy.get(':nth-child(2) > .form-control').should('be.visible').clear().type(LastName);
              cy.get('.icon-input > .form-control').should('be.visible').clear().type(Email);
              cy.get('.row > .d-flex > .btn').should('be.enabled').click();
          } else {
              cy.log("Existing user, proceeding without registration.")
          }
      })
    })
  })


  Cypress.Commands.add('loginBlueLionFromProductOrder', (phoneNumber, FirstDigit, SecondDigit, ThirdDigit, FourthDigit) => {
    cy.session([phoneNumber,FirstDigit,SecondDigit,ThirdDigit,FourthDigit],()=>{
    cy.visit("https://www.bluelionlifestyle.com/cart/0")
    cy.wait(3000)

    // Enter Phone Number
    cy.get("#phoneInput").should('be.visible').type(phoneNumber, { force: true });

    cy.get("button[type='submit']").click();

    // Wait for OTP fields to be visible
    cy.get('.otp-inputs .form-control', { timeout: 10000 }).should('have.length', 4);

    // Enter OTP Digits
    cy.get(".otp-inputs > :nth-child(1) > .form-control").should('be.visible').type(FirstDigit);
    cy.get(":nth-child(2) > .form-control").type(SecondDigit);
    cy.get(".otp-inputs > :nth-child(3) > .form-control").type(ThirdDigit);
    cy.get(":nth-child(4) > .form-control").type(FourthDigit);
})
  })