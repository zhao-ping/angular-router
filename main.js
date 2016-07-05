/**
 * Created by zp on 16-7-5.
 */
var routerApp=angular.module('angularRouter',['ngRoute']);
routerApp.controller('routerCtrl',function($scope){
    $scope.items=[
        {type:'text'},
        {type:'date'}
    ];
    $scope.alertShow=false;
    $scope.toggle1=function () {
        $scope.alertShow=!$scope.alertShow;
    };
    $scope.deleteitem=function(index){
        $scope.items.splice(index,1);
    };
    $scope.addItem=function () {
        var itemType=jQuery('input[type=radio]:checked').val();
        var newElement={type:itemType};
        $scope.items.push(newElement);
        $scope.alertShow=false;
    }
}).config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/edit',{
            // template:"这是编辑界面"
            templateUrl:'./editor.html'
        })
        .when('/preview',{
            // template:'这是预览界面'
            templateUrl:'./preview.html'
        })
        .otherwise({redirectTo:'/edit'});
}]);
