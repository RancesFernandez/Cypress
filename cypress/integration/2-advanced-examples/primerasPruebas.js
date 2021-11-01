/// <reference types="Cypress"/>
//suite de casos que contiene cada caso
describe('Primer conjunto de casos de pruebas', function () {
    beforeEach(() => {
        // ingresamos a la pagina    
        cy.visit("http://automationpractice.com/index.php")
    })


    //caso de prueba 1

    it('Contabilizar la cantidad de elementos en la seccion de pagina principal', function () {
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

    //caso de prueba 6
    it('Crear una compra desde cero', function () {
        cy.get('#search_query_top').type('Blouse')
        cy.get('#searchbox > .btn').click()
        cy.get('.product-container:has(.product-name[title="Blouse"]) .ajax_add_to_cart_button').click()
        cy.wait(5000)
        cy.get('.button-medium[title="Proceed to checkout"]').click()

        cy.get('tr[id^=product]').find('.product-name > a').should('contain.text', 'Blouse')

        cy.get('tr[id^=product]').find('.price').should('contain.text', '27.00')

        cy.get('.cart_navigation > .button > span').click()

        cy.get('#email').type('rances@mailinator.com')

        cy.get('#passwd').type('C@rlosranc3s')

        cy.get('#SubmitLogin > span').click()

        cy.get('.cart_navigation > .button > span').click()

        cy.get('#cgv').check().should('be.checked')

        cy.get('.cart_navigation > .button > span').click()

        cy.get('.bankwire').click()

        cy.get('.cart_navigation > .button > span').click()

        cy.get('.cheque-indent').should('contain.text', 'Your order on My Store is complete.')

    })


})