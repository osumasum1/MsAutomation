import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"


Given(`I open the UI application`, () => {
    cy.visit('/')
})


Given(`I click on Create Courses link`, () => {
    cy.contains('Create courses').click();
})

Given(`I fill up the form with the following information:`, datatable => {

    datatable.rows().forEach(row =>{
        if (row[0].toLowerCase()==="level"){
            cy.get("#level").select(row[1]);
        }
        else if (row[0].toLowerCase()==="name"){
            cy.get("#name").type(row[1]);
        }
        else{
            cy.get("#duration").type(row[1]);
        }
    });
    
})

When(`I click on Submit button`, () => {
    const stub = cy.stub();  
    cy.on ('window:alert', stub);
    cy.get("#submit").click();
    cy.shareVariable(stub).as("stub");
})

Then(`I verify that Course Created! alert message is displayed`, () => {
    cy.get("@stub",{log:false}).then((stub)=>{
        expect(stub.getCall(0)).to.be.calledWith('Course Created!');
    })
    
    
})