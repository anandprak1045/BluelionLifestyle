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
  it("Replaced Orders",()=>{
        cy.visit("https://www.bluelionlifestyle.com/user-dashboard")
        dashbaord_action.sidebarDashboardVisibility()
        dashbaord_action.orderTextVisibility()
        dashbaord_action.orders_ViewAll_click()
        dashbaord_action.ReplacedItemTab()
        dashbaord_action.ReplacedRequestedDate()
        dashbaord_action.ReplacedTotalAmount()
        dashbaord_action.ReplacedOrderShipTo()
        dashbaord_action.ReplacedOrderViewOrder()
        dashbaord_action.OrderID()
     //   dashbaord_action.OrderDetailViewInvoice()
        dashbaord_action.OrderDetailDate()
        dashbaord_action.OrderDetailTotalItems()
        dashbaord_action.OrderDetailTotalItem()
        dashbaord_action.OrderDetailShippingAddress()
        dashbaord_action.OrderDetailProductImage()
        dashbaord_action.OrderDetailProductName()
        dashbaord_action.OrderDetailProductSize()
        dashbaord_action.OrderDetailProductQuantity()
        dashbaord_action.OrderDetailProductPrice()
        dashbaord_action.OrderDetailSubTotal()
        dashbaord_action.OrderDetailShippingHandling()
        dashbaord_action.OrderDetailProductTotalPrice()
        dashbaord_action.OrderDetailOrderDeliveredStatus()
      })
    it("Replaced Orders - Track order",()=>{
      cy.visit("https://www.bluelionlifestyle.com/replaced-orders")
      dashbaord_action.ReplacedOrderTrackOrder()
      dashbaord_action.ReplacementTrackOrderRequestId()
      dashbaord_action.ReplacementTrackOrderRequestDate()
      dashbaord_action.ReplacementTrackOrderDeliveryStatus()
      dashbaord_action.ReplacementTrackOrderAllDeliveryStatus()
    })
    it("Replaced Orders - Support", () => {
      cy.visit("https://www.bluelionlifestyle.com/replaced-orders")
      dashbaord_action.ReplacementTrackOrderSupport()
      cy.fixture('orderSupportData').then((data) => {
        dashbaord_action.ReplacementTrackOrderMessage(data.ReplyDescription)
        dashbaord_action.replyDescriptionReplyButton()
        dashbaord_action.closeChat()
      })
    })
})