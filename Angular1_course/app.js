//Angular Module
var myApp = angular.module('myApp',['ngMessages','ngResource']);

//Angular Controller
//Minifiable version
myApp.controller('mainController' , ['$log', '$scope', '$filter', '$resource', function($log, $scope, $filter, $resource){

}]);

//Angular Controller Origional
// myApp.controller('mainController',function($log, $scope, $filter, $resource){
    
//     console.log($resource)
    
//     //$filter demo
//     // $scope.name = 'John';
//     // $scope.formattedname = $filter('uppercase')($scope.name);
    
//     // $log.info($scope.name);
//     // $log.info($scope.formattedname)
    
    
//     //loging demos
//     // $log.info('This is some info')
//     // $log.warn('Warning')
//     // $log.debug('some debug')
//     // $log.error('this is an error')
    
//     //This is the data (Model maybe??)
//     // $scope.name = 'Jane Doe';
//     // console.log($scope)
    
//     // $scope.getname = function(){
//     //     return 'John Doe';
//     // }
    
    
//     // var a = $scope.getname();
//     // console.log(a)
// });


//asside functions and strings
// var searchPeople = function(firstname, lastname, height, age, occupation){
//     return 'Jane Doe'
// }

// console.log(searchPeople)

// console.log(angular.injector().annotate(searchPeople));

//asside classes
// class Person{
//     constructor(firstname, lastname){
//         this.firstname= firstname;
//         this.lastname= lastname;
//     }
    
// }
// function logPerson(){
//     var john = new Person('John','Doe');
//     console.log(john.firstname);
// }
// logPerson();
