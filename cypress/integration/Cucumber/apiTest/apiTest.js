/// <reference types="Cypress" />
import { Given,Then } from "cypress-cucumber-preprocessor/steps"


Given(`I post a course in API with the following information:`, datatable => {
    var dict = {};
    datatable.rows().forEach(row =>{
        dict[row[0]] = row[1];
    });
    cy.shareVariable(dict).as("dictionary");
    cy.request({
        method:'POST',
        url:Cypress.env("apiUrl")+"/posts/",
        body: {
            "title": dict["title"],
            "author": dict["author"]
        }
    }).as("postResponse");
})

Then(`I verify that the course is posted with the correct data`, () => {
    cy.get("@dictionary",{log:false}).then(dictionary=>{
        cy.get("@postResponse",{log:false}).should((postResponse)=>{
            expect(postResponse.status).equal(201);
            expect(postResponse.body.title).equal(dictionary["title"]);
            expect(postResponse.body.author).equal(dictionary["author"]);
            expect(postResponse.body.id).not.be.null;
        })
    })
})

Given(`I get the course created by id in API`, () => {
    cy.get("@postResponse",{log:false}).then((postResponse)=>{
        cy.request(Cypress.env("apiUrl")+"/posts/"+postResponse.body.id).as("getResponse");
    })
})

Then(`I verify that the course is retrieved with the correct data`, () => {
    cy.get("@getResponse",{log:false}).then(getResponse=>{
        cy.get("@postResponse",{log:false}).should((postResponse)=>{
            expect(getResponse.status).equal(200);
            expect(getResponse.body.title).equal(postResponse.body.title);
            expect(getResponse.body.author).equal(postResponse.body.author);
            expect(getResponse.body.id).equal(postResponse.body.id);
        })
    })
})


Given(`I delete a course in API with id equal to {string}`, (strId) => {
    cy.request({
        method:'DELETE',
        url:Cypress.env("apiUrl")+"/posts/"+strId,
        failOnStatusCode:false
    })
})