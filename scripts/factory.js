utswApp.factory("SimpleFactory", function(){

    var customers = [
        {name:'pankaj goel', city:'bgl'},
        {name:'shiffauli goel', city:'shbd'}
    ];

    var cart_items = [
        {name:'english', img:'http://www.uptoschoolworksheets.com/in/contents/photos/covers/G2E.jpg'},
        {name:'hindi hand writing', img:'http://www.uptoschoolworksheets.com/in/contents/photos/covers/GHHW.jpg'}
    ];


    var grade_data = [{
			gradename:'grade1',
			gradedescription:'Grade 1 is good',
            gradeurl:newSitePath+"worksheets/allClasses.php?grade=1",
			subjects:[{
				name:"English",
				description:"English subject is for English",
				img:"http://www.uptoschoolworksheets.com/in/contents/photos/covers/g1e.jpg",
                url:newSitePath+"worksheets/showTopics.php?grade=1&name=English&id=G1E",
				threemonthrate:100,
				sixmonthrate:200,
				twelvemonthrate:1000,
				printrate:1200
			},
            {
				name:"Hindi Hand Writing",
				description:"HHW subject is for English",
				img:"http://www.uptoschoolworksheets.com/in/contents/photos/covers/g1hhw.jpg",
                url:newSitePath+"worksheets/showTopics.php?grade=1&name=Hindi Hand Writing&id=G1HHW",
				threemonthrate:120,
				sixmonthrate:220,
				twelvemonthrate:1200,
				printrate:1220
			}
            ]
		},
        {
			gradename:'grade2',
			gradedescription:'Grade 2 is good',
            gradeurl:newSitePath+"worksheets/allClasses.php?grade=2",
			subjects:[{
				name:"English",
				description:"English subject is for English",
				img:"http://www.uptoschoolworksheets.com/in/contents/photos/covers/G2E.jpg",
                url:newSitePath+"worksheets/showTopics.php?grade=2&name=English&id=G2E",
				threemonthrate:100,
				sixmonthrate:200,
				twelvemonthrate:1000,
				printrate:1200
			},
            {
				name:"Hindi Hand Writing",
				description:"HHW subject is for English",
				img:"http://www.uptoschoolworksheets.com/in/contents/photos/covers/G2HHW.jpg",
                url:newSitePath+"worksheets/showTopics.php?grade=2&name=Hindi Hand Writing&id=G2HHW",
				threemonthrate:120,
				sixmonthrate:220,
				twelvemonthrate:1200,
				printrate:1220
			}
            ]
		}];
    var factory = {};
    factory.getCustomers = function (){
        return customers;
    }

    factory.getCartItems = function() {
        return grade_data;
    }
    
    factory.postCustomer = function(customer){
    };
    return factory;

});
