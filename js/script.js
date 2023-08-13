function area() {
    var base = parseFloat(document.getElementById("base-input").value);
    var height = parseFloat(document.getElementById("height-input").value);

    showanswer("answer","Area : " + ((base*height)/2));
}

function parameter() {
    var a = parseFloat(document.getElementById("side1-input").value);
    var b = parseFloat(document.getElementById("side2-input").value);
    var c = parseFloat(document.getElementById("side3-input").value);

    valid = ((a*b) + (b*c) > (c*a)) && ((a*b) + (a*c) > (c*b)) && ((a*c) + (b*c) > (a*b));

    if (valid) {
        showanswer("answerparameter","Parameter : " + (a + b + c));
    } else {
        showanswer("answerparameter", "Invalid");
    }
}

function showanswer(id, str) {
    document.getElementById(id).innerHTML = str;
    document.getElementById(id).style.display = "block";
}