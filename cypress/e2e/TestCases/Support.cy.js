import { dashboardPageAction } from "../../../PageObjects/PageActions/dashboardPageAction";
import { formatDateForSrartDate } from "../../support/dateutils";
import { formatDateForEndDate } from "../../support/datesutils";
import { formatDateForFromDate } from "../../support/AffiliateProgramUpcomingBalanceFromDate";
import { formatDateForToDate } from "../../support/AffiliateProgramUpcomingBalanceToDate";

const dashbaord_action = new dashboardPageAction()

describe("dashboard Test", function () {
  beforeEach(() => {
    cy.loginBlueLion("9711041377", "1", "1", "1", "1")
    cy.visit("https://www.bluelionlifestyle.com/user-dashboard")
  })
  it("Support",()=>{
    dashbaord_action.SupportMenuBar()
    dashbaord_action.SupportTitle()
    dashbaord_action.OpenStatusMessage()
    dashbaord_action.ViewChat()
    cy.wait(2000)
    dashbaord_action.closeChat()
    cy.wait(2000)
    dashbaord_action.CheckStatus()
  })
})