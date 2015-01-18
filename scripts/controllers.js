var controllers = {};
controllers.SimpleController=function ($scope, SimpleFactory) {
    
    $scope.storeItems=[];
    $scope.cart;
    init();
    function init() {
        $scope.storeItems= SimpleFactory.getStoreData();  
        $scope.cart=SimpleFactory.getCart();
    }
   
};

controllers.ShowStoreItemDetailController = function($scope, $routeParams,SimpleFactory) {
 
    $scope.worksheetDetails=[];
    $scope.cart;
    init();
    function init() {
        $scope.worksheetDetails= SimpleFactory.getStoreData();   
        $scope.cart=SimpleFactory.getCart();
        
        $scope.currrentSubjectItem={};
        
        $scope.currrentSubjectItem.subjectName = $routeParams.subjectName;
        $scope.currrentSubjectItem.gradeName = $routeParams.gradeName;
        $scope.currentSubjectData=[];
        
        var sfound=false;
        angular.forEach($scope.worksheetDetails,function(data){
            if(data.gradename === $routeParams.gradeName 
              && sfound === false ) {
                //search for subject in it
                //
                console.log("Found grade "+$routeParams.gradeName);
                angular.forEach(data.subjects, function(subData) {
                    if(subData.name === $routeParams.subjectName ) {
                        $scope.currentSubjectData.push(subData);
                        console.log("Found subject "+$routeParams.subjectName);
                        sfound = true;
                    }
                });

            }
        });
    }
 
};

// add multiple controller funcitons in controllers
// each one will be added as separate controllers and can be use
// in different divs.
utswApp.controller(controllers);