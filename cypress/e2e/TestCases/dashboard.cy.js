import { dashboardPageAction } from "../../../PageObjects/PageActions/dashboardPageAction";

const dashbaord_action = new dashboardPageAction()

describe("dashboard Test", function () {
  beforeEach(() => {
    cy.loginBlueLion("9711041377", "1", "1", "1", "1")
    cy.visit("https://www.bluelionlifestyle.com/user-dashboard")
  })
  it("dashboard overview",()=>{
    cy.visit("https://www.bluelionlifestyle.com/user-dashboard")
    dashbaord_action.sidebarDashboardVisibility()
    dashbaord_action.orderTextVisibility()
    dashbaord_action.orders_ViewAll_click()
    cy.url().should('eq', 'https://www.bluelionlifestyle.com/user-orders')
    cy.wait(2000)
    cy.go(-1)
    dashbaord_action.affiliateProgramTextVisibility()
    dashbaord_action.affiliate_program_ViewAll()
    cy.url().should('eq', 'https://www.bluelionlifestyle.com/affiliate-program')
    cy.wait(2000)
    cy.go(-1)
    dashbaord_action.support_Text_Visibility()
    dashbaord_action.support_ViewAll()
    cy.url().should('eq', 'https://www.bluelionlifestyle.com/user-support')
    cy.wait(2000)
    cy.go(-1)
    dashbaord_action.setting_Text_Visibility()
    dashbaord_action.setting_ViewAll()
    cy.url().should('eq', 'https://www.bluelionlifestyle.com/user-settings')
    cy.wait(2000)
    cy.go(-1)
  })
})