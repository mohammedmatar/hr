angular.module('app.controllers', [])
  
.controller('vacationsCtrl', function($scope, VacationsService) {
	var matype = '';
	$scope.showSelectValue = function(type) {
    	// console.log(type);
    	matype = type;
	}
	$scope.sendVacationsRequest = function(req){
		var vacations = {

			type:        matype,
    		nofdays:     req.nod,
    		enddate:     req.edate,
    		stdate:      req.sdate,
    		workdate:    req.wdate,
    		comments:    req.comments,
    		emp_id:		 localStorage.getItem("empId")
		}
		VacationsService.create(vacations, function(data){});
		alert('Request has been sent !');
	}
	// alert(localStorage.getItem("empId"));
})
   
.controller('advancesCtrl', function($scope, AdvancesService) {
	var matype = '';
	$scope.showSelectValue = function(type) {
    	// console.log(type);
    	matype = type;
	}
	$scope.sendAdvancesRequest = function(req){
		var advances = {
			type:        matype,
    		amount:      req.amount,
    		pstart:      req.pstart,
    		pnumber:     req.pnumber,
    		pend:        req.pend,
    		comments:    req.comments,
    		emp_id:		 localStorage.getItem("empId")
		}
		AdvancesService.create(advances, function(data){});
		alert('Request has been sent !');
	}
})
.controller('salaryCertificateCtrl', function($scope, SalaryService) {
	$scope.salaryCert = SalaryService.get({emp_id: localStorage.getItem("empId")});
	// console.log($scope.salaryCert);
})
      
.controller('loginCtrl', function($scope, $state) {
	$scope.login = function (u) {
		// body...
		if(u.code === '123456' && u.password === '123456'){
			$state.go('embloyeeLogin');
		}else{
			alert('Sorry you can\'t login ');
		}
	}
})
   
.controller('embloyeeLoginCtrl', function($scope, $state, UsersService) {
	// $scope.code     = '';
	// $scope.password = '';

	var users = UsersService.query();	
	$scope.checkLogin = function(user) {
		// body...
		alert('good1');
		var u     = users();
		users.$promise.then(function(data) {
			alert('good before promise');
			// for(d in data){
				// console.log(d);
			// }
			var BreakException= {};
			try {

			 data.forEach(function (u) {
			 	alert('goodinto forEach');
			 	// console.log('u.toJSON().code = '+u.toJSON().code);
			 	// console.log('$scope.code = '+user.code);

			 	// console.log('u.toJSON().password = '+u.toJSON().password);
			 	// console.log('$scope.password = '+user.password);
			 	if( u.toJSON().code === user.code && u.toJSON().password === user.password){
			 		
			 		localStorage.setItem("empId", user.code);
			 		$state.go('tabsController.vacations');
			 		throw BreakException;
			 	}
			 }); 
			 alert('Your ID \ Password incorrect !');
			 /**/
			 } catch(e) {
    			if (e!==BreakException) throw e;
			 }
			 
   		});


		// .$promise.then(function(us) {
			// console.log(us.data);
		// });

		// console.log(users);
		// for (var i 	= users.length - 1; i >= 0; i--) {
			// console.log(users[i].code)
	 		// if( users[i].code === user.code && users[i].password === user.password ){
	 			
	 			// $state.go('tabsController.vacations');
	 			// alert('correct !');
		 	// }//if
		 	// else
		 	// {
		 		// alert('Your ID \ Password Incorrect !');
		 	// }
	 	// } 
	}//checkLogin

})
   
.controller('sampleCtrl', function($scope) {

})
 