function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Slice") {
        sizeTotal = 4;
    } else if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    var meatSubtotal = getMeat(runningTotal,text1);
    getVeg(meatSubtotal[0],meatSubtotal[1]);
};

function getMeat(runningTotal, text1) {
    var meatData = new Array();
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    meatData[0] = runningTotal;
    meatData[1] = text1;
    console.log("total selected meat items: "+meatCount);
    console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    return meatData;
}

function getVeg(runningTotal, text1) {
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("vegetables");
    for (var j = 0; j < vegArray.length; j++) {
        if (vegArray[j].checked) {
            selectedVeg.push(vegArray[j].value);
            console.log("selected vegetable item: ("+vegArray[j].value+")");
            text1 = text1+vegArray[j].value+"<br>";
        }
    }
    var vegTotal = selectedVeg.length;
    runningTotal = (runningTotal + vegTotal);
    console.log("total selected vegetable items: "+vegTotal);
    console.log(vegTotal+" vegetables = $"+vegTotal+".00");
    console.log("veg text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}

$(function() {
    $('body').removeClass('fade-out');
});