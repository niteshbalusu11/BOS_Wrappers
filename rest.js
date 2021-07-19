import request from 'request'


const url = "http://localhost:3000/getChainFees"

request(url, {
  json: true,
}, (err, res, body) => {
  if (err) {
       return console.log(err); 
    }
    console.log(body)
});

