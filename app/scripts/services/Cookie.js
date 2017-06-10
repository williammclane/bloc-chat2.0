(function() { 
  function BlocChatCookies($cookies, $uibModal) { 
    var currentUser = $cookies.get('username'); 
    if (!currentUser || currentUser === '') { 
      $uibModal.open({ 
        templateUrl: '/templates/cookie.html', 
        controller: 'CookieCtrl',  
        controllerAs: 'cookie'
      }) 
    } 
  } 
    
  angular 
    .module('blocChat') 
    .run(['$cookies', '$uibModal', BlocChatCookies]); 
})(); 