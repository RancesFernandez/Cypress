/// <reference types="Cypress"/>

//Suite de casos de pruebas avanzadas
describe('Tercer feature de casos avanzados', function () {
    before(function () {
        cy.fixture('carritoDeCompras').then(function (datos) {
            this.datos = datos
        })
    })
    beforeEach(() => {
        cy.visit('https://demo.opencart.com/index.php')
    })

    it('Realizar compra de celulares basadas en su nombre', function () {

        cy.get('#menu ul a:contains("Phones & PDAs")').click()

        cy.addToCart(this.datos.phone1)
        cy.addToCart(this.datos.phone2)
        cy.addToCart(this.datos.phone3)

        cy.get('.btn-inverse').click()

        cy.verificamosElementoEnCarritoDD(this.datos.phone1)
        cy.verificamosElementoEnCarritoDD(this.datos.phone2)
        cy.verificamosElementoEnCarritoDD(this.datos.phone3)
    })

})