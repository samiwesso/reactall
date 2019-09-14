var app = angular.module("myApp", ["ngRoute"])
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/", {
        templateUrl: "view/horizontal.html",
        controller: "horizontalController" 
    })
    
    .when("/horizontal", {
        templateUrl: "view/horizontal.html",
        controller: "horizontalController" 
    })
    
    .when("/vertical", {
        templateUrl: "view/vertical.html",
        controller: "verticalController" 
    })
    });

        // Horizontal Controller
        app.controller("horizontalController", function($scope) {

        $scope.products = [
            { image: "images/picture.jpg", name: "Bild Stereo  T-Shirt", price: "$500,00", rating: 4.5, totalratings: 7 },
            { image: "images/p-2.jpg", name: "First Stereo  T-Shirt", price: "$100,00", rating: 6.3, totalratings: 6 },
            { image: "images/p-3.jpg", name: "Other Stereo  T-Shirt", price: "$200,00", rating: 2.5, totalratings: 5 },
            { image: "images/p-4.jpg", name: "Picture Stereo  T-Shirt", price: "$300,00", rating: 1.5, totalratings: 2 },
            { image: "images/p-5.jpg", name: "My Stereo  T-Shirt", price: "$400,00", rating: 3.8, totalratings: 8 },
            { image: "images/p-6.jpg", name: " Stereo  T-Shirt", price: "$500,00", rating: 5.6, totalratings: 5 },
            { image: "images/p-7.jpg", name: "Img Stereo  T-Shirt", price: "$600,00", rating: 2.5, totalratings: 7 },
            { image: "images/p-8.jpg", name: "Cat Stereo  T-Shirt", price: "$700,00", rating: 7.6, totalratings: 5 },
            { image: "images/p-9.jpg", name: "Sky Stereo  T-Shirt", price: "$800,00", rating: 9.5, totalratings: 9 },
            { image: "images/p-10.jpg", name: "Cy Stereo  T-Shirt", price: "$900,00", rating: 7.4, totalratings: 8 },
            { image: "images/p-11.jpg", name: "Dream Stereo  T-Shirt", price: "$500,00", rating: 3.3, totalratings: 5 },
            { image: "images/p-12.jpg", name: "Helix Stereo  T-Shirt", price: "$500,00", rating: 2.7, totalratings: 5 }
        ];

        const starsTotal = 5;

        $scope.rating = function (input) {
            return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
        }
        
    })
        

        // Vertical Controller
        app.controller("verticalController", function($scope) {
            $scope.products = [
                { image: "images/picture.jpg", name: "Bild Stereo  T-Shirt", price: "$500,00", rating: 4.5, totalratings: 7 },
                { image: "images/p-2.jpg", name: "First Stereo  T-Shirt", price: "$100,00", rating: 6.3, totalratings: 6 },
                { image: "images/p-3.jpg", name: "Other Stereo  T-Shirt", price: "$200,00", rating: 2.5, totalratings: 5 },
                { image: "images/p-4.jpg", name: "Picture Stereo  T-Shirt", price: "$300,00", rating: 1.5, totalratings: 2 },
                { image: "images/p-5.jpg", name: "My Stereo  T-Shirt", price: "$400,00", rating: 3.8, totalratings: 8 },
                { image: "images/p-6.jpg", name: " Stereo  T-Shirt", price: "$500,00", rating: 5.6, totalratings: 5 },
                { image: "images/p-7.jpg", name: "Img Stereo  T-Shirt", price: "$600,00", rating: 2.5, totalratings: 7 },
                { image: "images/p-8.jpg", name: "Cat Stereo  T-Shirt", price: "$700,00", rating: 7.6, totalratings: 5 },
                { image: "images/p-9.jpg", name: "Sky Stereo  T-Shirt", price: "$800,00", rating: 9.5, totalratings: 9 },
                { image: "images/p-10.jpg", name: "Cy Stereo  T-Shirt", price: "$900,00", rating: 7.4, totalratings: 8 },
                { image: "images/p-11.jpg", name: "Dream Stereo  T-Shirt", price: "$500,00", rating: 3.3, totalratings: 5 },
                { image: "images/p-12.jpg", name: "Helix Stereo  T-Shirt", price: "$500,00", rating: 2.7, totalratings: 5 }
            ];


            // ratings
            const starsTotal = 5;
    
            $scope.rating = function (input) {
                return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
            }

           // Scroll function
            $(window).scroll(function () {
                let topPosition = $(this).scrollTop();
    
                if (topPosition > 100) {
                    $(".scrollTop").css("opacity", "1");
                } else {
                    $(".scrollTop").css("opacity", "0");
                }
            })
        });



