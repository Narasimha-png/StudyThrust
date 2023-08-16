const express = require('express');
const app = express();
const path = require('path');
const mongo = require('./mn.js');
const qp = require('./public/qp.js');

var mymapArray, fields;

var anwersheet; 

let name, ename;
var test1name;
var test2name;
var test3name , bipctest1 , bipctest2 , bipctest3;

const port = 3000;

// Middleware setup to parse JSON-encoded bodies and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/main.html'));
});


app.post('/login', (req, res) => {
   name = req.body.emailstu;
   ename = req.body.vemailstu;
  mongo.newstudent(name.toString())
  .then(result => {
     if (result === null) {
        res.redirect('/loginerror');
     } else {
        res.redirect('/profile?name=' + name );
     }
  })
});


app.get('/loginerror', (req, res)=>{
  res.send("<h1>User is not Authenticated by Administrator</h1>");
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/main.html'));
});

app.get('/resources', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/resources.html'));
});

app.get('/profile',(req,res)=>{
 res.redirect('/getprofile?name=' + name );

});

app.get('/getprofile' , ( req , res ) =>{
  res.sendFile(path.join(__dirname,'public/profile.html'));
});
app.get('/test1', (req,res )=>{
  res.sendFile(path.join(__dirname, 'public/qp.html'))
});
app.get('/test2', (req,res )=>{
  res.sendFile(path.join(__dirname, 'public/qp - Copy.html'))
});
app.get('/test3', (req,res )=>{
  res.sendFile(path.join(__dirname, 'public/qp - Copy (2).html'))
});

app.get('/bipctest1', (req,res )=>{
  res.sendFile(path.join(__dirname, 'public/bipctest1.html'))
});

app.get('/bipctest2', (req,res )=>{
  res.sendFile(path.join(__dirname, 'public/bipctest1 - Copy.html'))
});

app.get('/bipctest3', (req,res )=>{
  res.sendFile(path.join(__dirname, 'public/bipctest1 - Copy (2).html'))
});

app.get('/connectmongo', (req, res)=>{
  res.sendFile(path.join(__dirname, './mn.html'))
});




app.get('/test1results' ,async(req, res)=>{
  const mymapJSON = req.query.map;
  const mapArray = await JSON.parse(decodeURIComponent(mymapJSON));
  const map = new Map( Object.entries(mapArray));
  const score = parseInt(req.query.score);
  const incorrect = parseInt(req.query.incorrect);
  const unanswered = parseInt(req.query.unanswered);
  const time = req.query.time;
  test1name = "test1";
  
  // Assuming you have a function named 'testresults' in the 'mongo' module
  while(await mongo.isWritten(name , test1name)){
    test1name = test1name + "1";
  }
 mongo.testresults(name, test1name , score, incorrect, unanswered, map , time);
  res.sendFile(path.join(__dirname, "./public/dashboard.html"));
});


app.get('/test2results' ,async(req, res)=>{
  const mymapJSON = req.query.map;
  const mapArray = await JSON.parse(decodeURIComponent(mymapJSON));
  const map = new Map( Object.entries(mapArray));
  const score = parseInt(req.query.score);
  const incorrect = parseInt(req.query.incorrect);
  const unanswered = parseInt(req.query.unanswered);
  const time = req.query.time;
  test2name = "test2";
  // Assuming you have a function named 'testresults' in the 'mongo' module
  while(await mongo.isWritten(name , test2name)){
    test2name = test2name + "2";
  }
  mongo.testresults(name, test2name , score, incorrect, unanswered, map , time);

  

  res.sendFile(path.join(__dirname, "./public/dashboard.html"));
});
app.get('/test3results' ,async(req, res)=>{
  const mymapJSON = req.query.map;
  const mapArray = await JSON.parse(decodeURIComponent(mymapJSON));
  const map = new Map( Object.entries(mapArray));
  const score = parseInt(req.query.score);
  const incorrect = parseInt(req.query.incorrect);
  const unanswered = parseInt(req.query.unanswered);
  const time = req.query.time;
  test3name = "test3";
  // Assuming you have a function named 'testresults' in the 'mongo' module
  while(await mongo.isWritten(name , test3name)){
    test3name = test3name + "3";
  }
  mongo.testresults(name, test3name , score, incorrect, unanswered, map , time);

  

  res.sendFile(path.join(__dirname, "./public/dashboard.html"));
});



