/**
* assets/app/views/index.js
* @description 
* views that load when the client side app does.
* 
**/

angular.module( 'humpback.views', [
	/**
	* @CORE
	* These are core views used by the framework
	* 
	**/
	/* CORE PROJECT VIEWS */
	'humpback.views.Admin.controllers',
	'humpback.views.Admin.states',
	'humpback.views.AdminCms.controllers',
	'humpback.views.AdminCms.states',
	'humpback.views.AdminCmsCategories.controllers',
	'humpback.views.AdminCmsCategories.states',
	'humpback.views.AdminCmsCategoriesView.controllers',
	'humpback.views.AdminCmsCategoriesView.states',
	'humpback.views.AdminCmsView.controllers',
	'humpback.views.AdminCmsView.states',
	'humpback.views.AdminData.controllers',
	'humpback.views.AdminData.states',
	'humpback.views.AdminDataView.controllers',
	'humpback.views.AdminDataView.states',
	'humpback.views.AdminDataViewView.controllers',
	'humpback.views.AdminDataViewView.states',
	'humpback.views.AdminEmail.controllers',
	'humpback.views.AdminEmail.states',
	'humpback.views.AdminEmailView.controllers',
	'humpback.views.AdminEmailView.states',
	'humpback.views.AdminLogin.controllers',
	'humpback.views.AdminLogin.states',
	'humpback.views.AdminRole.controllers',
	'humpback.views.AdminRole.states',
	'humpback.views.AdminRoleView.controllers',
	'humpback.views.AdminRoleView.states',
	'humpback.views.AdminSetting.controllers',
	'humpback.views.AdminSetting.states',
	'humpback.views.AdminSettingView.controllers',
	'humpback.views.AdminSettingView.states',
	'humpback.views.AdminUser.controllers',
	'humpback.views.AdminUser.states',
	'humpback.views.AdminUserView.controllers',
	'humpback.views.AdminUserView.states',
	'humpback.views.AdminUserViewPassword.controllers',
	'humpback.views.AdminUserViewPassword.states',
	'humpback.views.AdminWebhook.controllers',
	'humpback.views.AdminWebhook.states',
	'humpback.views.home.controllers',
	'humpback.views.home.states',
	/* CORE PROJECT VIEWS END */

	/**
	* @PROJECT SPECIFIC
	* These project specific or custom views for this individual project
	* They are compiled with grunt -> tasks/register/humpback.js
	**/
	/* PROJECT VIEWS */
	
	/* PROJECT VIEWS END */
])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'fourZeroOne', {
			url: '^/401',
			views: {
				"main": {
					templateUrl: 'app/views/401.html'
				}
			}
		})
		.state( 'fourZeroThree', {
			url: '^/403',
			views: {
				"main": {
					templateUrl: 'app/views/403.html'
				}
			}
		})
		.state( 'fourZeroFour', {
			url: '^/404',
			views: {
				"main": {
					templateUrl: 'app/views/404.html'
				}
			}
		})
		.state( 'fiveZeroZero', {
			url: '^/500',
			views: {
				"main": {
					templateUrl: 'app/views/500.html'
				}
			}
		});
});