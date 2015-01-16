utswApp.config(function($routeProvider) {
    $routeProvider
        .when("/",
              {
                templateUrl:"views/viewmain.html",
                controller:"SimpleController"
            })
         .when("/add",
              {
                templateUrl:"views/viewadd.html",
                controller:"SimpleController"
            })
        .when("/help", 
              {
                templateUrl:"views/viewhelp.html",
                controller:"SimpleController"
               })
        .when("/signin", 
              {
                templateUrl:"views/signin.html",
                controller:"SimpleController"
               })
        .otherwise({redirectTo:"/"});
});