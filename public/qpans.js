var qpans ;
function getans(){
    qpans = localStorage.getItem("test1ans");
    return qpans;
}
localStorage.setItem("Muni" , "narasimhs");
console.log(localStorage.getItem("Muni"));
module.exports = getans;