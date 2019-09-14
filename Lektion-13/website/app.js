angular
    .module("demoApp", ['angularUtils.directives.dirPagination', 'ngRoute'])
    .config(function(paginationTemplateProvider, $routeProvider) {
        paginationTemplateProvider.setPath('js/dirPagination.tpl.html');

        $routeProvider
            .when("/", {
                controller: "homeController",
                templateUrl: "views/home.view.html",
            })
            .when("/about", {
                controller: "aboutController",
                templateUrl: "views/about.view.html",
            })
            .otherwise({ redirectTo: "/" });

    })
    .controller("homeController", function($rootScope, $http) {
        
        const starsTotal = 5;

        $http.get("http://localhost:9999/api/products").then((res) => $rootScope.products = res.data)           
      
        $rootScope.rating = function(input) {
            return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
        } 

        $rootScope.rowLimits = {
            "type": "select", 
            "name": "rowLimits",
            "value": "10", 
            "values": [ "2", "5", "10", "15", "20", "50", "100"] 
        };

        $rootScope.sortProducts = {
            "type": "select", 
            "name": "sortProducts",
            "value": "name", 
            "values": [ "name", "price", "category"] 
        };
        
        $rootScope.cartComponent = "components/cart.component.html"
        $rootScope.footerComponent = "components/footer.component.html"
        $rootScope.headerComponent = "components/header.component.html"
        $rootScope.paginationComponent = "components/pagination.component.html"
        $rootScope.filterComponent = "components/filter.component.html"      
        $rootScope.productComponent = "components/gridview.component.html"
        
        $rootScope.changeView = function(view) {
            $rootScope.productComponent = "components/" + view;
        }
    })
    .controller("aboutController", function($rootScope, $http) {
        

    })