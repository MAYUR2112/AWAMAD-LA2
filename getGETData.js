var express = require('express')
var app = express()
var port = '3011'
var host = '127.0.0.1'

app.use(express.static('public'));
  
app.get('/ExamForm.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "ExamForm.html" );  
})

//app.get('/process_get', function (req, res) {  
//response = {  
//       Full_name:req.query.Full_Name,
//       Exam_name:req.query.Exam_Name,
//       Exam_City:req.query.Exam_Name,
//       eXAM_Fees:req.query.Exam_Name
//   };  
//   console.log(response);  
//   res.end(JSON.stringify(response));
//})*/

app.get('/process_get', function (req, res) {  
res.send('<p>Full_Name: ' + req.query['Full_Name']+'</p><p>Exam_Name: ' + req.query['Exam_Name']+'</p><p>Exam_City: ' + req.query['Exam_City']+'</p><p>Exam_Fees: ' + req.query['Exam_Fees']+'</p>')
});

	var server = app.listen(3011, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log("Example app listening at http://%s:%s", host, port)
})  