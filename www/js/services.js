angular.module('app.services', ['ngResource'])

.factory('SalaryService', ['$resource', function($resource) {
	// localStorage.setItem("empId", 1);
	return $resource('http://192.168.12.1:8080/api/salary/:emp_id', {emp_id: localStorage.getItem("empId")});
  }])
.factory('AdvancesService', ['$resource', function($resource) {
	return $resource('http://192.168.12.1:8080/api/advances', {}, {
		query: {method: 'GET', isArray: true},
		create: {method: 'POST'}
	});
  }])
.factory('VacationsService', ['$resource', function($resource) {
	return $resource('http://192.168.12.1:8080/api/vacations', {}, {
		query: {method: 'GET', isArray: true},
		create: {method: 'POST'}
	});
  }])
.factory('UsersService', ['$resource', function($resource) {
	return $resource('http://192.168.12.1:8080/api/users', {}, {
		query: {method: 'GET', isArray: true},
		create: {method: 'POST'}
	});
  }])
.service('BlankService', [function(){

}]);

