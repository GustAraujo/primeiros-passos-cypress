import userData from '../fixtures/user-data.json'

describe('OrangeHRM Test', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    submitButton: '[type="submit"]',
    titleFieldTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCreditialsAlert: '.oxd-alert'
  } 

  it('Login success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.submitButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

  it('Login failed', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCreditialsAlert).contains('Invalid credentials')
  })
})