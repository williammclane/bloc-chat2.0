(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child('messages');

    Message.getByRoomId = function(roomId) {  
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };
      
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();