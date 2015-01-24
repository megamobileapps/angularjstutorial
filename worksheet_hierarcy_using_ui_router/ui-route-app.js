var uiApp = angular.module('uiApp',['ui.router']);
uiApp.run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }   
  ]
);

uiApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: function($scope, SimpleFactory) {
        
      }
    })

    .state('gradelist', {
      url: "/grade",
      templateUrl: "grade.list.html",
      controller: function($scope, SimpleFactory) {
        $scope.gradelist = SimpleFactory.getGrades();
	    $scope.selectItem = function(selectedItem) {
		_($scope.shoppingList).each(function(item) {
		    item.selected = false;
		    if (selectedItem === item) {
		        selectedItem.selected = true;
		    }
		});
    	};
      }
    })

    .state('gradelist.subjectlist', {
      url: "/:gradeid",
      templateUrl: "subject.list.html",
      controller: function($scope, $stateParams, SimpleFactory) {
	    console.log("gradeid:"+$stateParams.gradeid);
	    $scope.gradeid = $stateParams.gradeid;
	    $scope.subjectlist = SimpleFactory.getSubjects($scope.gradeid);
        
	    console.log("subjct list is"+JSON.stringify($scope.subjectlist));
	    $scope.selectItem = function(selectedItem) {
		    _($scope.subjectlist).each(function(item) {
		        item.selected = false;
		        if (selectedItem === item) {
		            selectedItem.selected = true;
		        }
		    });
        };
    },
   // pass gradeid to child state	
    resolve:{
      gradeid: ['$stateParams', function($stateParams){
          return $stateParams.gradeid;
      }]
   }
})
.state('gradelist.subjectlist.topiclist', {
      url: "/:subjectid",
      templateUrl: "topic.list.html",
      controller: function($scope, $stateParams, gradeid, SimpleFactory) {
	    console.log("subjectid :"+$stateParams.subjectid);
	    $scope.subjectid = $stateParams.subjectid;
		$scope.gradeid=gradeid;
	    $scope.topiclist = SimpleFactory.getTopics($scope.gradeid, $scope.subjectid);
        
	    console.log("topic list is"+JSON.stringify($scope.topiclist));
	    $scope.selectItem = function(selectedItem) {
		    _($scope.subjectlist).each(function(item) {
		        item.selected = false;
		        if (selectedItem === item) {
		            selectedItem.selected = true;
		        }
		    });
        };
    },//controller
    resolve:{
      subjectid: ['$stateParams', function($stateParams){
          return $stateParams.subjectid;
      }]
	}
})
.state('gradelist.subjectlist.topiclist.worksheetlist', {
      url: "/:topicid",
      templateUrl: "worksheet.list.html",
      controller: function($scope, $stateParams, gradeid, subjectid, SimpleFactory) {
	    console.log("topicid:"+$stateParams.topicid +"gradeid:"+gradeid+"subjectid:"+subjectid);
	    $scope.topicid = $stateParams.topicid;
		$scope.gradeid=gradeid;
		$scope.subjectid=subjectid;
	    $scope.worksheetlist = SimpleFactory.getWorksheets($scope.gradeid, 
									$scope.subjectid, $scope.topicid);
        
	    console.log("worksheetlist list is"+JSON.stringify($scope.worksheetlist));
	    $scope.selectItem = function(selectedItem) {
		    _($scope.subjectlist).each(function(item) {
		        item.selected = false;
		        if (selectedItem === item) {
		            selectedItem.selected = true;
		        }
		    });
        };
    },//controller
    resolve:{
      topicid: ['$stateParams', function($stateParams){
          return $stateParams.topicid;
      }]
	}
})
.state('gradelist.subjectlist.topiclist.worksheetlist.show', {
      url: "/:worksheetid",
      templateUrl: "worksheet.content.html",
      controller: function($scope, $stateParams, gradeid, subjectid, topicid, SimpleFactory) {
	    console.log("topicid:"+topicid +"gradeid:"+gradeid+"subjectid:"+subjectid);
	    $scope.worksheetid = $stateParams.worksheetid;
		$scope.gradeid=gradeid;
		$scope.subjectid=subjectid;
		$scope.topicid=topicid;
	    $scope.worksheetContent = SimpleFactory.getWorksheetContent($scope.gradeid, 
									$scope.subjectid, $scope.topicid, $scope.worksheetid);
		console.log("worksheet content:"+$scope.worksheetContent);
        
    }//controller
});
});


uiApp.factory("SimpleFactory", function(){
    var grades=[{name:'UKG'}, {name:'LKG'}];
    var subjects=[
        { 
            gradeid:'UKG', 
            subjects:[
            {
                id:'GUKGE',
                detail:'english detail'
            }
        
            ]
        },
        { 
            gradeid:'LKG', 
            subjects:[
            {
                id:'GLKGE',
                detail:'english detail'
            }
        
            ]
        }
    ];
    
    var topics = [
        {
            subjectid:'GUKGE',
            topics:[
                {id:'grammer1',
                 detail:'grammer1 detail'
                },
                {id:'grammer2',
                 detail:'grammer2 detail'
                }
            ]
        }
    ];
    
    var worksheets = [
        {
            topicid:'grammer1',
            worksheets:[{
                id:"1",
                detail:'worksheet1 detail',
                content:'worksheet content'
            },
            {
                id:"2",
                detail:'worksheet2 detail',
                content:'worksheet content'
            }]
        }
    ];
    
    var factory={};
    factory.getGrades=function getGrades() {
        return grades;
    }
    
    factory.getSubjects=function getSubjects(gradeid) {
		var retVal  = {};
        angular.forEach(subjects, function(subjectdata){
	    console.log("argument gradeid: "+(gradeid)+" iterator gradeid: "+(subjectdata.gradeid));
            if(subjectdata.gradeid === gradeid ) {
                retVal= subjectdata.subjects;
            }
        });
        return retVal;
    }
    factory.getTopics=function getTopics(gradeid, subjectid) {
		var retVal ={};
        angular.forEach(topics, function(topicdata){
            if(topicdata.subjectid === subjectid ) {
                retVal= topicdata.topics;
            }
        });
        return retVal;
    }
    
    factory.getWorksheets=function(gradeid, subjectid, topicid) {
		var retVal ={};
       angular.forEach(worksheets, function(worksheetdata){
            if(worksheetdata.topicid === topicid ) {
                retVal = worksheetdata.worksheets;
            }
        });
        return retVal;
    }
    
    factory.getWorksheetContent=function(gradeid, subjectid, topicid, worksheetid) {
       var retVal = ""; 
        angular.forEach(worksheets, function(data){
            if(data.topicid === topicid ) {
                angular.forEach(data.worksheets, function (worksheetdata){
                    if(worksheetdata.id === worksheetid ) {
                        retVal= worksheetdata.content;
                    }
                });
            }
        });
        return retVal;
    }
    
    return factory;
});
