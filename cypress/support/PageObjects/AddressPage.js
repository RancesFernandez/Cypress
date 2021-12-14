class AddressPage
{
    getProceedToCheckOutButton()
    {
        return cy.get('.cart_navigation > .button > span')
    }
    
}
export default AddressPage;