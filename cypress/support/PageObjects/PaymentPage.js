class PaymentPage
{
    getPayByBankWireOpyionButton()
    {
        return cy.get('.bankwire')
    }
   
    getIConfirmMyOrderButton()
    {
        return cy.get('.cart_navigation > .button > span')
    }
   
    getDescriptionTitle()
    {
        return  cy.get('.cheque-indent')
    }
    
   
    
}
export default PaymentPage;