const searchAndBuy_element = require("../PageElements/searchAndBuy.json")

export class searchAndBuyAction {

  // searchFeildElementType(productName) {
  //   cy.xpath(searchAndBuy_element.searchAndBuyLocators.searchFeild).clear({ force: true }).type(productName, { force: true })
  // }

  searchFeildElementType(productName) {
    if (productName && productName.trim().length > 0) {
      cy.xpath(searchAndBuy_element.searchAndBuyLocators.searchFeild)
        .clear({ force: true })
        .type(productName, { force: true });
    } else {
      throw new Error("Invalid product name. Please provide a valid product name for the search.");
    }
  }


  // searchElementSeleceted() {
  //   cy.xpath(searchAndBuy_element.searchAndBuyLocators.searchElement).first().click({ force: true })
  // }

  searchElementSeleceted() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.searchElement)
      .should('exist')
      .then((elements) => {
        if (elements.length > 0) {
          cy.wrap(elements).first().click({ force: true });
        } else {
          throw new Error("No search elements found to select.");
        }
      });
  }


  // cartClick() {
  //   cy.get(searchAndBuy_element.searchAndBuyLocators.cartElement).debug().click()
  // }

  cartClick() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.cartElement)
      .should('exist')
      .and('be.visible')
      .debug()
      .click();
  }


  // incrementProductInCart(){
  //   cy.xpath(searchAndBuy_element.searchAndBuyLocators.incrementProduct).debug().click({ force: true })
  // }

  incrementProductInCart() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.incrementProduct)
      .should('exist')
      .and('be.visible')
      .debug()
      .click({ force: true });
  }

  // checkboxCartClick(){
  //   cy.xpath(searchAndBuy_element.searchAndBuyLocators.checkboxCart).debug().click({ force: true })
  // }

  checkboxCartClick() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.checkboxCart)
      .should('exist')
      .then(($checkbox) => {
        if (!$checkbox.is(':checked')) {
          cy.wrap($checkbox).click({ force: true });
        } else {
          cy.log('Checkbox is already checked');
        }
      });
  }

  // checkoutProductClick(){
  //  cy.get(searchAndBuy_element.searchAndBuyLocators.checkoutProduct).click({ force: true })
  // }

  checkoutProductClick() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.checkoutProduct)
      .should('exist')
      .and('be.visible')
      .click({ force: true });
  }



  // addNewAddressClick(){
  //   cy.xpath(searchAndBuy_element.searchAndBuyLocators.addNewAddress).click({ force: true })
  // }

  addNewAddressClick() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.addNewAddress)
      .should('exist')
      .and('be.visible')
      .click({ force: true });
  }


  // addressLine1(addressline1){
  //   cy.get(searchAndBuy_element.searchAndBuyLocators.addressLine1).clear({ force: true }).type(addressline1,{ force: true })
  // }

  addressLine1(addressline1) {
    if (addressline1 && addressline1.trim().length > 0) {
      cy.get(searchAndBuy_element.searchAndBuyLocators.addressLine1)
        .should('exist')
        .and('be.visible')
        .clear({ force: true })
        .type(addressline1, { force: true });
    } else {
      throw new Error("Invalid address line 1. Please provide a valid value.");
    }
  }




  // addressLine2(addressline2){
  //   cy.get(searchAndBuy_element.searchAndBuyLocators.addressLIne2).clear({ force: true }).type(addressline2,{ force: true })
  // }

  addressLine2(addressline2) {
    if (addressline2 && addressline2.trim().length > 0) {
      cy.get(searchAndBuy_element.searchAndBuyLocators.addressLIne2)
        .should('exist')
        .and('be.visible')
        .clear({ force: true })
        .type(addressline2, { force: true });
    } else {
      throw new Error("Invalid address line 2. Please provide a valid value.");
    }
  }




  // city(citydata){
  //   cy.get(searchAndBuy_element.searchAndBuyLocators.city).clear({ force: true }).type(citydata,{ force: true })
  // }

  city(citydata) {
    if (citydata && citydata.trim().length > 0) {
      cy.get(searchAndBuy_element.searchAndBuyLocators.city)
        .should('exist')
        .and('be.visible')
        .clear({ force: true })
        .type(citydata, { force: true });
    } else {
      throw new Error("Invalid city data. Please provide a valid city name.");
    }
  }



  // postalCode(postalcode){
  //   cy.get(searchAndBuy_element.searchAndBuyLocators.postalCode).clear({ force: true }).type(postalcode,{ force: true })
  // }

  postalCode(postalcode) {
    if (postalcode && postalcode.trim().length > 0) {
      cy.get(searchAndBuy_element.searchAndBuyLocators.postalCode)
        .should('exist')
        .and('be.visible')
        .clear({ force: true })
        .type(postalcode, { force: true });
    } else {
      throw new Error("Invalid postal code. Please provide a valid postal code.");
    }
  }


  // country(countrydata){
  //   cy.get(searchAndBuy_element.searchAndBuyLocators.country).select(countrydata)
  // }

  country(countrydata) {
    if (countrydata && countrydata.trim().length > 0) {
      cy.get(searchAndBuy_element.searchAndBuyLocators.country)
        .should('exist')
        .and('be.visible')
        .select(countrydata);
      throw new Error("Invalid country name. Please provide a valid country name.");
    }
  }


  // saveAddress(){
  //   cy.get(searchAndBuy_element.searchAndBuyLocators.saveAddress).click({ force: true })
  // }

  saveAddress() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.saveAddress)
      .should('exist')
      .and('be.visible')
      .click({ force: true });
  }


  // placeOrder(){
  //   cy.get(searchAndBuy_element.searchAndBuyLocators.orderPlace).click()
  // }

  placeOrder() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.orderPlace)
      .should('exist')
      .and('be.visible')
      .click({ force: true });
  }
  addInWishlist() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.addToWishlist)
      .should('exist')
      .and('be.visible')
      .click({ force: true });
  }
  clickWishlist() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.goToWishlist)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
  }
  removeWishlist() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.removeFromWishlist)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
  }
  emptyWishlist() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.emptyWishlistTest)
      .should('exist')
      .and('be.visible')
  }
  addCartFromWishlist() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.addCartWishlist)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
  }
  goToCart() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.goCart)
      .should('exist')
      .and('be.exist')
      .click({ force: true })
  }
  viewCartProduct() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.cartProductName)
      .should('exist')
      .and('be.visible')
  }
  goToViewCart() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.viewCart)
      .should('exist')
      // .and('be.visible')
      .click({ force: true })
  }
  checkVisibility() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.cartVisible)
      .should('exist')
      .then(($checkbox) => {
        if (!$checkbox.is(':checked')) {
          cy.wrap($checkbox).click({ force: true });
        } else {
          cy.log('Checkbox is already checked');
        }
      });
  }
  continueShoppingFromCart() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.continueShopping)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
  }
  addGPSToCart() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.addGPS)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
  }
  gpsVisibilityCart() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.gpsVisibility)
      .should('exist')
  }
  addPowerbank() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.addPowerBank)
      .should('exist')
      .click({ force: true })
  }
  powerbankVisibilityCart() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.powerbankVisibility)
      .should('exist')
  }
  yourCartProductAirpodsNameVisibilityTest() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.yourCartProductAirpodsNameVisibility)
      .should('exist')
      .and('be.visible')
  }
  yourCartProductAirpodsImageVisibilityTest() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.yourCartProductAirpodsImage)
      .should('exist')
      .and('be.visible')
  }
  yourCartProductGPSNameVisibilityTest() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.yourCartProductGPSName)
      .should('exist')
      .and('be.visible')
  }
  yourCartProductGPSImageVisibilityTest() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.yourCartProductGPSImage)
      .should('exist')
      .and('be.visible')
  }
  yourCartProductPowerbankNameVisibilityTest() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.yourCartProductPowerbankName)
      .should('exist')
      .and('be.visible')
  }
  yourCartProductPowerbankImageVisibilityTest() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.yourCartProductPowerbankImage)
      .should('exist')
      .and('be.visible')
  }
  proceedToCheckoutButton() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.proceedToCheckout)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
  }
  changeAddressText() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.changeAddressText)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
  }
  changeAddressRadioButton() {
    cy.get(searchAndBuy_element.searchAndBuyLocators.changeAddress)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
  }
  orderPlacedButton() {
    cy.xpath(searchAndBuy_element.searchAndBuyLocators.orderPlaced)
      .should('exist')
      .and('be.visible')
      .click({ force: true })
  }
  // removeChangeAddressDialogueBoxClick(){
  //   cy.get(searchAndBuy_element.searchAndBuyLocators.removeChangeAddressDialogueBox)
  //   .should('exist')
  //   .and('be.visible')
  //   .click({force:true})
  // }

  removeChangeAddressDialogueBoxClick() {
    // Check if radio button is selected
    cy.get('input[type="radio"]').first().should('be.checked').then(($radio) => {
        if ($radio.is(':checked')) {
            cy.get(searchAndBuy_element.searchAndBuyLocators.removeChangeAddressDialogueBox)
              .should('exist')
              .and('be.visible')
              .click({ force: true });
        } else {
            cy.log('Radio button is not selected, skipping click.');
        }
    });
}

}