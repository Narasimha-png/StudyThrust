function decsec() {
    var sec = document.getElementById("sec").innerHTML;
    var min = document.getElementById("min").innerHTML;
    if (sec == 0) {
        document.getElementById("sec").innerHTML = 60;
        document.getElementById("min").innerHTML = min - 1;
        if (min == 0) {
            clearInterval(cleari);
            document.getElementById("sec").innerHTML = '0' + 0;
            document.getElementById("min").innerHTML = '0' + 0;

        }
    }
    else
        document.getElementById("sec").innerHTML = sec - 1;
}

function showanalysis() {
    var unvisited = 0;
    var answered = 0;
    var review = 0;
    var unanswered = 0;
    for (var i = 1; i <= 160; i++) {
        if (document.getElementById(i.toString()).style.background == "red")
            unanswered += 1;
        else if (document.getElementById(i.toString()).style.background == "green")
            answered += 1;
        else if (document.getElementById(i.toString()).style.background == "blue")
            review += 1;
        else
            unvisited += 1;

    }
    document.getElementById("attempted").innerHTML = `${answered}`;
    document.getElementById("unattempted").innerHTML = `${unanswered}`;
    document.getElementById("markreview").innerHTML = `${review}`;
    document.getElementById("unvisited").innerHTML = `${unvisited}`;
}

var cleari = setInterval(decsec, 1000);
setInterval(showanalysis, 1000);

const review = document.getElementById("mreview");
review.addEventListener("click", () => {
    const q = (currquestion + 1).toString();

    if (document.getElementById("mreview").checked)
        document.getElementById(q).style.background = " blue";
    else
        document.getElementById(q).style.background = "#e5e5e5";

})