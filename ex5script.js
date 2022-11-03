function string() {
    var str = document.getElementById("string").value;
    var l = str.split(' ');
    
    var minstr = [];
    var maxstr = [];

    var max = Number.MIN_VALUE;
    var min = Number.MAX_VALUE;

    for (var i = 0; i < l.length; i++) {
        if (l[i].length < min) min = l[i].length;
        if (l[i].length > max) max = l[i].length;
    }

    for (var i = 0; i < l.length; i++) {
        if (l[i].length == min) minstr.push(l[i]);
        if (l[i].length == max) maxstr.push(l[i]);
    }
    
    document.getElementById("outputmin").innerHTML = "Shortest word(s): " + minstr.toString();
    document.getElementById("outputmax").innerHTML = "Longest word(s): " + maxstr.toString();
}

function bmi() {
    var h = parseFloat(document.getElementById("height").value)/100;
    var w = parseFloat(document.getElementById("weight").value);

    var bmi = w / (h * h);
    var result;
    if (bmi < 18) result = "Underweight";
    else if (bmi >= 18 && bmi < 25) result = "Normal";
    else if (bmi >= 25 && bmi < 30) result = "Overweight";
    else result = "Obese";

    document.getElementById("bmi").innerHTML = "BMI: " + bmi.toPrecision(4);
    document.getElementById("result").innerHTML = "Result: You are " + result + "!";
}

function grow() {
    var r = parseInt(document.getElementById("rows").value);
    var c = parseInt(document.getElementById("cols").value);
    var l = ["garden.jpg", "media/orange.png"];
    //document.getElementById("garden").innerHTML = null;
    var garden = document.getElementById("garden");
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            var fruit = Math.floor(Math.random() * 2);
            var img = "<img src='garden.jpg'" + l[fruit] + ' width = "150px" height = "150px"></img>';
            garden.innerHTML += img;
        }garden.innerHTML += "<br>";
    }
}

function convert() {
    var amt = parseFloat(document.getElementById("amt").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var ans = document.getElementById("answer");

    var toINR = 79.97;
    var toUSD = 0.013;
    var result;
    
    if (from == to) result = amt;
    else if (from == "USD") result = amt*toINR;
    else result = amt*toUSD;
    //alert(result);
    ans.innerHTML = amt.toString() + " " + from + " = " + result.toString() + " " + to + "!";
}

function flip() {
    var img = document.getElementById("coin");
    var head = document.getElementById("num_heads");
    var tail = document.getElementById("num_tails");
    var h = parseInt(head.innerHTML);
    var t = parseInt(tail.innerHTML);

    var l = ["head.png", "tail.png"];
    var s = Math.floor(Math.random()*2);
    if (l[s]==l[0]) {
        head.innerHTML = h+1;
    } else {
        tail.innerHTML = t+1;
    };
    img.src = "coin.jpg"+l[s];
}

function bill() {
    var half = parseInt(document.getElementById("small").value);
    var one = parseInt(document.getElementById("medium").value);
    var two = parseInt(document.getElementById("large").value);
    var total;

    var small = 100;
    var medium = 200;
    var large = 400;

    total = (half*small) + (one*medium) + (two*large);
    var tax = 0.09 * total;
    total += tax;

    var radio = document.getElementsByName("tip");
    var tip;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) tip = ((radio[i].value)/100)*total;
    }
    total += tip;
    document.getElementById("price").innerHTML = "Cost of order: " + total + " rupees!"
    
}
