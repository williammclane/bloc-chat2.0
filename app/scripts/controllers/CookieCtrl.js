 (function() { 
  function CookieCtrl($uibModalInstance, $cookies) { 
        $cookies.put('blocChatCurrentUser', this.username)  
        $uibModalInstance.close();
    }; 
 
  angular 
    .module('blocChat') 
    .controller('CookieCtrl', ['$uibModalInstance', '$cookies', CookieCtrl]); 
})(); 