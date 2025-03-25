import { dashboardPageAction } from "../../../PageObjects/PageActions/dashboardPageAction";

const dashbaord_action = new dashboardPageAction()

describe("dashboard Test", function () {
  beforeEach(() => {
    cy.loginBlueLion("9711041377", "1", "1", "1", "1")
    cy.visit("https://www.bluelionlifestyle.com/user-dashboard")
  })
  it("orders",()=>{
    cy.visit("https://www.bluelionlifestyle.com/user-dashboard")
    dashbaord_action.ordersTextVisibility()
    dashbaord_action.waiting_for_payment_message_visibility()
    dashbaord_action.waitingForPaymentMessageDateVisibility()
    dashbaord_action.productAmountVisibility()
    dashbaord_action.shipToUserVisibility()

  })
  it("View invoice",()=>{
    cy.visit("https://www.bluelionlifestyle.com/user-orders")
    dashbaord_action.viewInvoiceVisibility()
    dashbaord_action.viewInvoiceClick()

  })
  it("View order details",()=>{
    cy.visit("https://www.bluelionlifestyle.com/user-orders")
    dashbaord_action.viewOrderDetailsVisibility()
    dashbaord_action.viewOrderDetailsClick()
    cy.go(-1)
  })
  it("Track order",()=>{
    cy.visit("https://www.bluelionlifestyle.com/user-orders")
    dashbaord_action.trackOrderVisibility()
    dashbaord_action.trackOrderClick()
    cy.go(-1)
  })
  it("Order => Support",()=>{
    cy.visit("https://www.bluelionlifestyle.com/user-orders")
    dashbaord_action.supportVisibility()
    dashbaord_action.supportClick()
    dashbaord_action.submitButton()
    dashbaord_action.supportErrorMessage()
    cy.wait(3000)
    cy.fixture('orderSupportData').then((data)=>{
      dashbaord_action.subjectTextFeild(data.Subject)
      dashbaord_action.descriptionTextFeild(data.Description)
      dashbaord_action.submitButton()
      cy.fixture('orderSupportData').then((data)=>{
        dashbaord_action.replyDescription(data.ReplyDescription)
        dashbaord_action.replyDescriptionReplyButton()
      })
    })
  })
  it("In order page, On clicking support should reach to the support page if issue is open",()=>{
    cy.visit("https://www.bluelionlifestyle.com/user-orders")
    dashbaord_action.supportVisibility()
    dashbaord_action.supportClick()
  })
  
  
})