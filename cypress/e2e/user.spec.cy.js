import userData from '../fixtures/user-data.json'
import LoginPage from '../../pages/loginPage.js'
import DashboardPage from '../../pages/dashboardPage.js'
import MenuPage from '../../pages/menuPage.js'
import MyInfoPage from '../../pages/MyInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('OrangeHRM Test', () => {

  it('User Info Update - success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.PersonalDetails(chance.first(), chance.last(), chance.string()) 
    myInfoPage.employeeDetails('Employee', 'Other ID', 'Driver License Number','2030-07-21')
    myInfoPage.statusDetails('1990-08-12', 'Brazilian', 'Single')
    myInfoPage.saveForm()

    })
})