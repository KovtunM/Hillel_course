
let usersdata = [{
  name: "Ban",
  lastname: "Banana",
  email: "ban@banana.com",
  password: "Qwerty12",
},
{
  name: "Max",
  lastname: "Kent",
  email: "max@kent.com",
  password: "Qwerty123",
},
{
  name: "Kim",
  lastname: "Silver",
  email: "kim@silver.com",
  password: "Qwerty1234",
}]

let carsdata = [{
  carBrandname: "BMW",
  carModelname: "X5",
  carMileage: 3000,
},
{
  carBrandname: "Porsche",
  carModelname: "Cayenne",
  carMileage: 1000,
},
{
  carBrandname: "Audi",
  carModelname: "TT",
  carMileage: 10,
}]

let emptyverification = function (arr) {
  for (let inputid of arr){
    cy.get(`input[id="${inputid}"]`).should('be.visible').should('be.empty');
    // cy.get(`input[id="${inputid}"]`).should('be.empty');
  }

  cy.get('div[class="invalid-feedback"]').should('not.exist');
  cy.get('div[class="modal-dialog modal-dialog-centered"]').should('exist');

  cy.get("button").contains("Register").should('be.visible').should('be.disabled');
  // cy.get("button").contains("Register").should('be.disabled');
}

describe('qauto', () => {
  it('singup', () => {
    cy.visit('http://qauto2.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    })

    for (let i in usersdata){
      let userdata = usersdata[i]

      cy.get("button").contains("Sign up").click();
      
      emptyverification ([
        "signupName", 
        "signupLastName", 
        "signupEmail", 
        "signupPassword", 
        "signupRepeatPassword"]);

      cy.get('input[id="signupName"]').type(userdata.name);
      cy.get('input[id="signupName"]').should('have.value', userdata.name);

      emptyverification ([
        "signupLastName", 
        "signupEmail", 
        "signupPassword", 
        "signupRepeatPassword"]);

      cy.get('input[id="signupLastName"]').type(userdata.lastname);
      cy.get('input[id="signupLastName"]').should('have.value', userdata.lastname);

      emptyverification ([
        "signupEmail",
        "signupPassword", 
        "signupRepeatPassword"]);

      cy.get('input[id="signupEmail"]').type(userdata.email);
      cy.get('input[id="signupEmail"]').should('have.value', userdata.email);

      emptyverification ([
        "signupPassword", 
        "signupRepeatPassword"]);

      cy.get('input[id="signupPassword"]').type(userdata.password);
      cy.get('input[id="signupPassword"]').should('have.value', userdata.password);

      emptyverification ([
        "signupRepeatPassword"]);

      cy.get('input[id="signupRepeatPassword"]').type(userdata.password);
      cy.get('input[id="signupRepeatPassword"]').should('have.value', userdata.password);
      cy.get("button").contains("Register").click();

      cy.get("button").contains("Add car").click();

      cy.get('select[id="addCarBrand"]').should('be.visible')
      // cy.get('select[id="addCarBrand"]').should('be.empty');
      cy.get('select[id="addCarModel"]').should('be.visible')
      // cy.get('select[id="addCarModel"]').should('be.empty');
      cy.get('input[id="addCarMileage"]').should('be.visible')
      cy.get('input[id="addCarMileage"]').should('be.empty');

      cy.get('select[name="carBrandId"]').select(carsdata[i].carBrandname);
      cy.get('select[name="carModelId"]').select(carsdata[i].carModelname);
      cy.get('input[name="mileage"]').type(carsdata[i].carMileage);
      cy.get('div[class="modal-footer d-flex justify-content-end"]').within(() => {
        cy.get("button").contains("Add").click();
      })
      
      cy.get('a[routerlink="profile"]').click();
      cy.wait(2000);
      cy.get('a[routerlink="garage"]').click();
      cy.wait(2000);

      cy.get("button").contains("Add car").click();
      cy.get('select[name="carBrandId"]').select(carsdata[i].carBrandname);
      cy.get('select[name="carModelId"]').select(carsdata[i].carModelname);
      cy.get('input[name="mileage"]').type(carsdata[i].carMileage);
      cy.get('div[class="modal-footer d-flex justify-content-end"]').within(() => {
        cy.get("button").contains("Add").click();
      })
      cy.wait(3000);

      cy.get('a[routerlink="settings"]').click();
      cy.get("button").contains("Remove my account").click();
      cy.get('div[class="modal-content"]').within(() => {
        cy.get("button").contains("Remove").click();
      })
    }
  })
})
