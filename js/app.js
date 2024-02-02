document.addEventListener("DOMContentLoaded", function() {
    myFunction();
});
// var app = angular.module('myApp', ['ngRoute']);

// // Дефинирайте функцията myScrollFunction преди да я използвате
// function myScrollFunction() {
//     // Вземете текущата позиция на превъртане на прозореца
//     var scrollPosition = window.scrollY;

//     // Пример: Ако превъртате повече от 200 пиксела, променете цвета на фона
//     if (scrollPosition > 100) {
//         document.body.style.backgroundColor = 'lightgray';
//     } else {
//         document.body.style.backgroundColor = 'white';
//     }

//     // Можете да добавите друга логика тук в зависимост от вашите изисквания
// }
// Дефиниране на AngularJS модула
var app = angular.module('myApp', ['ngRoute']);

// Дефиниране на функцията за промяна на цвета при превъртане
function myScrollFunction() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        document.body.style.backgroundColor = 'lightgray';
    } else {
        document.body.style.backgroundColor = 'white';
    }
}

// Добавете следната линия там, където имате нужда от слушателя на събития за превъртане.
window.addEventListener('scroll', myScrollFunction, { passive: true });

app.controller('about_meController', function($scope, $http) {
    $scope.pageTitle = "Welcome to About ME";
    
    // Функция за изпращане на формата
    $scope.submitForm = function() {
        // Подготвяме данните за изпращане
        var formData = {
            name: $scope.formData.name,
            email: $scope.formData.email,
            phone: $scope.formData.phone,
            subject: $scope.formData.subject,
            message: $scope.formData.message
        };

        // Изпращаме POST заявка към сървъра за обработка на формата
        $http.post('/path/to/server', formData)
            .then(function(response) {
                // Успешно изпращане на формата
                console.log(response.data);
                // Можете да извършите допълнителна обработка или да изчистите формата
                $scope.formData = {};
            })
            .catch(function(error) {
                // Грешка при изпращане на формата
                console.error('Error submitting form:', error);
            });
    };
});





app.controller('homeController', function($scope) {
    $scope.pageTitle = "Welcome to my Portfolio for DESIGN";
    $scope.doSomething = function() {
        // Логика за действие
    };
});

app.controller('logosController', function($scope) {
    $scope.pageTitle = "Welcome to my Logos design";
    $scope.doSomething = function() {
        // Логика за действие
    };
});
app.controller('logo_videoController', function($scope) {
    $scope.pageTitle = "Welcome to my Logo & Video design";
    $scope.doSomething = function() {
        // Логика за действие
    };
});
app.controller('mobilesController', function($scope) {
    $scope.pageTitle = "Welcome to my Mobiles UX-UI DESIGN";
    $scope.doSomething = function() {
        // Логика за действие
    };
});
app.controller('mockupsController', function($scope) {
    $scope.pageTitle = "Welcome to my Mockups design";
    $scope.doSomething = function() {
        // Логика за действие
    };
});
app.controller('picturesController', function($scope) {
    $scope.pageTitle = "Welcome to my Pictures design";
    $scope.doSomething = function() {
        // Логика за действие
    };
});
app.controller('videosController', function($scope) {
    $scope.pageTitle = "Welcome to my Videos design";
    $scope.doSomething = function() {
        // Логика за действие
    };
});
app.controller('webController', function($scope) {
    $scope.pageTitle = "Welcome to my WEB UX-UI DESIGN";
    $scope.doSomething = function() {
        // Логика за действие
    };
});
app.controller('about_meController', function($scope) {
    $scope.pageTitle = "Welcome to About ME";
    $scope.doSomething = function() {
        // Логика за действие
    };
});


// Добавете останалите контролери за всяка страница
// ...

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html',
            controller: 'homeController'
        })
        .when('/logos', {
            templateUrl: 'view/logos.html',
            controller: 'logosController'
        })
        .when('/logo_video', {
            templateUrl: 'view/logo_video.html',
            controller: 'logo_videoController'
        })
        .when('/mobiles', {
            templateUrl: 'view/mobiles.html',
            controller: 'mobilesController'
        })
        .when('/mockups', {
            templateUrl: 'view/mockups.html',
            controller: 'mockupsController'
        })
        .when('/pictures', {
            templateUrl: 'view/pictures.html',
            controller: 'picturesController'
        })
        .when('/videos', {
            templateUrl: 'view/videos.html',
            controller: 'videosController'
        })
        .when('/web', {
            templateUrl: 'view/web.html',
            controller: 'webController'
        })
        .when('/about_me', {
            templateUrl: 'view/about_me.html',
            controller: 'webController'
        })
        // Добавете останалите маршрути
        .otherwise({
            redirectTo: '/home'
        });
});
