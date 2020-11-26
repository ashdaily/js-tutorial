// Create an object:
const firstName = "Ash";

var person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
        // this will look inside the object for firstName
      return this.firstName + " " + this.lastName;
    }
};


  

