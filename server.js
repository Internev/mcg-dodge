var express = require('express');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/dataz', (req, res)=>{
  var date = req.query.date;
  var day = date.slice(-2);
  var month = date.slice(5, 7);
  request.get('http://www.mcg.org.au/whats-on/events-calendar', (err, data)=>{
    console.log(data.body.match('<span class="ng-binding">01</span>'));
    // 
    // <p class="grid-items__calendar ng-binding">
    //                 Jan
    //                 <span class="ng-binding">01</span>
    //             </p>
  });
  res.send('hihi');
});

app.listen(8000);
console.log('Shard up on 127:8k');
