(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        
        this.rooms = Room.all;
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal'
            });
        };
        
        this.currentRoom = function(room) {
            this.currentChatRoom = room.$value;
            this.messages = Message.getByRoomId(room.$id);
        };
    };
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();