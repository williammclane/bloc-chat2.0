(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        
        this.rooms = Room.all;
        var currentChatId;
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal'
            });
        };
        
        this.currentRoom = function(room) {
            this.currentChatRoom = room.$value;
            currentChatId = room.$id;
            this.messages = Message.getByRoomId(room.$id);
        };
        this.add = function(message) {
            var newMessage = {
                username: $cookies.get('username'),
                content: this.message,
                sentAt: new Date(),
                roomId: currentChatId
            };
            Message.send(newMessage);
        };
    };
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();