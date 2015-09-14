/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:28:21 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admin.controllers', [

])
.controller( 'AdminCtrl', function AdminController( $scope, DS ) {

	$scope.filters = {
		itemsPerPage: [
			{
				value: 10,
				name: '10'
			},
			{
				value: 20,
				name: '20'
			},
			{
				value: 30,
				name: '30'
			},
			{
				value: 40,
				name: '40'
			},
			{
				value: 50,
				name: '50'
			},
			{
				value: 100,
				name: '100'
			}
		],
		itemsSort: [
			{
				value: 'createdAt DESC',
				name: 'Newest',

			},
			{
				value: 'createdAt ASC',
				name: 'Oldest'
			}
		]
	};

});