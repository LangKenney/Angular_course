//Angular Module
var myApp = angular.module('myApp',[]);


//Angular Controller
myApp.controller('mainController',function(){
    
})



class Person{
    constructor(firstname, lastname){
        this.firstname= firstname;
        this.lastname= lastname;
    }
    
}
function logPerson(){
    var john = new Person('john','Doe');
    console.log(john);
}
logPerson();