var myApp = angular.module('myApp',['ngRoute']);

//provides routes for different 'pages' in a single page app
myApp.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
        
    })
    
    .when('/second/:searched',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
        
    });
});

//creating a costume Service
myApp.service('nameService', function(){
    var self = this;
   this.name = 'John Doe';
   this.namelength = function(){
       return self.name.length;
   }
});

//Angular Controller
//Minifiable version
myApp.controller('mainController' , ['$scope', '$location', '$log', 'nameService', function($scope, $location, $log, nameService){
    // $log.info($location.path());
    
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state:'NY',
        zip:'11111'
    }
    
    $scope.people = [
        {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state:'NY',
        zip:'11111'
        },
        
        {
        name: 'Jane Doe',
        address: '567 Second St.',
        city: 'Buffalo',
        state:'NY',
        zip:'123455'
        },
        
        {
        name: 'Beach Bunny',
        address: '1111 Ocean Ave.',
        city: 'Santa Cruz',
        state:'CA',
        zip:'910203'
        },
        
        {
        name: 'John ToHip',
        address: '555 Market St.',
        city: 'San Francisco',
        state:'CA',
        zip:'94102'
        }
        ];
    
    $scope.formattedAddress = function(person){
        var formatAddress = person.address+', '+person.city+' '+person.state+' '+person.zip;
        return formatAddress
    }
    
    $scope.name = nameService.name;

    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    })
    
    // $log.log(nameService.name);
    // $log.log(nameService.namelength());
}]);

//second controller
myApp.controller('secondController' , ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){
    $scope.searched = $routeParams.searched || 1;
    $scope.name = nameService.name;
    
    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    })
    
}]);

//Creating a driective
myApp.directive('searchResult', function(){
    return {
        //restrict - E = attribute (<serach-result>), A - element (<Div search-result)...
        // ...C = class (<div class='search-results'), M = comment (<!--directive: search result -->)
        //was ->'AECM'
        restrict: 'AE', 
        //Origional template, one string before breaking into the sperate templates html files
        // template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St.New York, NY 11111</p></a>',
        
        templateUrl: 'directives/searchresults.html',
        replace: true,
        //scope keyword isolates scope model
        scope: {
            personObject: '=',
            formattedAddressFunction: '&'
            //This was how to pass by 
            // personName: '@',
            // personAddress: '@'
        }
    }
});



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



