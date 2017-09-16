// =========================================================================
// ========================= Login Factory =================================
// =========================================================================
app.factory('factory', function ($http){
  var factory = {};

  var user = {};


  factory.updateFedDog = function(input, callback){
    $http.post('/updateFedDog', input).then(function(output){
      callback(output)
    });
  }

  factory.updateFedCat = function(input, callback){
    $http.post('/updateFedCat', input).then(function(output){
      callback(output)
    });
  }

  factory.updateWalkedDog = function(input, callback){
    $http.post('/updateWalkedDog', input).then(function(output){
      callback(output)
    });
  }




  factory.getStatus = function(callback){
    $http.post('/getStatus').then(function(output){
      callback(output)
    });
  }





  return factory;
}); // End Login Factory


// =========================================================================
// ========================= Wall Factory ===============================
// =========================================================================
// app.factory('wallFactory', function($http){
//   var factory = {};
//
// factory.getAllMessages = function(callback){
//   $http.get('/messages/all').then(function(output){
//     console.log('Got all Messages');
//     callback(output.data);
//   });
// }
//
// factory.addComment = function(input, callback){
//   $http.post('/comments/new', input).then(function(output){
//     console.log('Added new Comment');
//     callback(output.data);
//   });
// }
//
//
// return factory;
//
// }); // End Message Factory
