import { blueLionLoginAction } from "../../../PageObjects/PageActions/blueLionLoginAction";
import { blueLionLandingPageAction } from "../../../PageObjects/PageActions/blueLionLandingPageAction";
import 'cypress-xpath';

const Login_Action = new blueLionLoginAction
const LandingPage_Action = new blueLionLandingPageAction

describe('Landing Page', () => {
    beforeEach(() => {
        cy.visit("https://www.bluelionlifestyle.com/")
    })

   // icon image 

    it('icon image', () => {
        LandingPage_Action.blueLionIconImageVisibility()
    })

    // delivery location and pin update


    it('delivery location and pin update', () => {

        LandingPage_Action.deliveryLocationIconVisibility()
        LandingPage_Action.deliveringLocationClick()
        cy.wait(3000)
        cy.fixture('blueLionLandingPageData').then((data) => {
            LandingPage_Action.pinUpdate(data.pinCode)
            LandingPage_Action.pinCodeApplyButtonClick()
        })
    })


    // SearchBar

    it('Search bar', () => {
        LandingPage_Action.searchIconVisibility()
        cy.fixture('blueLionLandingPageData').then((data) => {
            LandingPage_Action.searchBarForItem(data.Airpods)
            LandingPage_Action.searchMenuClick()
        })
        
        cy.wait(3000)
        cy.go(-1)
        cy.wait(3000)
    })


    // Visit wishlist

    it('visit wishlist', () => {
        LandingPage_Action.wishListIconVisibility()
        LandingPage_Action.wishListClick()
        cy.wait(3000)
        cy.go(-1);
        cy.wait(3000)
    })

    // Visit Checkout

    it('check out', () => {
        LandingPage_Action.checkOutIconVisibility()
        LandingPage_Action.checkoutClick()
        cy.wait(2000)
        LandingPage_Action.CheckoutClose()
        cy.wait(1000)
    })


    // auto slider

    it('auto slider',()=>{
         LandingPage_Action.autoSlider1Text()
    })

    //Shop by categories

    it('shop by categories', () => {
        LandingPage_Action.shopByCategoriesVisibility()
        LandingPage_Action.shopByCategoriesClick()

        LandingPage_Action.selectCategoriesClick()
        cy.wait(3000)
        cy.go(-1)
    })



    //Shop by Categories GPS

    it('shop by categories - gps', () => {
        LandingPage_Action.gpsTrackerVisibility()
        LandingPage_Action.gpsTrackerclick()
        cy.wait(3000)
        cy.go(-1)
    })


    //Shop by categories POWER Bank

    it('shop by categories - power bank', () => {
        LandingPage_Action.powerBankVisibility()
        LandingPage_Action.powerBankClick()
        cy.wait(3000)
        cy.go(-1)
    })



    //Shop by categories airpods

    it('shop by categories - airpods', () => {
        LandingPage_Action.airpodsVisibility()
        LandingPage_Action.airpodsClick()
        cy.wait(3000)
        cy.go(-1)
    })


    //Affliate program

    it('affliate program', () => {
        LandingPage_Action.affliateProgramVisibility()
        LandingPage_Action.affliateProgramClick()
        cy.wait(3000)
        cy.go(-1)
    })


    //Banner

    it('banner', () => {
        LandingPage_Action.affiliateProgramBannerVisibility()
        LandingPage_Action.affiliateProgramBannerClick()
        cy.wait(3000)
        cy.go(-1)
    })

  //  new launch - product text and images

    it('new launch - product text and images', () => {
        LandingPage_Action.newLaunchesTextVisibility()
        LandingPage_Action.productImageInNewLaunchVisibility()
        LandingPage_Action.productImageInNewLaunchClick()
        cy.wait(3000)
        cy.go(-1)
    })


    // new launch - product name and description

    it('new lauch - product name and description', () => {
        LandingPage_Action.productNameInNewLaunchVisibility()
        LandingPage_Action.productDescriptionInNewLaunchVisibility()
        LandingPage_Action.productDescriptionInNewLaunchClick()
        cy.wait(3000)
        cy.go(-1)
    })

    // new launch - product review and rating

    it('new launch - product review and rating', () => {
        LandingPage_Action.productReviewStarInNewLaunchVisibility()
        //LandingPage_Action.productReviewStarInNewLaunchClick()
        LandingPage_Action.productRatingInNewLaunchVisibility()
        // LandingPage_Action.productRatingInNewLaunchClick()
        cy.wait(3000)
        cy.go(-1)
    })

   // new launch - product price

    it('new launch - product price', () => {
        LandingPage_Action.productPriceInNewLaunchVisibility()
        LandingPage_Action.productPriceInNewLaunchClick()
        cy.wait(3000)
        cy.go(-1)
    })

   // new launch - product old price

    it('new launch - product old price', () => {
        LandingPage_Action.productoldPriceVisibility()
    })

    // new launch - product short name

    it('new launch - product short name', () => {
        LandingPage_Action.productShortNameVisibility()
        cy.wait(3000)
        cy.go(-1)
    })




    // new product launch - section

    it('New product lounch - section', () => {
        LandingPage_Action.addProductNewLaunchVisibility()
        LandingPage_Action.addProductNewLaunch()
        cy.wait(2000)
        LandingPage_Action.addMoreProductNewLaunch()
        cy.wait(2000)
        LandingPage_Action.minusProductProductNewLaunch()
    })


    // youtube video

    it('should visit YouTube and play a video', () => {
        cy.origin('https://www.youtube.com', () => {
            cy.visit('https://www.youtube.com/watch?v=TJNnaqNVrKM');
            cy.on('uncaught:exception', (err) => {
                if (err.message.includes('Blocked a frame with origin')) {
                    return false;
                }
            })
        })
    })


    //Banner

    it('Banner of headphone', () => {
        LandingPage_Action.headphoneBannerTitleVisibility()
        LandingPage_Action.headphoneBannerButtonVisibility()
        LandingPage_Action.headphoneBannerButtonClick()
        cy.wait(3000)
        cy.go(-1)
    })

    //Footer logo

    it('Footer Logo', () => {
        cy.wait(2000)
        LandingPage_Action.footerLogoVisibility()
    })

    //Subscribe newsletter

    it('Subscribe Newsletter', () => {
        cy.fixture('blueLionLandingPageData').then((data) => {
            LandingPage_Action.subscribeTextFeildFooterEnterText(data.NewsLetterText)
        })
        LandingPage_Action.subscribeButtonFooter()
    })

    //Footer about us

    it('Footer about us', () => {

        LandingPage_Action.aboutUsTitleFooterVisibility()
        LandingPage_Action.aboutUsTextFooterVisibility()
        LandingPage_Action.aboutUsTextFooterClick()
        cy.wait(3000)
        cy.go(-1)
    })

    //   Footer warranty

    it('Footer warranty', () => {
        LandingPage_Action.warrantyTextFooterVisibility()
        LandingPage_Action.warrantyTextFooterClick()
        cy.wait(3000)
        cy.go(-1)
    })



    //   csr policy

    it('Footer - csr poloicy', () => {
        LandingPage_Action.csrPolicyFooterVisibility()
        LandingPage_Action.csrPolicyFooterClick()
        cy.wait(3000)
        cy.go(-1)
        cy.wait(2000)
    })



    //   privacy policy

    it('Footer - privacy policy', () => {
        LandingPage_Action.privacyPolicyFooterVisibility()
        LandingPage_Action.privacyPolicyFooterClick()
        cy.wait(3000)
        cy.go(-1)
    })



    //   Terms and condition

    it('Footer - Terms and condition', () => {
        LandingPage_Action.termsAndConditionFooterVisibility()
        LandingPage_Action.termsAndConditionFooterClick()
        cy.wait(3000)
        cy.go(-1)
    })



    //Agent login

    it('Footer - agent login', () => {
        LandingPage_Action.agentLoginFooterVisibility()
        LandingPage_Action.agentLoginFooterClick()
        cy.wait(3000)
        cy.go(-1)
    })


    //Help desk

    it('Footer - help desk', () => {
        LandingPage_Action.helpDeskTitleFooterVisibility()
        cy.wait(3000)
    })



    //   support

    it('Footer - support', () => {
        LandingPage_Action.ContactUsHelpDeskVisibility()
        LandingPage_Action.ContactUsHelpDeskClick()
        cy.wait(3000)
    })


    // footer contact us - phone

    it('Contact us footer - phone', () => {
        LandingPage_Action.contactUsTitleFooterVisibility()
        LandingPage_Action.phoneIconFooterVisibility()
        LandingPage_Action.phoneNumberFooterVisibility()
    })

    // footer contact us email

    it('Contact us footer - email', () => {
        LandingPage_Action.emailIconFooterVisibility()
        LandingPage_Action.emailFooterVisibility()
        LandingPage_Action.emailFooterClick()
    })


    // footer contact us - addrerss

    it(' footer - Contact us - address', () => {
        LandingPage_Action.addressIconFooterVisibility()
        LandingPage_Action.addressFooterVisibility()
    })

    //footer terms and condition

    it('Footer - terms and condition', () => {
        LandingPage_Action.termsAndConditionLowerFooterVisibility()
        cy.wait(2000)
        LandingPage_Action.termsAndConditionLowerFooterClick()
        cy.wait(3000)
        cy.go(-1)
    })

    // footer privacy policy

    it('Footer - privacy policy', () => {

        LandingPage_Action.privacyPolicyLowerFooterVisibility()
        cy.wait(2000)
        LandingPage_Action.privacyPolicyLowerFooterClick()
        cy.wait(3000)
        cy.go(-1)
    })

    // Copyright text footer

    it('Footer - copyright', () => {
        LandingPage_Action.copyRightTestLowerFooterVisibility()
    })

})