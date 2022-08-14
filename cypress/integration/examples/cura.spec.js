describe('Cura Make Appointment', function () {

    it('Visit the URL', function () {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
    });

    it('Login to the app', function () {
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
    });

    it('Make Appointment', function () {

        cy.get('select').select('Tokyo CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_none').click();
        cy.get('#txt_visit_date').type('30/03/2020');
        cy.get('#txt_comment').click({ force: true });// we have to force click on the comment area so as to close the date modal
        cy.get('#txt_comment').type('This is ibrahim');
        cy.get('#btn-book-appointment').click();

    });

    it('Verify Appointment', function () {
        cy.get('h2').contains('Appointment Confirmation');
        cy.get('#comment').contains('This is ibrahim');

    });
});