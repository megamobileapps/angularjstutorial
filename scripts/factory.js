utswApp.factory("SimpleFactory", function(){



    var store_data = [{
			gradename:'grade1',
            isselected:'active',
			gradedescription:'Grade 1 is good',
            gradeurl:newSitePath+"worksheets/allClasses.php?grade=1",
			subjects:[{
				name:"English",
                subjectid:"G1E",
				description:"English subject is for English",
				img:"http://www.uptoschoolworksheets.com/in/contents/photos/covers/g1e.jpg",
                url:newSitePath+"worksheets/showTopics.php?grade=1&name=English&id=G1E",
				threemonthrate:100,
				sixmonthrate:200,
				twelvemonthrate:1000,
                hasprintrate:true,
				printrate:1200
			},
            {
				name:"Hindi Hand Writing",
                subjectid:"G1HHW",
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
            isselected:'',
			gradedescription:'Grade 2 is good',
            gradeurl:newSitePath+"worksheets/allClasses.php?grade=2",
			subjects:[{
				name:"English",
                subjectid:"G2E",
				description:"English subject is for English",
				img:"http://www.uptoschoolworksheets.com/in/contents/photos/covers/G2E.jpg",
                url:newSitePath+"worksheets/showTopics.php?grade=2&name=English&id=G2E",
				threemonthrate:100,
				sixmonthrate:200,
				twelvemonthrate:1000,
                hasprintrate:true,
				printrate:1200
			},
            {
				name:"Hindi Hand Writing",
                subjectid:"G2HHW",
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
   
    
    var myCart = new ShoppingCart("utswStore");
    myCart.addCheckoutParameters("Paypal", {serviceName:"Paypal", merchantID:"goel74@gmail.com", options:{}});
    myCart.addCheckoutParameters("Facebook", {serviceName:"Facebook", options:{}});
    var factory = {};
   

    factory.getStoreData = function() {
        return store_data;
    }
    
    factory.getCart = function() {
        return myCart;
    }
    
    
    return factory;

});
