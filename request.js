var request = require('request');

//try a get request
request.get('https://damp-cove-43225.herokuapp.com/', function(err, data){
  if (err) {
    console.log(err);
  } else {
    console.log(data.body);
  }
})


//try a post request
//this api allows a json object with a name and message property

// request({
//   url: 'https://damp-cove-43225.herokuapp.com/addMessage',
//   method: 'POST',
//   json: {
//     name: 'Brad',
//     message: 'All I do is win!'
//   }
// }, function(error, response, body){
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(response.statusCode);
//   }
// });
