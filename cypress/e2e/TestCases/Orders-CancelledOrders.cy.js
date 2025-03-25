import { dashboardPageAction } from "../../../PageObjects/PageActions/dashboardPageAction";

const dashbaord_action = new dashboardPageAction()

describe("dashboard Test", function () {
  beforeEach(() => {
    cy.loginBlueLion("7676773398","1","1","1","1","John", "Doe", "john.doe@example.com")
    cy.visit("https://www.bluelionlifestyle.com/user-dashboard")
  })
  it("Cancelled Orders",()=>{
    cy.visit("https://www.bluelionlifestyle.com/user-dashboard")
    dashbaord_action.sidebarDashboardVisibility()
    dashbaord_action.orderTextVisibility()
    dashbaord_action.orders_ViewAll_click()
    dashbaord_action.CancelOrderTab()
    dashbaord_action.NoOrderFoundCancelledOrder()
    dashbaord_action.CancelledOrderDate()
    dashbaord_action.CancelledOrderTotal()
    dashbaord_action.CancelledOrderShipTo()
    dashbaord_action.CancelledOrderNumber()
    dashbaord_action.CancelledOrderItemImage()
    dashbaord_action.CancelledOrderViewOtherDetails()
    dashbaord_action.CancelledOrderViewDetailOrdersId()
    dashbaord_action.OrderCancelledByUserStatus()
    dashbaord_action.CancelledOrderViewInvoice()
  })
})