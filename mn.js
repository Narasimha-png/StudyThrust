const { MongoClient } = require("mongodb");
const map = new Map();
map.set(0,'Hello');
map.set(1,'Ok');
map.set(3," Just do it");
const url = 'mongodb+srv://narasimhas9490:iUw2kvsEK4HBjZAT@users.hhf8pgb.mongodb.net/';
const clint = new MongoClient(url);
clint.connect();

async function newstudent(name){
   const temp = await clint.db("Study_Thrust").collection("Students").findOne({"name":name });
   return temp;
   
}


async function testresults(username,testname , score , incorrect , unanswered , answers , time){
console.log("test Results");
answers.forEach(async(value , key) =>{
   var key1 = key.toString();
   await clint.db("Study_Thrust").collection("Students").updateOne({"name":username}, {$push:{[testname]:{[key1]:value}}});
});


const temp = await clint.db("Study_Thrust").collection("Students").updateOne({"name":username}, {$push:{[testname]:{"score":score}}})
await clint.db("Study_Thrust").collection("Students").updateOne({"name":username}, {$push:{[testname]:{"incorrect":incorrect}}});
await clint.db("Study_Thrust").collection("Students").updateOne({"name":username}, {$push:{[testname]:{"unanswered":unanswered}}});
 await clint.db("Study_Thrust").collection("Students").updateOne({"name":username}, {$push:{[testname]:{"time":time}}});
console.log(temp);

}

async function isWritten(username, testname) {
   const temp = await clint.db("Study_Thrust").collection("Students").findOne({ "name": username ,  [testname]: { $exists: true } });
    return ( temp !== null );
}



async function getresultsheet(username ,testname ) {
   const result = await clint.db("Study_Thrust").collection("Students").findOne(
      { "name": username },
      { _id: 0 , name:0 }
    );
    
   const f = result?.[testname] || [];
   const map = new Map(f.map(obj => [Object.keys(obj)[0], Object.values(obj)[0]]));
 
   console.log("inside mn", map);
   return map;
 }
 

 async function viewtests(username){
   const result = await clint.db("Study_Thrust").collection("Students").findOne(
      { "name": username },
      { _id: 0 , name:0 }
    );
    const fields = Object.keys(result);
    const mymapArray = [];
    for(var i = 2 ; i< fields.length; i++){
   const f = result?.[fields[i]] || [];
   const map = new Map(f.map(obj => [Object.keys(obj)[0], Object.values(obj)[0]]));
   
     mymapArray.push(map);
    }
 console.log("inside db" , mymapArray);
   return mymapArray ;
   
 }
 async function viewfields(username){
   const result = await clint.db("Study_Thrust").collection("Students").findOne(
      { "name": username },
      { _id: 0 , name:0 }
    );
    const fields = Object.keys(result);
    return fields;
 }


async function showCollections() {
   const collectionsCursor = clint.db("narasimha").listCollections();
   const curr = await collectionsCursor.toArray();
   (curr).forEach(res => console.log(res.name))
 }
 
 


function create(){
   const divv = document.createElement("div");
   divv.innerHTML="<button> Click Me </button>";
   const butt = document.createElement("button");
   butt.innerHTML= "view Results";
   document.body.appendChild(divv);
   document.getElementById("fixit").appendChild(butt);

        
}
module.exports = {
   testresults,getresultsheet, newstudent , isWritten, viewtests,viewfields
};