app.get('/bipctest1results' ,async(req, res)=>{
  const mymapJSON = req.query.map;
  const mapArray = await JSON.parse(decodeURIComponent(mymapJSON));
  const map = new Map( Object.entries(mapArray));
  const score = parseInt(req.query.score);
  const incorrect = parseInt(req.query.incorrect);
  const unanswered = parseInt(req.query.unanswered);
  const time = req.query.time;
  bipctest1 = "bipctest1";
  
  // Assuming you have a function named 'testresults' in the 'mongo' module
  while(await mongo.isWritten(name , bipctest1)){
    bipctest1 = bipctest1 + "1";
  }
 mongo.testresults(name, bipctest1, score, incorrect, unanswered, map , time);
  res.sendFile(path.join(__dirname, "./public/dashboard.html"));
});

app.get('/bipctest2results' ,async(req, res)=>{
  const mymapJSON = req.query.map;
  const mapArray = await JSON.parse(decodeURIComponent(mymapJSON));
  const map = new Map( Object.entries(mapArray));
  const score = parseInt(req.query.score);
  const incorrect = parseInt(req.query.incorrect);
  const unanswered = parseInt(req.query.unanswered);
  const time = req.query.time;
  bipctest2 = "bipctest2";
  
  // Assuming you have a function named 'testresults' in the 'mongo' module
  while(await mongo.isWritten(name , bipctest1)){
    bipctest2 = bipctest2 + "2";
  }
 mongo.testresults(name, bipctest1, score, incorrect, unanswered, map , time);
  res.sendFile(path.join(__dirname, "./public/dashboard.html"));
});

app.get('/bipctest3results' ,async(req, res)=>{
  const mymapJSON = req.query.map;
  const mapArray = await JSON.parse(decodeURIComponent(mymapJSON));
  const map = new Map( Object.entries(mapArray));
  const score = parseInt(req.query.score);
  const incorrect = parseInt(req.query.incorrect);
  const unanswered = parseInt(req.query.unanswered);
  const time = req.query.time;
  bipctest3 = "bipctest3";
  
  // Assuming you have a function named 'testresults' in the 'mongo' module
  while(await mongo.isWritten(name , bipctest1)){
    bipctest3 = bipctest3 + "3";
  }
 mongo.testresults(name, bipctest1, score, incorrect, unanswered, map , time);
  res.sendFile(path.join(__dirname, "./public/dashboard.html"));
});


app.get('/bipctest1results/results', (req, res)=>{
  res.sendFile(path.join(__dirname, './public/bipckey1.html'));

});

app.get('/bipctest2results/results', (req, res)=>{
  res.sendFile(path.join(__dirname, './public/bipckey1.html'));

});

app.get('/bipctest3results/results', (req, res)=>{
  res.sendFile(path.join(__dirname, './public/bipckey1.html'));

});


app.get('/test1results/results', (req, res)=>{
  res.sendFile(path.join(__dirname, './public/key.html'));

});
app.get('/test2results/results', (req, res)=>{
  res.sendFile(path.join(__dirname, './public/key - Copy.html'));

});
app.get('/test3results/results', (req, res)=>{
  res.sendFile(path.join(__dirname, './public/key - Copy (2).html'));

});



app.get("/viewonlytest1board" , (req, res) =>{
  const index = Number(req.query.index);
  const map = new Map(mymapArray[index-2]);
  console.log(map);
  res.redirect('viewtest1board?map='  + encodeURIComponent(JSON.stringify(Object.fromEntries(map))) + "&score=" + map.get("score") +"&unanswered="+ map.get("unanswered") + "&incorrect="+ map.get("incorrect")+ "&time="+map.get("time"));
});


app.get("/viewonlytest2board" , (req, res) =>{
  const index = Number(req.query.index);
  const map = new Map(mymapArray[index-2]);
  console.log(map);
  res.redirect('viewtest2board?map='  + encodeURIComponent(JSON.stringify(Object.fromEntries(map))) + "&score=" + map.get("score") +"&unanswered="+ map.get("unanswered") + "&incorrect="+ map.get("incorrect")+ "&time="+map.get("time"));
});


