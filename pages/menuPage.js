class MenuPage {
    selectorsList() {
        const selectors = {
            adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
            pimButton: '[href="/web/index.php/pim/viewPimModule"]',
            leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
            timeButton: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            claimButton: '[href="/web/index.php/ess/viewEmployeeClaim"]',
            BuzzButton: '[href="/web/index.php/buzz/viewBuzz"]',

        }
        return selectors
    }


    AccessAdmin() {
        cy.get(this.selectorsList().adminButton).click()
    }

    AccessPim() {
        cy.get(this.selectorsList().pimButton).click()
    }

    AccessLeave() {
        cy.get(this.selectorsList().leaveButton).click()
    }

    AccessTime() {
        cy.get(this.selectorsList().timeButton).click()
    }

    AccessRecruitment() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    AccessPerfromance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    AccessDirectory() {
        cy.get(this.selectorsList().directoryButton).click()
    }

    AccessMaintenance() {
        cy.get(this.selectorsList().maintenanceButton).click()
    }

    AccessClaim() {
        cy.get(this.selectorsList().claimButton).click()
    }

    AccessBuzz() {
        cy.get(this.selectorsList().BuzzButton).click()
    }
}


export default MenuPage