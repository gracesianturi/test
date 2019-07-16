exports.login=function(data_login){
    //visit url login
    cy.visit('login')
    
    //input email    
    cy.get('#email').type(data_login.email)
    
    //input password
    cy.get('#password').type(data_login.password)
    
    //click button Login
    cy.get("button").contains("Login").should("be.visible").click()
    
    //Assertion URL to page Dashboard
    cy.url().should('include','/dashboard')
}

//emailbaru : gracebsianturi@gmail.com
//password : qa12345