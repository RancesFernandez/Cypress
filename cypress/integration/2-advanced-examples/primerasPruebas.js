/// <reference types="Cypress"/>

//Importamos clases de page object
import AddresPage from '../../support/PageObjects/AddressPage'
import AuthenticationPage from '../../support/PageObjects/AuthenticationPage'
import HomePage from '../../support/PageObjects/HomePage'
import PaymentPage from '../../support/PageObjects/PaymentPage'
import ShippingPage from '../../support/PageObjects/ShippingPage'
import ShoppingCartSummary from '../../support/PageObjects/ShoppingCartSummary'


//suite de casos que contiene cada caso
describe('Primer conjunto de casos de pruebas', function () {

    const addresPage = new AddresPage()
    const authenticationPage = new AuthenticationPage()
    const homePage = new HomePage()
    const paymentPage = new PaymentPage()
    const shippingPage = new ShippingPage()
    const shoppingCartSummary = new ShoppingCartSummary()

    beforeEach(() => {
        // ingresamos a la pagina    
        cy.visit("http://automationpractice.com/index.php")
    })


    //caso de prueba 1

    /* it('Contabilizar la cantidad de elementos en la seccion de pagina principal', function () {
         // cy.visit("http://automationpractice.com/index.php")
 
         //cy.get('#homefeatured .product-container').should('have.length', 7)
 
         //Obtenemos el elemento homefeatured .podruct-container como un parametro
 
         cy.get('#homefeatured .product-container').as('ProductosPopulares')
 
         //Verificar nuevamente la cantidad de elementos utilizando el parametro
 
         cy.get('@ProductosPopulares').should('have.length', 7)
 
 
 
     })
 
     //caso de prueba 2
 
     it('Agregar el elemento de tipo blouse al carrito de compra desde la pagina principal', function () {
         //cy.visit("http://automationpractice.com/index.php")
 
         cy.get('#homefeatured .product-container').as('ProductosPopulares')
 
         //iteramos para encontrar un producto con nombre x
         cy.get('@ProductosPopulares')
             .find('.product-name')
             .each(($el, index, $list) => {
                 if ($el.attr('title') === 'Blouse') {
                     cy.log('Se ha encontrado el elemento buscado')
                     cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
 
                 }
             })
 
     })
 
     //caso de prueba 3
     it('Verificar que el Dropdown de women tiene todo', function () {
         cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr', 'style', 'display: block')
         cy.get('a[title="Tops"]').should('be.visible')
         cy.get('a[title="T-shirts"]').should('be.visible')
         cy.get('a[title="Blouses"]').should('be.visible')
         cy.get('a[title="Dresses"]').should('be.visible')
         cy.get('a[title^="Casual"]').should('be.visible')
         cy.get('a[title^="Evening"]').should('be.visible')
         cy.get('a[title^="Summer"]').should('be.visible')
 
     })
 
     //caso de prueba 4
     it('Verificar que los checkboxes estan funcionando', function () {
         cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
         cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
         cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
         cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')
     })
 
     //caso de prueba 5
     it('Verificar que los dropdown de arreglo estén funcionando', function () {
         cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
         cy.get('#selectProductSort').select('In stock').should('have.value', 'quantity:desc')
 
     })
 */
    //caso de prueba 6
    it('Crear una compra desde cero', function () {
        homePage.getSearchBoxInput().type('Blouse')
        homePage.getSearchBoxButton().click()
        homePage.getAddToCartElement('Blouse').click()
        cy.wait(5000)
        homePage.getProcedeToCheckOutButton().click()

        shoppingCartSummary.getProductName().should('contain.text', 'Blouse')
        shoppingCartSummary.getProductPrice().should('contain.text', '27.00')
        shoppingCartSummary.getProceedToCheckOutButton().click()

        authenticationPage.getEmailAddressInput().type('rances@mailinator.com')
        authenticationPage.getPasswordInput().type('carlosranc3s')
        authenticationPage.getSignInButton().click()

        addresPage.getProceedToCheckOutButton().click()

        shippingPage.getTermsOfServiceCheckBox().check().should('be.checked')
        shippingPage.getProceedToCheckOutButton().click()

        paymentPage.getPayByBankWireOpyionButton().click()
        paymentPage.getIConfirmMyOrderButton().click()
        paymentPage.getDescriptionTitle().should('contain.text', 'Your order on My Store is complete.')

    })


})