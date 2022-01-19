contest1 = 40;
contest2 = 13;
contest3 = 23;
contest4 = 35;

contest1_is_voted = false;
contest2_is_voted = false;
contest3_is_voted = false;
contest4_is_voted = false;

document.getElementById("homepage").onclick = function () {
    location.href = "main.html";
};

document.getElementById("button_contest1").onclick = function () {
    if (contest1_is_voted == false) {
        contest1++;
        document.getElementById("vote_contest1").innerHTML = contest1 + " votes received";
        contest1_is_voted = true;
    } else {
        confirm("You have already voted for this design! You cannot vote twice for the same design.");
    }
};

document.getElementById("button_contest2").onclick = function () {
    if (contest2_is_voted == false) {
        contest2++;
        document.getElementById("vote_contest2").innerHTML = contest2 + " votes received";
        contest2_is_voted = true;
    } else {
        confirm("You have already voted for this design! You cannot vote twice for the same design.");
    }
};

document.getElementById("button_contest3").onclick = function () {
    if (contest3_is_voted == false) {
        contest3++;
        document.getElementById("vote_contest3").innerHTML = contest3 + " votes received";
        contest3_is_voted = true;
    } else {
        confirm("You have already voted for this design! You cannot vote twice for the same design.");
    }
};

document.getElementById("button_contest4").onclick = function () {
    if (contest4_is_voted == false) {
        contest4++;
        document.getElementById("vote_contest4").innerHTML = contest4 + " votes received";
        contest4_is_voted = true;
    } else {
        confirm("You have already voted for this design! You cannot vote twice for the same design.");
    }
};

function loadVotes() {
    document.getElementById("vote_contest1").innerHTML = contest1 + " votes received";
    document.getElementById("vote_contest2").innerHTML = contest2 + " votes received";
    document.getElementById("vote_contest3").innerHTML = contest3 + " votes received";
    document.getElementById("vote_contest4").innerHTML = contest4 + " votes received";
};