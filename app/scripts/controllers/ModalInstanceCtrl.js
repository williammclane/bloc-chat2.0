(function() {
  function ModalInstanceCtrl ($uibModalInstance, Room) {
    this.submit = function() {
        Room.add(this.room);
        $uibModalInstance.dismiss('cancel');
    };
    this.close = function() {
      $uibModalInstance.dismiss('cancel');
    };
  };

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();