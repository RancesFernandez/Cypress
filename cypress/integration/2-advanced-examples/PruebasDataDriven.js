/// <reference types="Cypress"/>



//Suite de casos de pruebas data driven
describe('Segundo conjunto de casos de pruebas avanzadas', function () {
    before(function () {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
            cy.fixture(this.datos.image).as('image')

        })
    })
    this.beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')

    })


    it('Llenamos nuestro primer formualario utilizando data', function () {
        cy.get('#firstName').type(this.datos.name)

        cy.get('#lastName').type(this.datos.lastName)

        cy.get('#userEmail').type(this.datos.email)

        cy.get('input[name="gender"][value="' + this.datos.sexo + '"]').check({ force: true }).should('be.checked')

        cy.get('#userNumber').type(this.datos.phone)

        cy.get('#dateOfBirthInput').click()

        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.dateOfBirth[0])

        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.dateOfBirth[1])

        cy.get('.react-datepicker__day--0' + this.datos.dateOfBirth[2]).should('be.visible').click()

        cy.get('#dateOfBirthInput')
            .should('contain.value', this.datos.dateOfBirth[0].substring(0, 3))
            .should('contain.value', this.datos.dateOfBirth[1])
            .should('contain.value', this.datos.dateOfBirth[2])

        cy.get('.subjects-auto-complete__value-container').type(this.datos.subjects)

        cy.get('div[id^="react-select-"]').click()

        cy.get('.subjects-auto-complete__value-container div div').should('contain.text', this.datos.subjects)

        cy.get('div[class="custom-control custom-checkbox custom-control-inline"]:has(label:contains(' + this.datos.hobbies[0] + ')) input').check({ force: true }).should('be.checked')
        cy.get('div[class="custom-control custom-checkbox custom-control-inline"]:has(label:contains(' + this.datos.hobbies[1] + ')) input').check({ force: true }).should('be.checked')

        cy.get('#uploadPicture').then(function ($el) {
            //convertir la imagen en un string de base 64
            const blob = Cypress.Blob.base64StringToBlob(this.image, 'image/png')

            const file = new File([blob], this.datos.image, { type: 'iamge/png' })

            const list = new DataTransfer()

            list.items.add(file)
            const myFileList = list.files

            $el[0].files = myFileList
            $el[0].dispatchEvent(new Event('change', { bubbles: true }))
        })

        cy.get('#currentAddress').type(this.datos.currentAddress)

        cy.get('div[id="stateCity-wrapper"] div div[id="state"]').click().find('div:contains("'+this.datos.state+'")[id^="react-select"]').should('be.visible').click()

        cy.get('div div[id="city"]').click().find('div:contains("'+this.datos.city+'")[id^="react-select"]').should('be.visible').click()

        cy.get('#submit').click()

        cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')

        cy.get('td:contains("Student Name") +td').should('have.text', this.datos.name + " " +this.datos.lastName)

        cy.get('td:contains("Student Email") +td').should('have.text', this.datos.email)

        cy.get('td:contains("Gender") +td').should('have.text', this.datos.sexo)

        cy.get('td:contains("Mobile") +td').should('have.text', this.datos.phone)

        cy.get('td:contains("Date of Birth") +td').should('have.text', this.datos.dateOfBirth[2] + " " + this.datos.dateOfBirth[0] + "," + this.datos.dateOfBirth[1])

        cy.get('td:contains("Subjects") +td').should('have.text', this.datos.subjects)

        cy.get('td:contains("Hobbies") +td').should('have.text', this.datos.hobbies[0] + ", " + this.datos.hobbies[1])

        cy.get('td:contains("Picture") +td').should('have.text', this.datos.image)

        cy.get('td:contains("Address") +td').should('have.text', this.datos.currentAddress)

        cy.get('td:contains("Picture") +td').should('have.text', this.datos.image)

        cy.get('td:contains("State and City") +td').should('have.text', this.datos.state + " " + this.datos.city)
       
    })
})
