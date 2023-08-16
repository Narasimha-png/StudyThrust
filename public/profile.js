function profileclicked(){
    const urlparams = new URLSearchParams(window.location.search);
    const name = urlparams.get("name");
    document.getElementById("profileid").innerHTML = `Hello ${name}`;
    if(document.getElementById("profileoptions").style.display != "block")
    document.getElementById("profileoptions").style.display = "block";
    else{
        document.getElementById("profileoptions").style.display = "none";
    }
}

function changestream(){
   var selectedele = document.getElementsByName("selectstream")[0];
   var stream = selectedele.value;
    if(stream==="navbipc"){
        document.getElementById("testlinks").style.display = "none";
        document.getElementById("bipctestlinks").style.display ="flex";
    }
    else {
        document.getElementById("bipctestlinks").style.display ="none";
        document.getElementById("testlinks").style.display = "flex";
    }

}
function viewtests(){
    location.href="/viewtests";
}
function logoutme(){
    location.href = "/";
}
function gototest1(){
    location.href="/test1";
}
function gototest2(){
    location.href="/test2";
}
function gototest3(){
    location.href="/test3";
}

function bipctest1(){
    location.href = "/bipctest1";
}

function bipctest2(){
    location.href = "/bipctest2";
}

function bipctest3(){
    location.href = "/bipctest3";
}