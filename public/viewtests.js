var mymapArray;
var fields;
var finalmap;
var index;

async function totaltests() {
    const urlparams = new URLSearchParams(window.location.search);

    const fieldencoded = urlparams.get("fields");
    fields = decodeURIComponent(fieldencoded);
    fields = fields.split(",");
    console.log(fields);
}

async function creatediv() {
    await totaltests();
    document.getElementById("clickme").style.display = "none";
    console.log(fields);
    if (fields.length <= 2) {
        const divv = document.createElement("div");
        divv.innerHTML = "<h1> No Tests Written</h1>";
        document.body.appendChild(divv);
        return;

    }

    for (var i = 2; i < fields.length; i++) {
        var divv = document.createElement("div");
        divv.innerHTML = `<h1>${fields[i]}</h1> <button id=${fields[i]} onclick="gotodash(this.id)"> DashBoard </button>`;
        document.body.appendChild(divv);

    }
    document.getElementById("progress").style.display = "revert";
}
function gotodash(btnid) {
    index = fields.indexOf(btnid);
    if (fields[index].startsWith("test1"))
        location.href = `/viewonlytest1board?index=` + index;
    else if (fields[index].startsWith("test2"))
        location.href = `/viewonlytest2board?index=` + index;
    else if (fields[index].startsWith("test3"))
        location.href = `/viewonlytest3board?index=` + index;
    else if( fields[index].startsWith("bipctest1"))
        location.href = `viewonlybipctest1board?index=` + index ;
        else if( fields[index].startsWith("bipctest2"))
        location.href = `viewonlybipctest2board?index=` + index ;
        else if( fields[index].startsWith("bipctest3"))
        location.href = `viewonlybipctest3board?index=` + index ;
}
function viewprogress() {
    location.href = "/viewprogress";

}