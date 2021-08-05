player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1score = 0;
player2score = 0;

no1=document.getElementById("no1").value;
no2=document.getElementById("no2").value;

document.getElementById("p1n").innerHTML = player1 + " : ";
document.getElementById("p2n").innerHTML = player2 + " : ";

document.getElementById("p1s").innerHTML = player1score;
document.getElementById("p2s").innerHTML = player2score;

document.getElementById("pq").innerHTML = "Question turn = " + player1;
document.getElementById("pa").innerHTML = "Answer turn = " + player2;

function send() {
    qw = "<h4 id='display'>Q. " + document.getElementById("no1").value+"x"+document.getElementById("no2").value + "</h4>";
    ib = "<br>answer: <input type='text' id='answer'>";
    cb = "<br><button class='btn btn-info' onclick='check()'>check</button>";
    row = qw + ib + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}

aa=no1*no2