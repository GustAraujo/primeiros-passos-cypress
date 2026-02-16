import userData from '../fixtures/user-data.json'
import LoginPage from '../../pages/loginPage.js'
import DashboardPage from '../../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login OrangeHRM Test', () => {

  it('Login failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })
})