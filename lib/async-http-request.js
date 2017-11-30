// var http = require('http');
// var _ = require('underscore');

// var getJson = function (url,callback) {
//   return Promise.resolve({
//     then: function(onFulfill, onReject) {
//       http.get(url, function (res) {
//         var data = '';
//         res.on('data', function (d) {
//           data += d;
//         });
//         res.on('end', function () {
//           try {
//             var obj = JSON.parse(data);
//             onFulfill(obj);
//           }
//           catch (e) {
//             onFulfill(e);
//           }
//         });
//       }).on('error', function (e) {
//         onFulfill(e);
//       });
//     }
//   }).then(function(ret) {
//     if(callback){
//       callback(ret);
//     }
//     return ret;
//     console.log(ret);
//   }, function(err) {
//     if(callback){
//       callback({});
//     }
//     return {};
//     // 不会被调用
//     console.log(err);
//   });


// };
// var postJson = function(host,port,path,params,callback){
//   var data = JSON.stringify(params);
//   //console.log(data);
//   var opt = {
//     method: "POST",
//     host: host,
//     port: port,
//     path: path,
//     headers: {
//       "Content-Type": 'application/json;charset=utf-8',
//       "Content-Length": Buffer.byteLength(data,"utf-8")
//     }
//   };
//   return Promise.resolve({
//     then: function(onFulfill, onReject) {
//       var req = http.request(opt, function (serverFeedback) {
//         if (serverFeedback.statusCode == 200) {
//           var body = "";
//           serverFeedback
//               .on('data', function (ret) {
//                 body += ret;
//               })
//               .on('end', function () {
//                 try {
//                   //console.log("body="+body);
//                   var obj = JSON.parse(body);
//                   onFulfill(obj);
//                 }
//                 catch (e) {
//                   onFulfill(e);
//                 }
//               });
//         }
//         else {
//           onFulfill({status:500});
//         }
//       });
//       req.write(data + "\n");
//       req.end();
//     }
//   }).then(function(ret) {
//     if(callback){
//       callback(ret);
//     }
//     return ret;
//     //console.log(ret);
//   }, function(err) {
//     // 不会被调用
//     if(callback){
//       callback({});
//     }
//     return {};
//     console.log(err);
//   });
// };
// module.exports = {
//   getJson: getJson,
//   postJson:postJson
// };

exports.add = function(a, b) {
  return a + b;
}
