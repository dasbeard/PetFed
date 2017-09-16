// =========================================================================
// ========================= Login Controller ==============================
// =========================================================================
app.controller('controller', function($scope, factory, $location){

  getStatus();


  $scope.fedDogUpdate = function(){
    if ($scope.dog.status == true){
      $scope.dog.status = false;
    } else {
      $scope.dog.status = true;
    }
    factory.updateFedDog($scope.dog, function (output){
      getStatus();
    });

  }; // End Fed Dog Update


  $scope.fedCatUpdate = function(){
    if($scope.fedCat){
      if ($scope.fedCat.status == false){
        var status = true;
      } else {
        var status = false;
      }
    } else {
      var status = true;
    }

    $scope.fedCat = {status: status}
    factory.updateFedCat($scope.fedCat, function (output){
      getStatus();
    });
  } // End Fed Cat Update


  $scope.walkedDogUpdate = function(){
    if($scope.walkedDog){
      if ($scope.walkedDog.status == false){
        var status = true;
      } else {
        var status = false;
      }
    } else {
      var status = true;
    }

    $scope.walkedDog = {status: status}
    factory.updateWalkedDog($scope.walkedDog, function (output){
      getStatus();
    });
  } // End Walked Dog Update





  function getStatus(){
    var getTime = new Date();
    var time = getTime.toLocaleTimeString();
    console.log('get status ran at ' + time );
    factory.getStatus(function(output){
      if (output.data.fedDogStatus == false) {
        $scope.dog = {status: false, content: 'Dog Not Yet Fed', time: 'Not Yet'};
      }
      if (output.data.fedDogStatus == true){
        $scope.dog = {status: true, content: 'Dog Fed at', time: output.data.fedDogTime};
      }
      if (output.data.fedCatStatus == false) {
        $scope.cat = {status: false, content: 'Cat Not Yet Fed', time: 'Not Yet'};
      }
      if (output.data.fedCatStatus == true){
        $scope.cat = {status: true, content: 'Cat Fed at', time: output.data.fedCatTime};
      }
      if (output.data.walkedDogStatus == false) {
        $scope.walked = {status: true, content: 'Dog Not Yet Walked', time: 'Not Yet'};
      }
      if (output.data.walkedDogStatus == true){
        $scope.walked = {status: true, content: 'Dog Walked at', time: output.data.walkedDogTime};
      }
    })

  }





  //
  // function getStatus(){
  //   var now = new Date();
  //   var currentDate = now.toLocaleDateString();
  //   var hour = now.getHours();
  //
  //   if(hour > 16){
  //     currentDate += "pm";
  //   } else {
  //     currentDate += "am";
  //   }
  //
  //   var today = {date: currentDate}
  //
  //   factory.getStatus(today, function(output){
  //     console.log(output.data);
  //     $scope.fedDog= output.data.fedDog;
  //     $scope.fedDogTime= output.data.fedDogTime;
  //     $scope.fedCat= output.data.fedCat;
  //     $scope.fedCatTime= output.data.fedCatTime;
  //     $scope.walkedDog= output.data.walkedDog;
  //     $scope.walkedDogTime= output.data.walkedDogTime;
  //
  //   })
  // }; // End Get Status


});
