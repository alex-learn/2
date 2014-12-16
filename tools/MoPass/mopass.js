function PassCtrl($scope) {
    $scope.passwords = [
        {username: 'aUsername', password: 'aPassword', comment: ''}
    ];

    $scope.addPassword = function() {
        $scope.passwords.push({username: $scope.newUsername, password: $scope.newPassword, comment: $scope.newComment});

        $scope.newUsername= $scope.newPassword = $scope.newComment = '';
    };
}
