var express=require('express');
var app=express();


app.use(express.static(__dirname+"/public"));
app.get('/contactlist',function(req,res){
  console.log("i recieved a get request");

  person1={
    name:'subbu',
    email:'subbu@gmail.com',
    number:'111-111-1111'
  };
  person2={
    name:'subbu',
    email:'subbu@gmail.com',
    number:'111-111-1111'
  };
  person3={
    name:'subbu',
    email:'subbu@gmail.com',
    number:'111-111-1111'
  };

  var contactlist=[person1,person2,person3];
  res.json(contactlist);
});
// app.get('/',function(req,res){
//   res.send("hello world");
// });
app.listen(3000);
console.log("server running in port 3000");
