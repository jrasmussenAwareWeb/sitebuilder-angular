sb.app.controller('ComponentListCtrl', ['$scope', '$routeParams', 'ComponentResources',
    function ($scope, $routeParams, ComponentResources) {

    $scope.LoadingIndicator = true;
    $scope.components = ComponentResources.components;

}]);