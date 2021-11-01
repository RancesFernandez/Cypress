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

        this.datos.articulo.forEach(function (articulo) {
            cy.addToCart(articulo)
            //cy.pause()
        })

        cy.get('.btn-inverse').click()

        this.datos.articulo.forEach(function (articulo) {
            cy.verificamosElementoEnCarritoDD(articulo)

        })
    })
})