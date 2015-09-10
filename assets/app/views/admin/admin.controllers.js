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
				amount: 10,
				name: '10'
			},
			{
				amount: 20,
				name: '20'
			},
			{
				amount: 30,
				name: '30'
			},
			{
				amount: 40,
				name: '40'
			},
			{
				amount: 50,
				name: '50'
			},
			{
				amount: 100,
				name: '100'
			}
		],
		itemsSort: [
			{
				value: 'createdAt desc',
				name: 'Newest',

			},
			{
				value: 'createdAt asc',
				name: 'Oldest'
			}
		]
	};

});