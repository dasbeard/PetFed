// =========================================================================
// ========================= Required Models ===============================
// =========================================================================
var days = require('./../controllers/days.js');

module.exports = function(app){
// =========================================================================
// =========================== User Routes =================================
// =========================================================================
  app.post('/updateFedDog', function(req,res){
    days.updateFedDog(req,res)
  });

  app.post('/updateFedCat', function(req,res){
    days.updateFedCat(req,res)
  });

  app.post('/updateWalkedDog', function(req,res){
    days.updateWalkedDog(req,res)
  });



  app.post('/getStatus', function(req,res){
    days.getStatus(req,res)
  });



}; // End Routes
