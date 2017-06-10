 (function() { 
  function CookieCtrl($uibModalInstance, $cookies, $uibModal) { 
     this.ok = function(username) { 
        if (!username || username === '' || username === undefined) { 
             $uibModal.open({ 
                 templateUrl: '/templates/cookie.html',
                 controller: 'CookieCtrl',
                 controllerAs: 'cookie',
             })
             alert("You require a username to continue!");
        };
        $cookies.put('username', username)  
        $uibModalInstance.close();
    }; 
  }
  angular 
    .module('blocChat') 
    .controller('CookieCtrl', ['$uibModalInstance', '$cookies', '$uibModal', CookieCtrl]); 
})(); 