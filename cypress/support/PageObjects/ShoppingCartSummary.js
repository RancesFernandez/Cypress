class ShoppingCartSummary
{
    getProductName()
    {
        return cy.get('tr[id^=product]').find('.product-name > a')
    }
    
    getProductPrice()
    {
        return cy.get('tr[id^=product]').find('.price')
    }
        
    getProceedToCheckOutButton()
    {
        return cy.get('.cart_navigation > .button > span')
    }
}
export default ShoppingCartSummary;