import userData from '../fixtures/user-data.json'
import LoginPage from '../../pages/loginPage.js'
import dashboardPage from '../../pages/dashboardPage.js'
import menuPage from '../../pages/menuPage.js'

const loginPage = new LoginPage()



describe('OrangeHRM Test', () => {

  const selectorsList = {
    
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericIDField: '.oxd-input--active',
    dateField: '[placeholder="yyyy-dd-mm"]',
    dateCloseButton: '.--close',
    saveButton: '[type="submit"]',
    listButton: '.oxd-select-text--arrow',


  } 

  it.only('User Info Update - success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    
    
    //cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    // cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    // cy.get(selectorsList.genericIDField).eq(3).clear().type('employee')
    // cy.get(selectorsList.genericIDField).eq(4).clear().type('IDNameTest')
    // cy.get(selectorsList.genericIDField).eq(5).clear().type('DriverNameTest')
    // cy.get(selectorsList.genericIDField).eq(8).clear().type('TestNameTest')
    // cy.get(selectorsList.dateField).eq(0).clear().type('2030-07-22')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.dateField).eq(1).clear().type('2000-04-02')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.listButton).eq(0).click()
    // cy.get('.oxd-select-dropdown').contains('Brazilian').click()
    // cy.get(selectorsList.listButton).eq(1).click()
    // cy.get('.oxd-select-dropdown').contains('Single').click()
    // cy.get(selectorsList.saveButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close')
    })

  it('Login failed', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCreditialsAlert).contains('Invalid credentials')
  })
})