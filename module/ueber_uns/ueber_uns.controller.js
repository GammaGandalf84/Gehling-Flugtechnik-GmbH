angular.module("gehling").controller("DieterCtrl", ["$scope",
    function($scope) {
        $scope.personen = [


            {
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
                name: "Dieter Gehling"
            },
            {
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
                name: "Astrid Gehling"
            },
            {
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
                name: "Tom ....."
            }
        ]
    }
])