
let x = document.getElementById("mobmenu");
let y = document.getElementById("cancel");
let z = document.getElementById("menubar");
let a = document.getElementById("input1");
let temp = document.getElementById("narasimha");

let login = document.getElementById("main-login");
let main = document.getElementsByClassName("container");
let rb1=document.getElementById("file1");
let rb2=document.getElementById("file2");
function showmenu(){
    z.style.display="none";
    x.style.display="revert";
    y.style.display="revert";
   



}
function writetest(){
    
    loginme();
}

  
function cancelme(){
    x.style.display="none";
    y.style.display="none";
    z.style.display="revert";
}
function loginme(){
    document.getElementById("main-login").style.display="block";
    
}
function openfile1(){
    if(rb1.style.display != "block"){
    rb1.style.display ="block";
    document.getElementById("uparrow1").style.display="none";
    document.getElementById("downarrow1").style.display="inline";
    }
    else{
        rb1.style.display="none";
        document.getElementById("uparrow1").style.display="inline";
        document.getElementById("downarrow1").style.display="none";

    }
    

}
function cancelloginpage(){
    document.getElementById("main-login").style.display="none";
}
