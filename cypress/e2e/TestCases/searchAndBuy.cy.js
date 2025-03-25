import { searchAndBuyAction } from "../../../PageObjects/PageActions/searchAndBuyAction";
const searchAndBuy_Action = new searchAndBuyAction()

describe("Search and Buy Workflow", function () {
    beforeEach(() => {
      cy.loginBlueLionFromProductOrder("7676773398", "1", "1", "1", "1");
  });

  
    // it("should search for a product and add it to the cart", () => {
    //   cy.fixture("searchAndBuyData").then((data) => {
    //     cy.visit("https://www.bluelionlifestyle.com/cart/0");
  
    //     searchAndBuy_Action.searchFeildElementType(data.productName);
    //     searchAndBuy_Action.searchElementSeleceted(); 
    //     searchAndBuy_Action.cartClick();
  
    //     // Verify cart contains items
    //     cy.url().should("include", "/cart/0");
    //     cy.get(".cart-item").should("have.length.greaterThan", 0);
    //     cy.wait(3000)
    //     searchAndBuy_Action.incrementProductInCart()
    //     searchAndBuy_Action.checkboxCartClick()
    //     searchAndBuy_Action.checkoutProductClick() 
    //     cy.visit("https://www.bluelionlifestyle.com/checkout")
    //     cy.wait(3000)
    //     searchAndBuy_Action.addNewAddressClick({ timeout: 3000 })
    //     cy.fixture("searchAndBuyData").then((data)=> {
    //       searchAndBuy_Action.addressLine1(data.addressline1)
    //         searchAndBuy_Action.addressLine2(data.addressline2)
    //         searchAndBuy_Action.city(data.citydata)
    //         searchAndBuy_Action.postalCode(data.postalcode)
    //         searchAndBuy_Action.country(data.countrydata,{ timeout: 3000 })
    //         searchAndBuy_Action.saveAddress({ timeout: 3000 })
    //         searchAndBuy_Action.placeOrder()
    //      })
    //   })
    // })
    it("wishlist test",()=>{
      cy.fixture("searchAndBuyData").then((data)=>{
        cy.visit("https://www.bluelionlifestyle.com/cart/0");
        searchAndBuy_Action.searchFeildElementType(data.productName);
        searchAndBuy_Action.searchElementSeleceted();
        searchAndBuy_Action.addInWishlist()
        searchAndBuy_Action.clickWishlist()
        searchAndBuy_Action.removeWishlist()
        searchAndBuy_Action.emptyWishlist({ timeout: 3000 })
        cy.go(-1)
        searchAndBuy_Action.addInWishlist({ timeout: 3000 })
        searchAndBuy_Action.clickWishlist({ timeout: 3000 })
        searchAndBuy_Action.addCartFromWishlist({ timeout: 3000 })
        searchAndBuy_Action.goToCart({ timeout: 3000 })
        searchAndBuy_Action.goToViewCart()
        searchAndBuy_Action.continueShoppingFromCart()
        cy.wait(3000)
        searchAndBuy_Action.addGPSToCart()
        cy.wait(3000)
        searchAndBuy_Action.addPowerbank()
        searchAndBuy_Action.gpsVisibilityCart({ timeout: 3000 })
        searchAndBuy_Action.goToViewCart({ timeout: 3000 })
        searchAndBuy_Action.powerbankVisibilityCart()
        searchAndBuy_Action.yourCartProductAirpodsNameVisibilityTest()
        searchAndBuy_Action.yourCartProductAirpodsImageVisibilityTest()
        searchAndBuy_Action.yourCartProductAirpodsImageVisibilityTest()
        searchAndBuy_Action.yourCartProductGPSNameVisibilityTest()
        searchAndBuy_Action.yourCartProductGPSImageVisibilityTest()
        searchAndBuy_Action.yourCartProductPowerbankNameVisibilityTest()
        searchAndBuy_Action.yourCartProductPowerbankImageVisibilityTest()
        searchAndBuy_Action.proceedToCheckoutButton()
        searchAndBuy_Action.changeAddressRadioButton()
        searchAndBuy_Action.changeAddressText()
        searchAndBuy_Action.removeChangeAddressDialogueBoxClick()
        searchAndBuy_Action.orderPlacedButton()
      })
    })
  })
  