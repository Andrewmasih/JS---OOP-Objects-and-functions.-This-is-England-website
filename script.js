/*objects are a collection of related data, it can hold data, methods, properties,functions and even other objects */


let country = {
  name: "england",
  population: 1000,
  sea: true,
  language: "english"
  bio = function () {

    /*here I have created a function named 'bio', that shows ashort bio of the object country, JS objects can have functions themselves */

    console.log (this.name + "is a country with" + this.population + "people");
  }   

}


bio();

/* BIO, is a function that is used as an action for an object, like country the object, has a method called 'bio;' but if we run it we get an "error code" as variable is not defined*/ 

