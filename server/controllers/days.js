// =========================================================================
// ============================== Require ==================================
// =========================================================================
const mongoose = require('mongoose');

var Days = mongoose.model('Days');

module.exports = (function(){
  return {

    updateFedDog: function(req,res){
      // console.log(req.body);
      var myTime = getMyTime();

      Days.findOne({date: myTime[0]}, function(err, today){
        if (err){
          console.log('====== Error ======'.red);
          console.log(err);
        } else {
          if(!today){
            console.log('======== Create Today =========');
            var today = new Days({
                                  fedDogStatus: req.body.status,
                                  fedDogTime: myTime[1],
                                  fedCatStatus: false,
                                  fedCatTime: 'Not Yet',
                                  walkedDogStatus: false,
                                  walkedDogTime: 'Not Yet',
                                  date: myTime[0]
                                });
            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          } else {
            console.log('======== Update Today =========');
            today.fedDogStatus = req.body.status;
            today.fedDogTime = myTime[1];

            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          }
        }
      }); //End findOne

    }, // End Fed Dog

    updateFedCat: function(req,res){
      // console.log(req.body);
      var myTime = getMyTime();

      Days.findOne({date: myTime[0]}, function(err, today){
        if (err){
          console.log('====== Error ======'.red);
          console.log(err);
        } else {
          if(!today){
            console.log('======== Create Today =========');
            var today = new Days({
                                  fedDogStatus: false,
                                  fedDogTime: 'Not Yet',
                                  fedCatStatus: req.body.status,
                                  fedCatTime: myTime[1],
                                  walkedDogStatus: false,
                                  walkedDogTime: 'Not Yet',
                                  date: myTime[0]
                                });
            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          } else {
            console.log('======== Update Today =========');
            today.fedCatStatus = req.body.status;
            today.fedCatTime = myTime[1];

            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          }
        }
      }); //End findOne

    }, // End Fed Cat

    updateWalkedDog: function(req,res){
      // console.log(req.body);
      var myTime = getMyTime();

      Days.findOne({date: myTime[0]}, function(err, today){
        if (err){
          console.log('====== Error ======'.red);
          console.log(err);
        } else {
          if(!today){
            console.log('======== Create Today =========');
            var today = new Days({
                                  fedDogStatus: false,
                                  fedDogTime: 'Not Yet',
                                  fedCatStatus: false,
                                  fedCatTime: 'Not Yet',
                                  walkedDogStatus: req.body.status,
                                  walkedDogTime: myTime[1],
                                  date: myTime[0]
                                });
            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          } else {
            console.log('======== Update Today =========');
            today.walkedDogStatus = req.body.status;
            today.walkedDogTime = myTime[1];

            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          }
        }
      }); //End findOne

    }, // End Fed Cat










  getStatus: function(req,res){
    // console.log('== In Get Status Method =='.cyan);
    var myTime = getMyTime();

    Days.findOne({date: myTime[0]}, function(err, today){
      if(err){
        console.log('======== Error ========'.red);
        console.log(err);
      } else {
        if(today){
          // console.log('===== Today Already Exists ====='.cyan);
          res.json(today);
        } else {
          // console.log('======== Create New Today =========');
          var today = new Days({
                                fedDogStatus: false,
                                fedDogTime: 'Not Yet',
                                fedCatStatus: false,
                                fedCatTime: 'Not Yet',
                                walkedDogStatus: false,
                                walkedDogTime: 'Not Yet',
                                date: myTime[0]
                              });
          today.save(function(err){
            if(err){
              console.log('======== Error ========'.red);
              console.log(err);
            } else {
              res.json(today);
            }
          });
        }
      }
    });
  }, // End Get Status











    // getStatus: function(req,res){
    //   // console.log(req.body);
    //   Days.findOne({date: req.body.date}, function(err, today){
    //     if (err){
    //        console.log('===== Error ====='.red);
    //        console.log(err);
    //      } else {
    //        if (today){
    //          res.json(today);
    //        } else {
    //          var newDay = new Days({
    //            fedCat: false, fedCatTime: 'Not Yet', fedDog: false, fedDogTime: 'Not Yet', walkedDog: false, walkedDogTime: 'Not Yet', date: req.body.date
    //          });
    //          newDay.save(function(err){
    //            if(err){
    //              console.log('===== Error ====='.red);
    //              console.log(err);
    //            } else {
    //              res.json(newDay);
    //            }
    //          })
    //        }
    //      }
    //   })
    // }, //End Get Status




    // updateStatus: function(req,res){
    //   console.log('================== update method =================='.cyan);
    //   console.log(req.body);
    //   var now = new Date();
    //   var currentDate = now.toLocaleDateString();
    //   var hour = now.getHours();
    //   if(hour > 16){
    //     currentDate += "pm";
    //   } else {
    //     currentDate += "am";
    //   }
    // }, // End Update Status












    // getStatus: function(req,res){
    //   Days.findOne({date:req.body.date}, function(err, today){
    //     if (err){
    //       console.log('===== Error ====='.red);
    //       console.log(err);
    //     } else {
    //       if(!today){
    //         var newDate = new Days({
    //           fedCat: false, fedDog: false, walkedDog: false, date: req.body.date
    //         });
    //         newDate.save(function(err){
    //           if (err){
    //             console.log('==== Error When saving record ===='.red);
    //             console.log(err);
    //           } else {
    //             console.log('===== Success ====='.yellow);
    //             res.json(newDate);
    //           }
    //         })
    //       } else {
    //         res.json(today)
    //       }
    //
    //     }
    //   })
    // },



    // updateStatus: function(req,res){
    //   // var todayString = req.body.dateStamp.toLocaleString();
    //
    //   var today = new Date();
    //   req.body.dateStamp = today;
    //   var test = req.body.dateStamp;
    //   var nowDate = test.toLocaleDateString();
    //   var first = nowDate.replace('/', '-');
    //   var date = first.replace('/', '-');
    //   var hour = getDate.getHours();
    //
    //   if(hour > 16){
    //     currentDate += "pm";
    //   } else {
    //     currentDate += "am";
    //   }
    //
    //
    //   console.log('In the updateStatus method'.cyan);
    //   console.log(req.body);
    //   console.log(date);
    //
    //   Days.findOne({date:date}, function(err, oneDay){
    //     if (err){
    //       console.log('===== Error ====='.red);
    //       console.log(err);
    //     } else {
    //       if (oneDay){
    //         console.log('====================='.cyan);
    // // Time to update
    //         oneDay.update({fedDog: req.body.fedDog, fedCat: req.body.fedCat, walkedDog: req.body.walkedDog}, function(err){
    //           if (err){
    //             console.log('===== Err with Update ====='.red);
    //           } else {
    //             console.log('===== Update succeful ====='.yellow);
    //             res.json(oneDay);
    //           }
    //         })
    //
    //         console.log(oneDay);
    //
    //
    //       } else {
    //         console.log('New record being created'.rainbow);
    //         var newDate = new Days({
    //                           fedCat: req.body.fedCat, fedDog: req.body.fedDog, walkedDog: req.body.walkedDog, date: date
    //         });
    //         newDate.save(function(err){
    //           if (err){
    //             console.log('==== Error When saving record ===='.red);
    //             console.log(err);
    //           } else {
    //             console.log('===== Success ====='.yellow);
    //             res.json(newDate);
    //           }
    //         });
    //
    //       }
    //     }
    //   })
    // },


  }





  function getMyTime(){
    var getDate = new Date();
    var hour = getDate.getHours();
    var time = getDate.toLocaleTimeString();
    var currentDate = getDate.toLocaleDateString();
      if(hour > 16){
        currentDate += "pm";
      } else {
        currentDate += "am";
      }
    var myTime = [currentDate, time];
    return (myTime);
  }
})();
