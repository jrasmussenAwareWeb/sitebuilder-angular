sb.app.directive('navigation', function() {
    var obj = {
        restrict: 'E',
        templateUrl: 'partials/controls/nav.html',
        controller: 'NavCtrl'
    };
    return obj;
});

sb.app.directive('sidenavigation', function() {
    var obj = {
        restrict: 'E',
        templateUrl: 'partials/controls/sideNav.html',
        controller: 'NavCtrl'
    };
    return obj;
});

sb.app.directive('backStep', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function () {
                history.back();
                scope.$apply();
            });
        }
    };
});