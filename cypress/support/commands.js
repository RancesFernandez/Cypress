// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("addToCart", (nombreDeProducto) => {


    //cy.get('div[class="product-thumb"]:has(.caption):contains(HTC Touch HD) button[onclick^="cart.add"]')

    cy.get('div[class="product-thumb"]')
        .each(($el, index, $list) => {

            cy.get(':has(.caption) h4 a').eq(index).then(function ($el1) {
                let producto = $el1.text()
                cy.log(producto)

                if (producto.includes(nombreDeProducto)) {
                    cy.log('Se ha encontrado el elemento buscado')
                    cy.get('div[class="product-thumb"]').eq(index).find('button[onclick^="cart.add"]').click()
                    cy.get('div[class="alert alert-success alert-dismissible"]').should('contain.text', nombreDeProducto)
                }


            })
        })
})

Cypress.Commands.add('verificamosElementoEnCarritoDD', (nombreDeProducto) => {
    cy.get('tr:has(button[onclick*="cart.remove"]) td[class="text-left"] a')
        .each(($el, index, $list)=>{
            cy.get('td[class="text-left"] a').eq(index).then(function($el1){
                let producto = $el1.text()
                cy.log(producto)
                cy.get('tr:has(button[onclick*="cart.remove"])').should('contain.text', nombreDeProducto)
            })
        })
})
