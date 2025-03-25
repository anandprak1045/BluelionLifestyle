import { formatDateForCypress } from "../../cypress/support/dateutils";

const dashboard_element = require("../PageElements/DashboardElement.json")

export class dashboardPageAction {
    sidebarDashboardVisibility() {
        cy.xpath(dashboard_element.DashboardLocator.sidebarDashboard)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The side bar of dashboard is visible on the order detail page.');
            })
    }

    orderTextVisibility() {
        cy.get(dashboard_element.DashboardLocator.orderText)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The order text is visible on the order detail page.');
            })
    }

    orders_ViewAll_click() {
        cy.get(dashboard_element.DashboardLocator.ordersViewAll)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The view all text and button is visible on the order detail page.');
            })
 }
    affiliateProgramTextVisibility() {
        cy.xpath(dashboard_element.DashboardLocator.affiliateProgramTextVisibility)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The affiliate program text is visible on the order detail page.');
            })
    }
    affiliate_program_ViewAll() {
        cy.get(dashboard_element.DashboardLocator.affiliate_program_ViewAll)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The view all text and button is visible and clickable in the affiliate program .');
            })
 }
 support_Text_Visibility() {
    cy.get(dashboard_element.DashboardLocator.support_Text_Visibility)
        .should('exist')
        .and('be.visible')
        .then(() => {
            cy.log('The Support text is visible on the dashboard overview.');
        })
}
support_ViewAll() {
    cy.xpath(dashboard_element.DashboardLocator.support_ViewAll)
        .should('exist')
        .and('be.visible')
        .click({ force: true })
        .then(() => {
            cy.log('The view all text and button is visible and clickable in the affiliate program .');
        })
}
setting_Text_Visibility() {
    cy.get(dashboard_element.DashboardLocator.setting_Text_Visibility)
        .should('exist')
        .and('be.visible')
        .then(() => {
            cy.log('The setting text is visible on the dashboard overview.');
        })
}
setting_ViewAll() {
    cy.get(dashboard_element.DashboardLocator.setting_ViewAll)
        .should('exist')
        .and('be.visible')
        .click({ force: true })
        .then(() => {
            cy.log('The view all text and button is visible and clickable in the affiliate program .');
        })
}
    ordersTextVisibility() {
        cy.get(dashboard_element.DashboardLocator.ordersTextVisibility)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The order text is visible on the order detail page.');
            })
    }
    waiting_for_payment_message_visibility() {
        cy.get(dashboard_element.DashboardLocator.waiting_for_payment_message)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The payment status is visible on the order detail page.');
            })
    }
    waitingForPaymentMessageDateVisibility() {
        cy.get(dashboard_element.DashboardLocator.waiting_for_payment_date_message)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The payment message date is visible on the order detail page.');
            })
    }
    productAmountVisibility() {
        cy.get(dashboard_element.DashboardLocator.productAmountVisibility)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The product amount is visible on the order detail page.');
            })
    }
    shipToUserVisibility() {
        cy.get(dashboard_element.DashboardLocator.shipToUser)
            .should('exist')
            .and('be.visible')
    }
    viewInvoiceVisibility() {
        cy.xpath(dashboard_element.DashboardLocator.viewInvoiceElement)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The invoice is visible on the order detail page.');
            })
    }
    viewInvoiceClick() {
        cy.xpath(dashboard_element.DashboardLocator.viewInvoiceElement)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The invoice button is visible on the order detail page.');
            })


    }
    viewOrderDetailsVisibility() {
        cy.get(dashboard_element.DashboardLocator.viewOrderDetailsElement)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The view order is visible on the order detail page.');
            })
    }
    viewOrderDetailsClick() {
        cy.get(dashboard_element.DashboardLocator.viewOrderDetailsElement)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The view order button is visible on the order detail page.');
            })

    }
    trackOrderVisibility() {
        cy.get(dashboard_element.DashboardLocator.trackOrderElement)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The track order is visible on the order detail page.');
            })
    }
    trackOrderClick() {
        cy.get(dashboard_element.DashboardLocator.trackOrderElement)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The track order button is visible on the order detail page.');
            })

    }
    supportVisibility() {
        cy.get(dashboard_element.DashboardLocator.supportElement)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The support is visible on the order detail page.');
            })
    }
    supportClick() {
        cy.get(dashboard_element.DashboardLocator.supportElement)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The support button is visible on the order detail page.');
            })

    }
    createNewTicketTextVisibility() {
        cy.get(dashboard_element.DashboardLocator.createNewTicketTextVisibility)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The craete new ticket is visible.');
            })
    }
    subjectTextFeild(Subject) {
        cy.get(dashboard_element.DashboardLocator.subjectTextFeild)
            // .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The subject text is visible.');
            })
            .type(Subject)
    }
    descriptionTextFeild(Description) {
        cy.get(dashboard_element.DashboardLocator.descriptionTextFeild)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The description text feild is visible.');
            })
            .type(Description)
    }
    submitButton() {
        cy.get(dashboard_element.DashboardLocator.submitButtonElement)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The submit button is visible.');
            })

    }
    replyDescription(ReplyDescription) {
        cy.get(dashboard_element.DashboardLocator.replyDescription)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The reply description text feild is visible.');
            })
            .type(ReplyDescription)
    }
    replyDescriptionReplyButton() {
        cy.get(dashboard_element.DashboardLocator.replyDescriptionSendButton)
            .should('exist')
            .click({ force: true })
            .then(() => {
                cy.log('The reply description button is visible.');
            })

    }
    closeChat() {
        cy.get(dashboard_element.DashboardLocator.closeChat)
            .click({ force: true })
            .should('exist').then(() => {
                cy.log('The close chat icon is visible and clickable.');
            })

    }
    SupportMenuBar() {
        cy.xpath(dashboard_element.DashboardLocator.SupportMenuBar)
            .should('exist')
            .click({ force: true })
            .then(() => {
                cy.log('The support menu bar is visible.');
            })

    }
    SupportTitle() {
        cy.get(dashboard_element.DashboardLocator.SupportTitle)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The title is visible.');
            })
    }
    OpenStatusMessage() {
        cy.get(dashboard_element.DashboardLocator.OpenStatusMessage)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The open status message is visible.');
            })
    }
    ViewChat() {
        cy.get(dashboard_element.DashboardLocator.ViewChat)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The chat is visible.');
            })

    }
    CheckStatus() {
        cy.get(dashboard_element.DashboardLocator.OpenStatus)
            .invoke('text')
            .then((status) => {
                if (status.trim() === 'Open') {
                    cy.get(dashboard_element.DashboardLocator.OpenStatus)
                        .click();

                    cy.get(dashboard_element.DashboardLocator.ResolvedStatus)
                        .contains('Resolved')
                        .click();
                }
            });
    }
    // supportErrorMessage(){
    //     cy.xpath(dashboard_element.DashboardLocator.supportErrorMessage)
    //     .should('exist')
    //     .and('be.visible')
    // }

    supportErrorMessage() {
        cy.xpath(dashboard_element.DashboardLocator.supportErrorMessage)
            .should('exist', { timeout: 5000 })  // Increase timeout if necessary
            .and('be.visible')
            .then(($el) => {
                // If the element exists and is visible, log its text
                cy.log('Support error message is visible:', $el.text());
            });
    }
    CancelOrderTab() {
        cy.get(dashboard_element.DashboardLocator.CancelOrderTab)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The cancel order tab is visible.');
            })

    }
    // NoOrderFoundCancelledOrder(){
    //     cy.get(dashboard_element.DashboardLocator.NoOrderFoundCancelledOrder())
    //     .should('exist')
    //     .and('be.visible')
    // }

    NoOrderFoundCancelledOrder() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.NoOrderFoundCancelledOrder).length > 0) {
                cy.get(dashboard_element.DashboardLocator.NoOrderFoundCancelledOrder)
                    .should('exist')
                    .and('be.visible')
                    .and('contain', 'No Records Found');

                cy.log('No Records Found');

            } else {

                cy.get(dashboard_element.DashboardLocator.CancelledOrderItems)
                    .should('exist')
                    .and('be.visible');

                cy.log('Canceled orders are displayed.');
            }
        });
    }
    CancelledOrderDate() {
        cy.get(dashboard_element.DashboardLocator.CancelledOrderDate)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The cancel order date is visible.');
            })
    }
    CancelledOrderTotal() {
        cy.get(dashboard_element.DashboardLocator.CancelledOrderTotal)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The cancel order total is visible.');
            })
    }
    CancelledOrderShipTo() {
        cy.get(dashboard_element.DashboardLocator.CancelledOrderShipTo)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The cancel order ship to is visible.');
            })
    }
    CancelledOrderNumber() {
        cy.get(dashboard_element.DashboardLocator.CancelledOrderNumber)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The cancel order number is visible.');
            })
    }
    CancelledOrderItemImage() {
        cy.get(dashboard_element.DashboardLocator.CancelledOrderItemImage)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The cancel order item image is visible.');
            })
    }
    CancelledOrderViewOtherDetails() {
        cy.get(dashboard_element.DashboardLocator.CancelledOrderViewOtherDetails)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The view other details on cancell order page is visible.');
            })

    }
    CancelledOrderViewDetailOrdersId() {
        cy.get(dashboard_element.DashboardLocator.CancelledOrderViewDetailOrdersId)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The view detail order id is on cancel order page is visible.');
            })
    }
    OrderCancelledByUserStatus() {
        cy.get(dashboard_element.DashboardLocator.OrderCancelledByUserStatus)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The order cancel by user status is visible.');
            })
    }
    CancelledOrderViewInvoice() {
        cy.get(dashboard_element.DashboardLocator.CancelledOrderViewInvoice)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The view invoice on cancel order page is visible.');
            })

    }
    ReplacedItemTab() {
        cy.get(dashboard_element.DashboardLocator.ReplacedItemTab)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The view order details on cancel order page is visible.');
            })

    }
    ReplacedRequestedDate() {
        cy.get(dashboard_element.DashboardLocator.ReplacedRequestedDate)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The replace request date is visible.');
            })
    }
    ReplacedTotalAmount() {
        cy.get(dashboard_element.DashboardLocator.ReplacedTotalAmount)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The replace total amount is visible.');
            })
    }
    ReplacedOrderShipTo() {
        cy.get(dashboard_element.DashboardLocator.ReplacedOrderShipTo)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The ship to text on replace order is visible.');
            })
    }
    ReplacedOrderViewOrder() {
        cy.get(dashboard_element.DashboardLocator.ReplacedOrderViewOrder)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The view order on replace order is visible.');
            })

    }
    OrderID() {
        cy.get(dashboard_element.DashboardLocator.OrderID)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The order id on replace order page is visible.');
            })
    }
    OrderDetailViewInvoice() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailViewInvoice)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('The invoice on replace order page is visible.');
            })

    }
    OrderDetailDate() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailDate)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The detail date on replace order page is visible.');
            })
    }
    OrderDetailTotalItems() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailTotalItems)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The detail total item is visible on the order detail page.');
            })
    }
    OrderDetailTotalItem() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailTotalItem)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The total item is visible on the order detail page.');
            })
    }
    OrderDetailShippingAddress() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailShippingAddress)
            .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('The shipping address is visible on the order detail page.');
            })
    }
    OrderDetailProductImage() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailProductImage)
            .should('exist')
            .and('be.visible')
            .log('The product image is visible on the order detail page.')
    }
    OrderDetailProductName() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailProductName)
            .should('exist')
            .and('be.visible')
            .log('The product name is visible on the order detail page.')
    }
    OrderDetailProductSize() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailProductSize)
            .should('exist')
            .and('be.visible')
            .log('The product size is visible on the order detail page.')
    }
    OrderDetailProductQuantity() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailProductQuantity)
            .should('exist')
            .and('be.visible')
            .log('The product quantity is visible on the order detail page.')
    }
    OrderDetailProductPrice() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailProductPrice)
            .should('exist')
            .and('be.visible')
            .log('The product price is visible on the order detail page.')
    }
    OrderDetailSubTotal() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailSubTotal)
            .should('exist')
            .and('be.visible')
            .log('The sub total is visible on the order detail page.')
    }
    OrderDetailShippingHandling() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailShippingHandling)
            .should('exist')
            .and('be.visible')
            .log('The shipping Handling is visible on the order detail page.')
    }
    OrderDetailProductTotalPrice() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailProductTotalPrice)
            .should('exist')
            .and('be.visible')
            .log('The total product price is visible on the order detail page.')
    }

    OrderDetailOrderDeliveredStatus() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailOrderDeliveredStatus)
            .should('exist')
            .and('be.visible')
            .log('The ordered delivered status is visible on the order detail page.')
    }
    ReplacedOrderTrackOrder() {
        cy.get(dashboard_element.DashboardLocator.ReplacedOrderTrackOrder)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('The track order is visible and clicked on replacement track order page.')
    }
    OrderDetailOrderDeliveredStatus() {
        cy.get(dashboard_element.DashboardLocator.OrderDetailOrderDeliveredStatus)
            .should('exist')
            .and('be.visible')
            .log('The ordered delivered status is visible on replacement track order page.')
    }
    ReplacedOrderTrackOrder() {
        cy.get(dashboard_element.DashboardLocator.ReplacedOrderTrackOrder)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('The track order is visible on the replacement track order page.')
    }
    ReplacementTrackOrderRequestId() {
        cy.get(dashboard_element.DashboardLocator.ReplacementTrackOrderRequestId)
            .should('exist')
            .and('be.visible')
            .log('The requested id is visible on the replacement track order page.')
    }
    ReplacementTrackOrderRequestDate() {
        cy.xpath(dashboard_element.DashboardLocator.ReplacementTrackOrderRequestDate)
            .should('exist')
            .and('be.visible')
            .log('The requested id is visible on the replacement track order page.')
    }
    ReplacementTrackOrderDeliveryStatus() {
        cy.get(dashboard_element.DashboardLocator.ReplacementTrackOrderDeliveryStatus)
            .should('exist')
            .and('be.visible')
            .log('The replacement track order is visible on the replacement track order page.')
    }
    ReplacementTrackOrderAllDeliveryStatus() {
        cy.contains('Order Confirm').should('be.visible');
        cy.contains('Order Processing').should('be.visible');
        cy.contains('Order Shipped').should('be.visible');
        cy.contains('Out For Delivery').should('be.visible');
        cy.contains('Order Delivered').should('be.visible');
    }
    ReplacementTrackOrderSupport() {
        cy.get(dashboard_element.DashboardLocator.ReplacementTrackOrderSupport)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('The replacement support is visible and clickable on the replacement track order page.')
    }
    ReplacementTrackOrderMessage(ReplyDescription) {
        cy.get(dashboard_element.DashboardLocator.ReplacementTrackOrderMessage).type(ReplyDescription)
    }

    // Affiliate Program

    AffiliateProgramText() {
        cy.xpath(dashboard_element.DashboardLocator.AffiliateProgramText)
            .should('exist')
            .and('be.visible')
            .log('The affiliate program heading is visible.')
    }
    AffiliateProgram_ViewAll() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgram_ViewAll)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('The affiliate program heading is visible.')
    }
    AffiliateProgram_Heading() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgram_Heading)
            .should('exist')
            .and('be.visible')
            .log('The affiliate program heading is visible.')
    }
    AffiliateProgramOffer() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramOffer)
            .should('exist')
            .and('be.visible')
            .log('The affiliate program heading is visible.')
    }
    AffiliateProgramCreateDiscount() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramCreateDiscount)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('The affiliate program heading is visible.')
    }
    AffiliateCreateDiscountCouponCode() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateCreateDiscountCouponCode).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateCreateDiscountCouponCode)
                    .should('be.visible')
                    .log('The affiliate program discount coupons is visible.')
            } else {
                cy.log('The affiliate program discount coupons is NOT visible.')
            }
        })
    }
    AffiliateCreateDiscountPercentage(AffiliatePercentage) {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateCreateDiscountPercentage).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateCreateDiscountPercentage)
                    .should('be.visible')
                    .clear()
                    .type(AffiliatePercentage)
                    .log(`Typed ${AffiliatePercentage} in the affiliate discount percentage field.`)
            } else {
                cy.log('The affiliate discount percentage field is NOT visible.');
            }
        })
    }
    // AffiliateCraeteDiscountMaxNumberOfPeopleUse(AffiliateMaxNoOfPeopleUse) {
    //     cy.get('body').then(($body) => {
    //         if ($body.find(dashboard_element.DashboardLocator.AffiliateCraeteDiscountMaxNumberOfPeopleUse).length > 0) {
    //             cy.get(dashboard_element.DashboardLocator.AffiliateCraeteDiscountMaxNumberOfPeopleUse)
    //                 .should('be.visible')
    //                 .clear()
    //                 .type(AffiliateMaxNoOfPeopleUse)
    //                 .log(`Typed ${AffiliateMaxNoOfPeopleUse} in the affiliate Maximum number of people use field.`)
    //         } else {
    //             cy.log('The affiliate maximum number of people use is NOT visible.')
    //         }
    //     })
    // }

    AffiliateCraeteDiscountMaxNumberOfPeopleUse(AffiliateMaxNoOfPeopleUse) {
        cy.get(dashboard_element.DashboardLocator.AffiliateCraeteDiscountMaxNumberOfPeopleUse).type(AffiliateMaxNoOfPeopleUse)
    }

    CreateDiscountStartDate(formattedDate) {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.CreateDiscountStartDate).length > 0) {
                cy.get(dashboard_element.DashboardLocator.CreateDiscountStartDate)
                    .should('be.visible')
                    .clear()
                    .type(formattedDate)
                    .log(`Typed ${formattedDate} in the affiliate start date field.`)
            } else {
                cy.log('The affiliate start date is NOT visible.')
            }
        })
    }
    CreateDiscountEndDate(affiliateEndDate) {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.createDiscountEndDate).length > 0) {
                cy.get(dashboard_element.DashboardLocator.createDiscountEndDate)
                    .should('be.visible')
                    .clear()
                    .type(affiliateEndDate)
                    .log(`Typed ${affiliateEndDate} in the affiliate start date field.`)
            } else {
                cy.log('The affiliate start date is NOT visible.')
            }
        })
    }
    CreateDiscountSaveButton() {
        cy.get(dashboard_element.DashboardLocator.CreateDiscountSaveButton)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('The affiliate discount is saved.')
    }
    AffiliateDiscountSuccessToastMessage() {
        cy.get(dashboard_element.DashboardLocator.AffiliateDiscountSuccessToastMessage, { timeout: 2000 })
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text).to.include('Success');
            })
    }
    AffiliateProgramEditButton() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramEditButton)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('Affiliate program edit button is visible and clickable')
    }
    AffiliateProgramEditSuccessToastMessage() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramEditSuccessToastMessage)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text).to.include('success')
            })
    }
    AffiliateProgramReferAndEarnHeading() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnHeading).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnHeading)
                    .should('exist')
                    .and('be.visible')
                    .log(`Refer and earn heading in Affiliate program is visible.`)
            } else {
                cy.log('Refer and earn heading in Affiliate program is not visible.')
            }
        })
    }
    AffiliateProgramReferAndEarnDescription() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnDescription).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnDescription)
                    .should('exist')
                    .and('be.visible')
                    .log(`Refer and earn description in Affiliate program is visible.`)
            } else {
                cy.log('Refer and earn description in Affiliate program is not visible.')
            }
        })
    }
    AffilaiteProgramReferAndEarnURL() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffilaiteProgramReferAndEarnURL).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffilaiteProgramReferAndEarnURL)
                    .should('exist')
                    .and('be.visible')
                    .log(`Refer and earn URL in Affiliate program is visible.`)
            } else {
                cy.log('Refer and earn URL in Affiliate program is not visible.')
            }
        })
    }
    AffiliateProgramReferAndEarnURLCopy() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnURLCopy)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('Refer and earn URL copy button in Affiliate program is visible and clickable.')
    }
    AffiliateProgramReferAndEarnURLCopySuccessMeassage() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnURLCopySuccessMeassage)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text).to.include('success')
            })
    }
    AffiliateProgramReferAndEarnURLShareButton() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnURLShareButton)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('Refer and earn URL share button in Affiliate program is visible and clickable.')
    }
    AffiliateProgramReferAndEarnShareHeading() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnShareHeading).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnShareHeading)
                    .should('exist')
                    .and('be.visible')
                    .log(`Refer and earn URL share heading in Affiliate program is visible.`)
            } else {
                cy.log('Refer and earn URL share heading in Affiliate program is not visible.')
            }
        })
    }
    AffiliateProgramReferAndEarnShareDescription() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnShareDescription).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnShareDescription)
                    .should('exist')
                    .and('be.visible')
                    .log(`Refer and earn URL share description in Affiliate program is visible.`)
            } else {
                cy.log('Refer and earn URL share description in Affiliate program is not visible.')
            }
        })
    }
    AffiliateProgramReferAndEarnShareCouponsCopy() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnShareCouponsCopy)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('Refer and earn URL share copy button in Affiliate program is visible and clickable.')
    }
    AffiliateProgramReferAndEarnShareCouponsCopySuccessMessage() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramReferAndEarnShareCouponsCopySuccessMessage)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text).to.include('success')
            })
    }
    AffiliateProgramUpcomingBalanceIcon() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceIcon)
            .should('exist')
            .and('be.visible')
            .log('Upcoming balance icon in affiliate program is visible.')
    }
    AffiliateProgramUpcomingBalanceHeading() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHeading).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHeading)
                    .should('exist')
                    .and('be.visible')
                    .log(`Upcoming balance heading in Affiliate program is visible.`)
            } else {
                cy.log('Upcoming balance heading in Affiliate program is not visible.')
            }
        })
    }
    AffiliateProgramUpcomingBalanceVisible() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceVisible).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceVisible)
                    .should('exist')
                    .and('be.visible')
                    .log(`Upcoming balance in Affiliate program is visible.`)
            } else {
                cy.log('Upcoming balance in Affiliate program is not visible.')
            }
        })
    }
    AffiliateProgramWalletBalanceIcon() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramWalletBalanceIcon)
            .should('exist')
            .and('be.visible')
            .log('Wallet balance icon in affiliate program is visible.')
    }
    AffiliateProgramWalletbalanceHeading() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramWalletbalanceHeading).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramWalletbalanceHeading)
                    .should('exist')
                    .and('be.visible')
                    .log(`Wallet balance heading in Affiliate program is visible.`)
            } else {
                cy.log('Wallet balance heading in Affiliate program is not visible.')
            }
        })
    }
    AffiliateProgramWalletBalanceVisible() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramWalletBalanceVisible).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramWalletBalanceVisible)
                    .should('exist')
                    .and('be.visible')
                    .log(`Wallet balance in Affiliate program is visible.`)
            } else {
                cy.log('Wallet balance in Affiliate program is not visible.')
            }
        })
    }
    AffiliateProgramUpcomingWalletClick() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingWalletClick)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('Upcoming wallet in Affiliate program is clickable.')
    }
    AffiliateProgramUpcomingBalanceHistoryTitle() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryTitle).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryTitle)
                    .should('exist')
                    .and('be.visible')
                    .log(`Upcoming wallet balance heading in Affiliate program is visible.`)
            } else {
                cy.log('Upcoming wallet balance heading in Affiliate program is not visible.')
            }
        })
    }
    AffiliateProgramUpcomingBalanceHistorySearchButton() {
        cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistorySearchButton)
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .log('Search button in upcoming balance history in Affiliate program is visible and clickable.')
    }
    AffliateProgramUpcomingBalanceHistoryFromDate(affiliateFromDate) {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffliateProgramUpcomingBalanceHistoryFromDate).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffliateProgramUpcomingBalanceHistoryFromDate)
                    .should('be.visible')
                    .clear()
                    .type(affiliateFromDate)
                    .log(`Typed ${affiliateFromDate} fromdate in upcoming balance history in the affiliate program is typed.`)
            } else {
                cy.log('ToDate in upcoming balance history in the affiliate program is not typed.')
            }
        })
    }
    AffiliateProgramUpcomingBalanceHistoryToData(affiliateToDate) {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryToData).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryToData)
                    .should('be.visible')
                    .clear()
                    .type(affiliateToDate)
                    .log(`Typed ${affiliateToDate} ToDate in upcoming balance history in the affiliate program is typed.`)
            } else {
                cy.log('ToDate in upcoming balance history in the affiliate program is not typed.')
            }
        })
    }

    AffiliateProgramUpcomingBalanceHistoryDataAvailiablityCheck() {
        cy.get('body').then(($body) => {
            if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryOrderNumber).length > 0) {
                cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryOrderNumber)
                    .should('exist')
                    .and('be.visible')
                    .log(`Order number in Upcoming balance history in Affiliate program is visible.`)
    
                // Check date (if available)
                cy.get('body').then(($body) => {
                    if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistorydate).length > 0) {
                        cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistorydate)
                            .should('exist')
                            .and('be.visible')
                            .log(`Date is visible.`)
                    } else {
                        cy.log('Balance amount in Upcoming balance history in Affiliate program is visible.')
                    }
                })
    
                // Check amount (if available)
                cy.get('body').then(($body) => {
                    if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryAmount).length > 0) {
                        cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryAmount)
                            .should('exist')
                            .and('be.visible')
                            .log(`Amount is visible in Upcoming balance history in Affiliate program is visible.`)
                    }
                })
                // check status 
                cy.get('body').then(($body) => {
                    if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryStatus).length > 0) {
                        cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryStatus)
                            .should('exist')
                            .and('be.visible')
                            .log(`Status is visible in Upcoming balance history in Affiliate program is visible.`)
                    }
                })
    
            } else {
                // Check if "No Record Found" message is displayed
                if ($body.find(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryNoRecoredFound).length > 0) {
                    cy.get(dashboard_element.DashboardLocator.AffiliateProgramUpcomingBalanceHistoryNoRecoredFound)
                        .should('exist')
                        .and('be.visible')
                        .log(`No record found in Upcoming balance history in Affiliate program is visible.`);
                } else {
                    cy.log('No record found in Upcoming balance history in Affiliate program is not visible.');
                }
            }
        })
    }
    
}
