describe('OrangeHRM Test', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    submitButton: '[type="submit"]',
    titleFieldTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCreditialsAlert: '.oxd-alert'
  }

  it('Login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.submitButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.titleFieldTopBar).contains('Dashboard')
  })

  it('Login failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordField).type('wrongpassword')
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCreditialsAlert).contains('Invalid credentials')
  })
})