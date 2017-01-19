var myApp=angular.module("myApp", []);

myApp.controller("myController", function($scope){

    $scope.navOptions=[
        {
            name: "Home",
            link: "index.html"
        },
        {
            name: "Blog",
            link: "tab1.html"
        },
        {
            name: "About Me",
            link: "tab2.html"
        },
        {
            name: "Projects",
            link: "tab3.html"
        },
        {
            name: "Research",
            link: "research.html"
        },
        {
            name: "Contact",
            link: "contact.html"
        },
    ];

    $scope.getOptions=function(){
        return this.navOptions;
    };

});

myApp.directive('ngNavBar', function() {
  return {
    restrict: 'A',
    templateUrl: 'nav-bar.html'
  }
});
