const landing_element = require("../PageElements/blueLionLandingPageElement.json")

export class blueLionLandingPageAction{

    blueLionIconImageVisibility(){
        cy.get(landing_element.landingPageElementLocators.blueLionIcon)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Blue lion icon is visible')
            } else {
                cy.log('Blue lion icon is not visible')
            }
        })
    }
    deliveryLocationIconVisibility(){
        cy.get(landing_element.landingPageElementLocators.deliveryLocationIcon)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Delivery location icon is visible')
            } else {
                cy.log('Delivery location icon is not visible')
            }
        })
    }
    deliveringLocationClick(){
        cy.get(landing_element.landingPageElementLocators.deliveringLocation)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Delivery location is visible and clickable')
            } else {
                cy.log('Delivery location is not visible nor clickable')
            }
        })
    }
    WelcomeToBlueLionTitlePinUpdateVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.pinUpdateFeild)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Pin updating is visible')
            } else {
                cy.log('Pin updating is not visible')
            }
        })
    }
    pinUpdate(pinCode){
        cy.get(landing_element.landingPageElementLocators.pinUpdateFeild)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).type(pinCode);
                cy.log('Pin code entered successfully');
            } else {
                cy.log('Pin input field is NOT visible or does not exist');
            }
    }
)}
    pinCodeApplyButtonClick(){
        cy.get(landing_element.landingPageElementLocators.pinCodeApplyButton)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Applying pin code is visible and clickable')
            } else {
                cy.log('Applying pin code is not visible nor clickable')
            }
        })
    }
    pinCodePopupCloseIcon(){
        cy.get(landing_element.landingPageElementLocators.pinCodePopupClose)
        .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('Pin code popup close icon is visible');
            })
    }
    searchIconVisibility(Airpods){
        cy.get(landing_element.landingPageElementLocators.searchIcon)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Search icon is visible')
            } else {
                cy.log('Search icon is not visible nor clickable')
            }
        }).clear().type(Airpods)
    }
   
    // searchBarForItem(Airpods) {
    //     cy.get(landing_element.landingPageElementLocators.searchBar)
    //         .then(($el) => {
    //             if ($el.length > 0 && $el.is(':visible')) {
    //                 cy.wrap($el)
    //                     .click({ force: true })
    //                     .clear()
    //                     .type(Airpods)
    //                 cy.log('Search bar is visible, clicked, cleared, and item typed')
    //             } else {
    //                 cy.log('Search bar is not visible nor clickable')
    //             }
    //         })
    // }

    searchBarForItem(Airpods){
        cy.get(landing_element.landingPageElementLocators.searchBar).clear().type(Airpods)
    }
    
    searchMenuClick(){
        cy.get(landing_element.landingPageElementLocators.searchMenu)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).first().click({ force: true })
                cy.log('Search menu is visible and clickable')
            } else {
                cy.log('Search menu is not visible nor clickable')
            }
        })
    }
    wishListIconVisibility(){
        cy.get(landing_element.landingPageElementLocators.wishListIcon)
        .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('Wishlist icon is visible');
            })
    }
    wishListClick(){
        cy.get(landing_element.landingPageElementLocators.wishList)
        .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('Wishlist is clickable');
            })
    }
    checkOutIconVisibility(){
        cy.get(landing_element.landingPageElementLocators.checkOutIcon)
        .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('Check out icon is visible');
            })
    }
    checkoutClick(){
        cy.get(landing_element.landingPageElementLocators.checkout)
        .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('Check out is clickable.');
            })
    }
    CheckoutClose(){
        cy.get(landing_element.landingPageElementLocators.CloseCheckOut)
        .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('Check out is closed');
            })
    }
    
    autoSlider1Text() {
        const locator = landing_element.landingPageElementLocators.autoSliderElement;
        if (!locator) {
          throw new Error('Locator for autoSliderElement is undefined.')
        }
      
        cy.get(locator)
          .click({ force: true })
         // .should('contains', '/STAY ONE STEP AHEAD OF CAR THIEVES/i')
      }
      
    AutoSliderOpenProduct(){
        cy.get(landing_element.landingPageElementLocators.autoSlider)
        .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('Auto slider is clickable and openning');
            })
    }
    myAccountIconVisibility(){
        cy.get(landing_element.landingPageElementLocators.myAccountIcon)
        .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('My account icon is visible');
            })
    }
    myAccountTextVisibility(){
        cy.get(landing_element.landingPageElementLocators.myAccountText)
        .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('My account text is visible');
            })
    }
    loginAndCreateAccountTextVisibility(){
        cy.get(landing_element.landingPageElementLocators.loginAndCreateAccountText)
        .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('Login and create account text is visible');
            })
    }
    shopByCategoriesVisibility(){
        cy.get(landing_element.landingPageElementLocators.shopByCategories)
        .should('exist')
            .and('be.visible')
            .then(() => {
                cy.log('Shop by category is visible');
            })
    }
    shopByCategoriesClick(){
        cy.get(landing_element.landingPageElementLocators.shopByCategories)
        .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('Shop by category is clickable');
            })
    }
    selectCategoriesClick(){
        cy.get(landing_element.landingPageElementLocators.selectCategories)
        .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('select category is clickable');
            })
    }
    gpsTrackerVisibility(){
        cy.get(landing_element.landingPageElementLocators.gpsTracker)
        .should('exist')
            .and('be.visible')
            .click({ force: true })
            .then(() => {
                cy.log('gps tracker is visible');
            })
    }
    gpsTrackerclick() {
        cy.get(landing_element.landingPageElementLocators.gpsTracker)
            .then(($el) => {
                if ($el.length > 0 && $el.is(':visible')) {
                    cy.wrap($el).click({ force: true })
                    cy.log('GPS tracker is clickable')
                } else {
                    cy.log('GPS tracker is NOT visible or clickable')
                }
            })
    }
    
    powerBankVisibility() {
        cy.get(landing_element.landingPageElementLocators.powerBank)
            .then(($el) => {
                if ($el.length > 0 && $el.is(':visible')) {
                    cy.log('Power bank is visible')
                } else {
                    cy.log('Power bank is NOT visible')
                }
            })
    }
    
    powerBankClick(){
        cy.get(landing_element.landingPageElementLocators.powerBank)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Power bank is clickable')
            } else {
                cy.log('Power bank is NOT visible or clickable')
            }
        })
    }
    airpodsVisibility(){
        cy.get(landing_element.landingPageElementLocators.airpods)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('AirPods is visible')
            } else {
                cy.log('Airpods is NOT visible')
            }
        })
    }
    airpodsClick(){
        cy.get(landing_element.landingPageElementLocators.airpods)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Airpods is clickable')
            } else {
                cy.log('Airpods is NOT visible or clickable')
            }
        })
    }
    affliateProgramVisibility(){
        cy.get(landing_element.landingPageElementLocators.affliateProgram)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Affiliate program is visible')
            } else {
                cy.log('Affiliate program is NOT visible')
            }
        })
    }
    affliateProgramClick(){
        cy.get(landing_element.landingPageElementLocators.affliateProgram)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Affiliate program is clickable')
            } else {
                cy.log('Affiliate program is NOT visible or clickable')
            }
        })
    }
    affiliateProgramBannerVisibility(){
        cy.get(landing_element.landingPageElementLocators.affliateProgram)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Affiliate program banner is visible')
            } else {
                cy.log('Affiliate program banner is NOT visible')
            }
        })
    }
    affiliateProgramBannerClick(){
        cy.get(landing_element.landingPageElementLocators.affliateProgram)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Affiliate program is clickable')
            } else {
                cy.log('Affiliate program banner is NOT visible or clickable')
            }
        })
    }
    seamlessTrackingVisibility(){
        cy.get(landing_element.landingPageElementLocators.seamlessTracking)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Seamless tracking is visible')
            } else {
                cy.log('Seamless tracking is NOT visible')
            }
        })
    }
    newLaunchesTextVisibility(){
        cy.get(landing_element.landingPageElementLocators.newLaunchesText)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('GPS tracker is visible')
            } else {
                cy.log('GPS tracker is NOT visible')
            }
        })
    }
    productImageInNewLaunchVisibility(){
        cy.get(landing_element.landingPageElementLocators.productImageInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Product image in new launch is visible')
            } else {
                cy.log('Product image in new launch is not visible')
            }
        })
    }
    productImageInNewLaunchClick(){
        cy.get(landing_element.landingPageElementLocators.productImageInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Product image in new launch is clickable')
            } else {
                cy.log('Product image is new launch is NOT visible or clickable')
            }
        })
    }
    productNameInNewLaunchVisibility(){
        cy.get(landing_element.landingPageElementLocators.productNameInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Product name in new launch is not visible')
            } else {
                cy.log('Product name in new launch is NOT visible or clickable')
            }
        })
    }
    productNameInNewLaunchClick(){
        cy.get(landing_element.landingPageElementLocators.productNameInNewLaunch).click()
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Product name in new launch is clickable')
            } else {
                cy.log('Product name in new launch is NOT visible or clickable')
            }
        })
    }
    productDescriptionInNewLaunchVisibility(){
        cy.get(landing_element.landingPageElementLocators.productDescriptionInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Product description in new launch is visible')
            } else {
                cy.log('Product name in new launch is NOT visible or clickable')
            }
        })
    }
    productDescriptionInNewLaunchClick(){
        cy.get(landing_element.landingPageElementLocators.productDescriptionInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Product description is clickable')
            } else {
                cy.log('Product description is NOT visible or clickable')
            }
        })
    }
    productReviewStarInNewLaunchVisibility(){
        cy.get(landing_element.landingPageElementLocators.productReviewStarInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Product Review Star In New Launch is visible')
            } else {
                cy.log('Product Review Star In New Launch is NOT visible')
            }
        })
    }
    productReviewStarInNewLaunchClick(){
        cy.get(landing_element.landingPageElementLocators.productReviewStarInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Product Review Star In New Launch is visible and clickable')
            } else {
                cy.log('Product Review Star In New Launch is not visible and clickable')
            }
        })
    }
    productRatingInNewLaunchVisibility(){
        cy.get(landing_element.landingPageElementLocators.productRatingInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Product rating In New Launch is visible')
            } else {
                cy.log('Product rating In New Launch is not visible')
            }
        })
    }
    productRatingInNewLaunchClick(){
        cy.get(landing_element.landingPageElementLocators.productRatingInNewLaunch).click()
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Product rating In New Launch is visible and clickable')
            } else {
                cy.log('Product rating In New Launch is not visible nor clickable')
            }
        })
    }
    productPriceInNewLaunchVisibility(){
        cy.get(landing_element.landingPageElementLocators.productPriceInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Product price In New Launch is visible')
            } else {
                cy.log('Product price In New Launch is not visible ')
            }
        })
    }
    productPriceInNewLaunchClick(){
        cy.get(landing_element.landingPageElementLocators.productPriceInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Product price In New Launch is visible and clickable')
            } else {
                cy.log('Product price In New Launch is not visible nor clickable')
            }
        })
    }
    productoldPriceVisibility(){
        cy.get(landing_element.landingPageElementLocators.oldPrice)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Product old price is visible')
            } else {
                cy.log('Product old price is not visible')
            }
        })
    }
    productShortNameVisibility(){
        cy.get(landing_element.landingPageElementLocators.productShortName)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Product short name is visible and clickable')
            } else {
                cy.log('Product short name is not visible')
            }
        })
    }
    addProductNewLaunchVisibility(){
        cy.get(landing_element.landingPageElementLocators.addProductInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Adding product icon is visible')
            } else {
                cy.log('Adding product icon is not visible')
            }
        })
    }
    addProductNewLaunch(){
        cy.get(landing_element.landingPageElementLocators.addProductInNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Adding product')
            } else {
                cy.log('Not able to add product')
            }
        })
    }
    addMoreProductNewLaunch(){
        cy.get(landing_element.landingPageElementLocators.addMoreProductNewlaunch)

        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Adding more product')
            } else {
                cy.log('Not adding more product')
            }
        })
    }
    minusProductProductNewLaunch(){
        cy.get(landing_element.landingPageElementLocators.minusProductProductNewLaunch)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Decreasing quantity in product')
            } else {
                cy.log('Not decreasing quantity in product')
            }
        })
    }
    headphoneBannerTitleVisibility(){
        cy.get(landing_element.landingPageElementLocators.headphoneBannerTitle)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Headphone banner title is visible')
            } else {
                cy.log('Headphone title is not visible')
            }
        })
    }
    headphoneBannerTitleClick(){
        cy.get(landing_element.landingPageElementLocators.headphoneBannerTitle)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Headphone banner title is visible and clickable')
            } else {
                cy.log('Headphone banner title is not visible and clickable')
            }
        })
    }
    headphoneBannerButtonVisibility(){
        cy.get(landing_element.landingPageElementLocators.headphoneBannerButton)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Headphone banner button is visible')
            } else {
                cy.log('Headphone banner button is not visible')
            }
        })
    }
    headphoneBannerButtonClick(){
        cy.get(landing_element.landingPageElementLocators.headphoneBannerButton).click()
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Head phone banner button is visible and clickable')
            } else {
                cy.log('Headphone banner button is not visible and clickable')
            }
        })
    }
    footerLogoVisibility(){
        cy.get(landing_element.landingPageElementLocators.footerLogo)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Footer logo is visible')
            } else {
                cy.log('Footer logo is not visible')
            }
        })
    }
    signUpForNewsLetterTextFooterVisibility(){
        cy.get(landing_element.landingPageElementLocators.signUpForLetterTextFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Text for signup for news letter is visible')
            } else {
                cy.log('Text for signup for news letter is not visible')
            }
        })
    }
    subscribeTextFeildFooterVisibility(){
        cy.get(landing_element.landingPageElementLocators.subscribeTextFeildFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Subscribe text feild is visible and clickable')
            } else {
                cy.log('Subscribe text feild is visible and clickable')
            }
        })
    }
    subscribeTextFeildFooterEnterText(NewsLetterText){
        cy.get(landing_element.landingPageElementLocators.subscribeTextFeildFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true }).type(NewsLetterText)
                cy.log('Subscribe text feild is visible and able to enter text')
            } else {
                cy.log('Subscribe text feild is not visible nor able to enter text')
            }
        })
        
    }
    subscribeButtonFooter(){
        cy.get(landing_element.landingPageElementLocators.subscribeButtonFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Subscribe button is visible and clickable')
            } else {
                cy.log('Subscribe button is not visible nor clickable')
            }
        })
    }
    aboutUsTitleFooterVisibility(){
        cy.get(landing_element.landingPageElementLocators.aboutUsTitleFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('About us title is visible')
            } else {
                cy.log('About us title is not visible')
            }
        })
    }
    aboutUsTextFooterVisibility(){
        cy.get(landing_element.landingPageElementLocators.aboutUsTextFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('About us text is visible')
            } else {
                cy.log('About us text is not visible')
            }
        })
    }
    aboutUsTextFooterClick(){
        cy.get(landing_element.landingPageElementLocators.aboutUsTextFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('About us text is visible and clickable')
            } else {
                cy.log('About us text is not visible nor clickable')
            }
        })
    }
    warrantyTextFooterVisibility(){
        cy.get(landing_element.landingPageElementLocators.warrantyTextFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Warranty text is visible')
            } else {
                cy.log('Warranty text is not visible')
            }
        })
    }
    warrantyTextFooterClick(){
        cy.get(landing_element.landingPageElementLocators.warrantyTextFooter).click()
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Warranty text is visible and clickable')
            } else {
                cy.log('Warranty text is not visible nor clickable')
            }
        })
    }
    csrPolicyFooterVisibility(){
        cy.get(landing_element.landingPageElementLocators.csrPolicyFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Csr Policy is visible')
            } else {
                cy.log('Csr policy is not visible')
            }
        })
    }
    csrPolicyFooterClick(){
        cy.get(landing_element.landingPageElementLocators.csrPolicyFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Csr policy is visible and clickable')
            } else {
                cy.log('Csr policy is not visible nor clickable')
            }
        })
    }
    privacyPolicyFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.privacyPolicyFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Privacy policy is visible')
            } else {
                cy.log('Privacy policy is not visible')
            }
        })
    }
    privacyPolicyFooterClick(){
        cy.xpath(landing_element.landingPageElementLocators.privacyPolicyFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Privacy policy is visible and clickable')
            } else {
                cy.log('Privacy policy is not visible nor clickable')
            }
        })
    }
    termsAndConditionFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.termsAndConditionFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Terms and condition is visible')
            } else {
                cy.log('Terms and condition is not visible')
            }
        })
    }
    termsAndConditionFooterClick(){
        cy.xpath(landing_element.landingPageElementLocators.termsAndConditionFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Terms and condition is visible and clickable')
            } else {
                cy.log('Terms and condition is not visible nor clickable')
            }
        })
    }
    agentLoginFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.agentLogin)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Agent login is visible')
            } else {
                cy.log('Agent login is not visible')
            }
        })
    }
    agentLoginFooterClick(){
        cy.xpath(landing_element.landingPageElementLocators.agentLogin)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Agent login is visible and clickable')
            } else {
                cy.log('Agent login is not visible nor clickable')
            }
        })
    }
    helpDeskTitleFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.helpDeskTitleFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Help desk title is visible and clickable')
            } else {
                cy.log('Help desk title is not visible nor clickable')
            }
        })
    }
    helpDeskTitleFooterClick(){
        cy.xpath(landing_element.landingPageElementLocators.helpDeskTitleFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Help desk title is visible and clickable')
            } else {
                cy.log('Help desk title is not visible nor clickable')
            }
        })
    }
    ContactUsHelpDeskVisibility(){
        cy.get(landing_element.landingPageElementLocators.ContactUsHelpDesk)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Contact us in help desk is visible and clickable')
            } else {
                cy.log('Contact us in help desk is not visible nor clickable')
            }
        })
    }
    ContactUsHelpDeskClick(){
        cy.get(landing_element.landingPageElementLocators.ContactUsHelpDesk)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Contact us in help desk is visible and clickable')
            } else {
                cy.log('Contact us in help desk is not visible nor clickable')
            }
        })
    }
    contactUsTitleFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.contactUsTitleFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Contact us title is visible and clickable')
            } else {
                cy.log('Contact us title is not visible')
            }
        })
    }
    phoneIconFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.phoneIconFooter).should('be.visible')
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Phone icon is visible')
            } else {
                cy.log('Phone icon is not visible')
            }
        })
    }
    phoneNumberFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.phoneNumberFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('phone number is visible')
            } else {
                cy.log('Phone number is not visible')
            }
        })
    }
    // phoneNumberFooterVisibility(){
    //     cy.xpath(landing_element.landingPageElementLocators.phoneNumberFooter).should('be.visible')
    //     .then(($el) => {
    //         if ($el.length > 0 && $el.is(':visible')) {
    //             cy.wrap($el).click({ force: true })
    //             cy.log('Contact us in help desk is visible and clickable')
    //         } else {
    //             cy.log('Contact us in help desk is not visible nor clickable')
    //         }
    //     })
    // }
    phoneNumberFooterClick(){
        cy.xpath(landing_element.landingPageElementLocators.phoneNumberFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Phone number is visible and clickable')
            } else {
                cy.log('Phone number is not visible nor clickable')
            }
        })
    }
    emailIconFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.emailIconFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Email icon is visible and clickable')
            } else {
                cy.log('Contact us in help desk is not visible nor clickable')
            }
        })
    }

    emailFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.emailFooter).should('be.visible')
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Email is visible')
            } else {
                cy.log('Email is not visible')
            }
        })
    }
    emailFooterClick(){
        cy.xpath(landing_element.landingPageElementLocators.emailFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Email is visible and clickable')
            } else {
                cy.log('Email is not visible nor clickable')
            }
        })
    }
    addressIconFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.addressIconFooter).should('be.visible')
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Address icon is visible and clickable')
            } else {
                cy.log('Address icon is not visible')
            }
        })
    }
    addressFooterVisibility(){
        cy.get(landing_element.landingPageElementLocators.addressFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Address is visible')
            } else {
                cy.log('Address is not visible')
            }
        })
    }
    cartIconFooterVisibility(){
        cy.get(landing_element.landingPageElementLocators.cartIconFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Cart icon is visible')
            } else {
                cy.log('Cart icon is not visible')
            }
        })
    }
    cartIconFooterClick(){
        cy.xpath(landing_element.landingPageElementLocators.cartIconFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Cart icon is visible and clickable')
            } else {
                cy.log('Cart icon is not visible nor clickable')
            }
        })
    }
    closeCart(){
        cy.get(landing_element.landingPageElementLocators.cartClose)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Closing of the cart is visible and clickable')
            } else {
                cy.log('Closing of the cart is not visible nor clickable')
            }
        })
    }
    termsAndConditionLowerFooterVisibility(){
        cy.get(landing_element.landingPageElementLocators.termsAndConditionLowerFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Terms and condirtion is visible')
            } else {
                cy.log('Terms and condition is not visible')
            }
        })
    }
    termsAndConditionLowerFooterClick(){
        cy.get(landing_element.landingPageElementLocators.termsAndConditionLowerFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Terms and condition is visible and clickable')
            } else {
                cy.log('Terms and condition is not visible nor clickable')
            }
        })
    }
    privacyPolicyLowerFooterVisibility(){
        cy.get(landing_element.landingPageElementLocators.privacyPolicyLowerFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.log('Privacy and policy is visible')
            } else {
                cy.log('Privacy and policy is not visible')
            }
        })
    }
    privacyPolicyLowerFooterClick(){
        cy.get(landing_element.landingPageElementLocators.privacyPolicyLowerFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Privacy policy is visible and clickable')
            } else {
                cy.log('Privacy policy is not visible nor clickable')
            }
        })
    }
    copyRightTestLowerFooterVisibility(){
        cy.xpath(landing_element.landingPageElementLocators.copyRightTestLowerFooter)
        .then(($el) => {
            if ($el.length > 0 && $el.is(':visible')) {
                cy.wrap($el).click({ force: true })
                cy.log('Copy right is visible')
            } else {
                cy.log('Copy right is not visible')
            }
        })
    }

}