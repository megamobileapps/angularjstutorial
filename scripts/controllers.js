var controllers = {};
controllers.SimpleController=function ($scope, SimpleFactory) {
    $scope.customers=[];
    $scope.cartItems=[];
    init();
    function init() {
        $scope.customers= SimpleFactory.getCustomers();  
        $scope.cartItems= SimpleFactory.getCartItems();  
    }
    $scope.addCustomer = function() {
        $scope.customers.push({name:$scope.newCustomer.name, city:$scope.newCustomer.city});
    };
};
// add multiple controller funcitons in controllers
// each one will be added as separate controllers and can be use
// in different divs.
utswApp.controller(controllers);