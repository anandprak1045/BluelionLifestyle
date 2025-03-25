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
  it("Affiliate Program", () => {
    cy.visit("https://www.bluelionlifestyle.com/user-dashboard")
    dashbaord_action.AffiliateProgramText()
    dashbaord_action.AffiliateProgram_ViewAll()
    dashbaord_action.AffiliateProgram_Heading()
    dashbaord_action.AffiliateProgramOffer()
    dashbaord_action.AffiliateProgramCreateDiscount()
    dashbaord_action.AffiliateCreateDiscountCouponCode()
    cy.fixture('AffiliateProgram').then((data) => {
      dashbaord_action.AffiliateCreateDiscountPercentage(data.AffiliatePercentage)
      dashbaord_action.AffiliateCraeteDiscountMaxNumberOfPeopleUse(data.AffiliateMaxNoOfPeopleUse)
    })

    const inputDate = '03-12-2025'
    const formattedDate = formatDateForSrartDate(inputDate)
    dashbaord_action.CreateDiscountStartDate(formattedDate)

    const endDate = '04-12-2025'
    const affiliateEndDate = formatDateForEndDate(endDate)
    dashbaord_action.CreateDiscountEndDate(affiliateEndDate)
    cy.wait(2000)
    dashbaord_action.CreateDiscountSaveButton()
    dashbaord_action.AffiliateDiscountSuccessToastMessage()
  })
  it("Affiliate Program - Edit Button", () => {
    cy.visit("https://www.bluelionlifestyle.com/affiliate-program")
    dashbaord_action.AffiliateProgramEditButton()
    dashbaord_action.AffiliateProgramEditButton()
    const inputDate = '03-12-2025'
    const formattedDate = formatDateForSrartDate(inputDate)
    dashbaord_action.CreateDiscountStartDate(formattedDate)
    const endDate = '04-12-2025'
    const affiliateEndDate = formatDateForEndDate(endDate)
    dashbaord_action.CreateDiscountEndDate(affiliateEndDate)
    cy.wait(2000)
    dashbaord_action.CreateDiscountSaveButton()
    dashbaord_action.AffiliateDiscountSuccessToastMessage()
    //  dashbaord_action.AffiliateProgramEditSuccessToastMessage()
  })
  it("Affiliate Program - Refer and earn", () => {
    cy.visit("https://www.bluelionlifestyle.com/affiliate-program")
    dashbaord_action.AffiliateProgramReferAndEarnHeading()
    dashbaord_action.AffiliateProgramReferAndEarnDescription()
    dashbaord_action.AffilaiteProgramReferAndEarnURL()
    dashbaord_action.AffiliateProgramReferAndEarnURLCopy()
    dashbaord_action.AffiliateProgramReferAndEarnURLCopySuccessMeassage()
    dashbaord_action.AffiliateProgramReferAndEarnURLShareButton()
    dashbaord_action.AffiliateProgramReferAndEarnShareHeading()
    dashbaord_action.AffiliateProgramReferAndEarnShareDescription()
    cy.wait(2000)
    dashbaord_action.AffiliateProgramReferAndEarnShareCouponsCopy()
    dashbaord_action.AffiliateProgramReferAndEarnShareCouponsCopySuccessMessage()
  })
  it("Affiliate Program - Verify Upcoming balance and wallet balance",()=>{
    cy.visit("https://www.bluelionlifestyle.com/affiliate-program")
    dashbaord_action.AffiliateProgramUpcomingBalanceIcon()
    dashbaord_action.AffiliateProgramUpcomingBalanceHeading()
    dashbaord_action.AffiliateProgramUpcomingBalanceVisible()
    dashbaord_action.AffiliateProgramWalletBalanceIcon()
    dashbaord_action.AffiliateProgramWalletbalanceHeading()
    dashbaord_action.AffiliateProgramWalletBalanceVisible()
  })
  it("Affliate Program - Upcoming balance", () => {
    cy.visit("https://www.bluelionlifestyle.com/affiliate-program")
    dashbaord_action.AffiliateProgramUpcomingWalletClick()
    cy.wait(2000)
    const fromDate = '01-12-2025'
    const affiliateFromDate = formatDateForFromDate(fromDate)
    dashbaord_action.AffliateProgramUpcomingBalanceHistoryFromDate(affiliateFromDate)
    cy.wait(2000)
    const toDate = '01-15-2025'
    const affiliateToDate = formatDateForToDate(toDate)
    dashbaord_action.AffiliateProgramUpcomingBalanceHistoryToData(affiliateToDate)
    cy.wait(2000)
    dashbaord_action.AffiliateProgramUpcomingBalanceHistorySearchButton()
    dashbaord_action.AffiliateProgramUpcomingBalanceHistoryDataAvailiablityCheck()
  })
})