app.get("/viewonlytest3board" , (req, res) =>{
  const index = Number(req.query.index);
  const map = new Map(mymapArray[index-2]);
  console.log(map);
  res.redirect('viewtest3board?map='  + encodeURIComponent(JSON.stringify(Object.fromEntries(map))) + "&score=" + map.get("score") +"&unanswered="+ map.get("unanswered") + "&incorrect="+ map.get("incorrect")+ "&time="+map.get("time"));
});


app.get("/viewonlybipctest1board" , (req, res) =>{
  const index = Number(req.query.index);
  const map = new Map(mymapArray[index-2]);
  console.log(map);
  res.redirect('viewbipctest1board?map='  + encodeURIComponent(JSON.stringify(Object.fromEntries(map))) + "&score=" + map.get("score") +"&unanswered="+ map.get("unanswered") + "&incorrect="+ map.get("incorrect")+ "&time="+map.get("time"));
});

app.get("/viewbipctest1board/results" , (req, res)=>{
  res.sendFile(path.join(__dirname , "./public/bipckey1.html"));
});



app.get("/viewonlybipctest2board" , (req, res) =>{
  const index = Number(req.query.index);
  const map = new Map(mymapArray[index-2]);
  console.log(map);
  res.redirect('viewbipctest2board?map='  + encodeURIComponent(JSON.stringify(Object.fromEntries(map))) + "&score=" + map.get("score") +"&unanswered="+ map.get("unanswered") + "&incorrect="+ map.get("incorrect")+ "&time="+map.get("time"));
});

app.get("/viewbipctest2board/results" , (req, res)=>{
  res.sendFile(path.join(__dirname , "./public/bipckey1.html"));
});



app.get("/viewonlybipctest3board" , (req, res) =>{
  const index = Number(req.query.index);
  const map = new Map(mymapArray[index-2]);
  console.log(map);
  res.redirect('viewbipctes31board?map='  + encodeURIComponent(JSON.stringify(Object.fromEntries(map))) + "&score=" + map.get("score") +"&unanswered="+ map.get("unanswered") + "&incorrect="+ map.get("incorrect")+ "&time="+map.get("time"));
});

app.get("/viewbipctest3board/results" , (req, res)=>{
  res.sendFile(path.join(__dirname , "./public/bipckey1.html"));
});



app.get("/viewtest1board/results" , (req, res)=>{
  res.sendFile(path.join(__dirname , "./public/key.html"));
});

app.get("/viewtest2board/results" , (req, res)=>{
  res.sendFile(path.join(__dirname , "./public/key - Copy.html"));
});

app.get("/viewtest3board/results" , (req, res)=>{
  res.sendFile(path.join(__dirname , "./public/key - Copy (2).html"));
});






app.get('/gotodash' , (req, res) =>{
  res.sendFile(path.join(__dirname, "./public/dashboard.html"));
})

app.get('/viewtests'  ,async (req, res) =>{
 mymapArray  = await mongo.viewtests(name);
 fields = await mongo.viewfields(name);
console.log(fields);
  res.redirect("/totaltests?fields="+encodeURIComponent(fields));

});

app.get('/totaltests' , (req, res)=>{
  res.sendFile(path.join(__dirname, "./public/viewtests.html"));

});
app.get('/viewprogress', (req, res)=>{
  const tempmap = new Map();
  
  for(var i = 0; i< mymapArray.length; i++){
    tempmap.set(fields[i+2] , mymapArray[i].get("score"));
  }
  console.log(tempmap);
res.redirect("/viewprogress/graph?map=" + encodeURIComponent(JSON.stringify(Object.fromEntries(tempmap))) + "&name=" + name );

});

app.get("/viewprogress/graph" , (req, res)=>{
  res.sendFile(path.join(__dirname, './public/progress.html'));
})


app.get('/viewtest1board' ,(req, res) =>{
  
  res.sendFile(path.join(__dirname, './public/dashboard.html'));

});

app.get('/viewbipctest1board' ,(req, res) =>{
  
  res.sendFile(path.join(__dirname, './public/dashboard.html'));

});

app.get('/viewtest2board' ,(req, res) =>{
  res.sendFile(path.join(__dirname, './public/dashboard.html'));

});

app.get('/viewtest3board' ,(req, res) =>{
  res.sendFile(path.join(__dirname, './public/dashboard.html'));

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
