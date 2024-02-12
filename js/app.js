document.addEventListener("DOMContentLoaded", function() {
    myFunction();
});


// app.module.js
var app = angular.module('myApp', ['ngRoute']);

// app.config.js
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html',
            controller: 'HomeController'
        })
        .when('/logos', {
            templateUrl: 'view/logos.html',
            controller: 'LogosController'
        })
        // Добавете останалите маршрути
        .when('/logo_video', {
            templateUrl: 'view/logo_video.html',
            controller: 'Logo_videoController'
        })
        .when('/mobiles', {
            templateUrl: 'view/mobiles.html',
            controller: 'MobilesController'
        })
        .when('/mockups', {
            templateUrl: 'view/mockups.html',
            controller: 'MockupsController'
        })
        .when('/pictures', {
            templateUrl: 'view/pictures.html',
            controller: 'PicturesController'
        })
        .when('/videos', {
            templateUrl: 'view/videos.html',
            controller: 'VideosController'
        })
        .when('/web', {
            templateUrl: 'view/web.html',
            controller: 'WebController'
        })
        .when('/about_me', {
            templateUrl: 'view/about_me.html',
            controller: 'AboutMeController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

// home.controller.js
app.controller('HomeController', ['$scope', function($scope) {
    $scope.pageTitle = "Welcome to my Portfolio for DESIGN";
    $scope.doSomething = function() {
        // Логика за действие
    };
}]);
// controllers/logos.controller.js
app.controller('LogosController', ['$scope', function($scope) {
    $scope.pageTitle = "Welcome to my Logos design";
    $scope.doSomething = function() {
        // Логика за действие
    };
}]);
app.controller('Logo_videoController', ['$scope', function($scope) {
        $scope.pageTitle = "Welcome to my Logo & Video design";
        $scope.doSomething = function() {
            // Логика за действие
        };
    }]);
 app.controller('MobilesController', ['$scope', function($scope) {
        $scope.pageTitle = "Welcome to my Mobiles UX-UI DESIGN";
        $scope.doSomething = function() {
            // Логика за действие
        };
    }]);
app.controller('MockupsController', ['$scope', function($scope) {
        $scope.pageTitle = "Welcome to my Mockups design";
        $scope.doSomething = function() {
            // Логика за действие
        };
    }]);
app.controller('PicturesController', ['$scope', function($scope) {
        $scope.pageTitle = "Welcome to my Pictures design";
        $scope.doSomething = function() {
            // Логика за действие
        };
    }]);
app.controller('VideosController', ['$scope', function($scope) {
        $scope.pageTitle = "Welcome to my Videos design";
        $scope.doSomething = function() {
            // Логика за действие
        };
    }]);
app.controller('WebController', ['$scope', function($scope) {
        $scope.pageTitle = "Welcome to my WEB UX-UI DESIGN";
        $scope.doSomething = function() {
            // Логика за действие
        };
    }]);
app.controller('About_meController', ['$scope', function($scope) {
        $scope.pageTitle = "Welcome to About ME";
        $scope.doSomething = function() {
            // Логика за действие
        };
    }]);




// =================



// Добавете останалите контролери
// ...

// about_me.controller.js
app.controller('AboutMeController', ['$scope', '$http', function($scope, $http) {
    $scope.pageTitle = "Welcome to About ME";

    // Функция за изпращане на формата
    $scope.submitForm = function() {
        var formData = {
            name: $scope.formData.name,
            email: $scope.formData.email,
            phone: $scope.formData.phone,
            subject: $scope.formData.subject,
            message: $scope.formData.message
        };

        $http.post('/path/to/server', formData)
            .then(function(response) {
                console.log(response.data);
                $scope.formData = {};
            })
            .catch(function(error) {
                console.error('Error submitting form:', error);
            });
    };
}]);

