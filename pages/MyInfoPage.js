class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericIDField: '.oxd-input--active',
            dateField: '[placeholder="yyyy-dd-mm"]',
            dateCloseButton: '.--close',
            saveButton: '[type="submit"]',
            listButton: '.oxd-select-text--arrow',
        }

        return selectors

    }

    PersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericIDField).eq(2).clear().type(nickName)

    }

    employeeDetails(employeeID, otherID, DriverLicenseNumberTest, dateTest) {
        cy.get(this.selectorsList().genericIDField).eq(3).clear().type(employeeID)
        cy.get(this.selectorsList().genericIDField).eq(4).clear().type(otherID)
        cy.get(this.selectorsList().genericIDField).eq(5).clear().type(DriverLicenseNumberTest)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(dateTest)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    statusDetails(AnyDate, AnyCountry, AnyMaritalStatus) {
        cy.get(this.selectorsList().dateField).eq(1).clear().type(AnyDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().listButton).eq(0).click()
        cy.get('.oxd-select-dropdown').contains(AnyCountry).click()
        cy.get(this.selectorsList().listButton).eq(1).click()
        cy.get('.oxd-select-dropdown').contains(AnyMaritalStatus).click()
        cy.get(this.selectorsList().saveButton).eq(0).click()

    }

    saveForm() {
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

}


export default MyInfoPage