class ShippingPage
{
    getTermsOfServiceCheckBox()
    {
        return cy.get('#cgv')
    }
    
    getProceedToCheckOutButton()
    {
        return cy.get('.cart_navigation > .button > span')
    }
    
}
export default ShippingPage;