var t =["Live Tests","Instant Results" , "Instant Key", "Free Resources", "Teacher Interaction" , "Doubt Solving"];
var tmep = "";
var tp = 0;
var cl ;
var index = 0;

 function showcontent(){
    tmep = tmep + t[index].charAt(tp);
    tp = tp + 1;
    document.getElementById("content").innerHTML = `${tmep}`;
     if(tp == t[index].length){
         tp = 0;
         tmep = "";
         index = (index + 1)%t.length;
     }
     
   //  setTimeout(showcontent, 200);
}
setInterval(showcontent, 200);
//showcontent()
