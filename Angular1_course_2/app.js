
var myApp = angular.module('myApp',['ngMessages','ngResource']);

//Angular Controller
//Minifiable version
myApp.controller('mainController' , ['$scope', '$timeout','$filter','$http', function($scope, $timeout,$filter,$http){
    $scope.name = 'Everyone';
    $scope.characters = 5;
    
    $timeout(function(){
        $scope.name = 'Lang'
        
    }, 3000);
    
    $scope.handle = '';
    $scope.username = '';
    $scope.password = '';
    
    $scope.rules = [
        { rulename:'Must be 5 characters'},
        { rulename:"Must not be used elsewhere" },
        { rulename:"Must be cool" }
        ];
    
    $scope.lowerCaseHandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    
    $timeout(function(){
            console.log($scope.handle)
    }, 6000);
    
    $scope.$watch('handle',function(newValue, oldValue){
        console.info("Watched");
        console.log('Old:'+oldValue);
        console.log('New:'+newValue);
    })
    
    
    //-----------HTTPS REQUESTS-----------  
    //----GET REQUEST----
    //---WEB JSON GET REQUEST----
    $http.get('https://api.github.com/users/mralexgray/repos')
        .then(function successCallback(response) {
            $scope.data = response;
            console.log($scope.data.data[0].name)
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    
    //-----LOCAL JSON GET REQUEST----
    //     $http.get('/Angular1_course/1.json')
    //         .then(function successCallback(response) {
    //             $scope.weatherData = response;
    //   }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //   });

       $timeout(function(){
            console.log($scope)
            console.log($scope.weatherData.data.body)
    }, 6000);

    //----POST REQUEST---
    // $http.post('______', {newItem: $scope.newItem})
    // .success(function(result){
    //     $scope.data = result;
    // })
    // .erro(function(data, status){
    //     console.log(data);
    // });
    
}]);

myApp.controller('secondController' , ['$scope', function($scope){
    console.log($scope)
    $scope.secondName = 'Finally this isnt broken'
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



