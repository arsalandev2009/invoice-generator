// let productWeight = prompt("Enter product weight");
// let productName = prompt("Enter product name");
// let productPrice = prompt("Enter product price");

// var productAmount = productWeight * productPrice ;
// document.writeln(
//     " *Invoice* " + "<br>" + "<br>" +
//     productWeight + " kg... " + productName + "... " + productPrice + "*" + productWeight + "... " + productAmount + "<br>" + "<br>" +
//     "Delivery charges... *Free*" + "<br>" + "<br>" +
//     "Total COD amount " + "*" + productAmount + "*" + "<br>" + "<br>" +
//     "Allow to open"
//     )

function invoice() {
  let productWeight1 = parseFloat(document.getElementById("weight1").value);
  let productWeight2 = parseFloat(document.getElementById("weight2").value);
  let productWeight3 = parseFloat(document.getElementById("weight3").value);
  let productWeight4 = parseFloat(document.getElementById("weight4").value);
  let productWeight5 = parseFloat(document.getElementById("weight5").value);

  let productName1 = document.getElementById("product1").value;
  let productName2 = document.getElementById("product2").value;
  let productName3 = document.getElementById("product3").value;
  let productName4 = document.getElementById("product4").value;
  let productName5 = document.getElementById("product5").value;

  let productPrice1 = parseFloat(document.getElementById("price1").value);
  let productPrice2 = parseFloat(document.getElementById("price2").value);
  let productPrice3 = parseFloat(document.getElementById("price3").value);
  let productPrice4 = parseFloat(document.getElementById("price4").value);
  let productPrice5 = parseFloat(document.getElementById("price5").value);

  var productAmount1 = productWeight1 * productPrice1 || 0;
  var productAmount2 = productWeight2 * productPrice2 || 0;
  var productAmount3 = productWeight3 * productPrice3 || 0;
  var productAmount4 = productWeight4 * productPrice4 || 0;
  var productAmount5 = productWeight5 * productPrice5 || 0;

  let totalAmount = productAmount1 + productAmount2 + productAmount3 + productAmount4 + productAmount5;

  paid = parseFloat(document.getElementById("advance").value);
  afterAdvance = totalAmount - paid;

  // console.log(afterAdvance);
  if (productWeight1 && productName1 && productPrice1 && productWeight2 && productName2 && productPrice2 && productWeight3 && productName3 && productPrice3 && productWeight4 && productName4 && productPrice4 && productWeight5 && productName5 && productPrice5) {
    if (paid) {
      document.getElementById("invoiceOutput").innerHTML =
        " *Invoice* " + "<br>" + "<br>" +

        productWeight1 +" kg... " + productName1 + "... " + productPrice1 + "*" + productWeight1 + "... " + productAmount1 +  "<br>" + "<br>" +

        productWeight2 +" kg... " + productName2 + "... " + productPrice2 + "*" + productWeight2 + "... " + productAmount2 +  "<br>" + "<br>" +

        productWeight3 + " kg... " + productName3 +"... " + productPrice3 + "*" + productWeight3 + "... " + productAmount3 + "<br>" +  "<br>" +

        productWeight4 + " kg... " + productName4 +"... " + productPrice4 + "*" + productWeight4 + "... " + productAmount4 + "<br>" +  "<br>" +

        productWeight5 + " kg... " + productName5 +"... " + productPrice5 + "*" + productWeight5 + "... " + productAmount5 + "<br>" +  "<br>" +

        "Delivery charges... *Free*" +  "<br>" + "<br>" +

        "Total amount " + "*" + totalAmount + "*" + "<br>" + "<br>" +

        "Advance paid " + "*" + paid +  "*" + "<br>" + "<br>" +

        "Total COD amount " + "*" + afterAdvance + "*" + "<br>" +  "<br>" +

        "Allow to open";

    } else {
      document.getElementById("invoiceOutput").innerHTML =
        " *Invoice* " + "<br>" + "<br>" + 

        productWeight1 + " kg... " + productName1 + "... " + productPrice1 + "*" + productWeight1 + "... " + productAmount1 + "<br>" + "<br>" +

        productWeight2 + " kg... " + productName2 + "... " + productPrice2 + "*" + productWeight2 + "... " + productAmount2 + "<br>" + "<br>" +

        productWeight3 + " kg... " + productName3 + "... " + productPrice3 + "*" + productWeight3 + "... " + productAmount3 + "<br>" + "<br>" +

        productWeight4 + " kg... " + productName4 + "... " + productPrice4 + "*" + productWeight4 + "... " + productAmount4 + "<br>" + "<br>" +

        productWeight5 + " kg... " + productName5 + "... " + productPrice5 + "*" + productWeight5 + "... " + productAmount5 + "<br>" + "<br>" +

        "Delivery charges... *Free*" +  "<br>" +  "<br>" +

        "Total COD amount " + "*" + totalAmount + "*" + "<br>" + "<br>" +

        "Allow to open";
    }
  } else if (productWeight1 && productName1 && productPrice1 && productWeight2 && productName2 && productPrice2 && productWeight3 && productName3 && productPrice3 && productWeight4 && productName4 && productPrice4) {
    if (paid) {
      document.getElementById("invoiceOutput").innerHTML =
        " *Invoice* " + "<br>" + "<br>" +

        productWeight1 +" kg... " + productName1 + "... " + productPrice1 + "*" + productWeight1 + "... " + productAmount1 +  "<br>" + "<br>" +

        productWeight2 +" kg... " + productName2 + "... " + productPrice2 + "*" + productWeight2 + "... " + productAmount2 +  "<br>" + "<br>" +

        productWeight3 + " kg... " + productName3 +"... " + productPrice3 + "*" + productWeight3 + "... " + productAmount3 + "<br>" +  "<br>" +

        productWeight4 + " kg... " + productName4 +"... " + productPrice4 + "*" + productWeight4 + "... " + productAmount4 + "<br>" +  "<br>" +


        "Delivery charges... *Free*" +  "<br>" + "<br>" +

        "Total amount " + "*" + totalAmount + "*" + "<br>" + "<br>" +

        "Advance paid " + "*" + paid +  "*" + "<br>" + "<br>" +

        "Total COD amount " + "*" + afterAdvance + "*" + "<br>" +  "<br>" +

        "Allow to open";

    } else {
      document.getElementById("invoiceOutput").innerHTML =
        " *Invoice* " + "<br>" + "<br>" + 

        productWeight1 + " kg... " + productName1 + "... " + productPrice1 + "*" + productWeight1 + "... " + productAmount1 + "<br>" + "<br>" +

        productWeight2 + " kg... " + productName2 + "... " + productPrice2 + "*" + productWeight2 + "... " + productAmount2 + "<br>" + "<br>" +

        productWeight3 + " kg... " + productName3 + "... " + productPrice3 + "*" + productWeight3 + "... " + productAmount3 + "<br>" + "<br>" +

        productWeight4 + " kg... " + productName4 + "... " + productPrice4 + "*" + productWeight4 + "... " + productAmount4 + "<br>" + "<br>" +

        "Delivery charges... *Free*" +  "<br>" +  "<br>" +

        "Total COD amount " + "*" + totalAmount + "*" + "<br>" + "<br>" +

        "Allow to open";
    }
  } else if (
    productWeight1 &&
    productName1 &&
    productPrice1 &&
    productWeight2 &&
    productName2 &&
    productPrice2 &&
    productWeight3 &&
    productName3 &&
    productPrice3
  ) {
    if (paid) {
      document.getElementById("invoiceOutput").innerHTML =
        " *Invoice* " +
        "<br>" +
        "<br>" +
        productWeight1 +
        " kg... " +
        productName1 +
        "... " +
        productPrice1 +
        "*" +
        productWeight1 +
        "... " +
        productAmount1 +
        "<br>" +
        "<br>" +
        productWeight2 +
        " kg... " +
        productName2 +
        "... " +
        productPrice2 +
        "*" +
        productWeight2 +
        "... " +
        productAmount2 +
        "<br>" +
        "<br>" +
        productWeight3 +
        " kg... " +
        productName3 +
        "... " +
        productPrice3 +
        "*" +
        productWeight3 +
        "... " +
        productAmount3 +
        "<br>" +
        "<br>" +
        "Delivery charges... *Free*" +
        "<br>" +
        "<br>" +
        "Total amount " +
        "*" +
        totalAmount +
        "*" +
        "<br>" +
        "<br>" +
        "Advance paid " +
        "*" +
        paid +
        "*" +
        "<br>" +
        "<br>" +
        "Total COD amount " +
        "*" +
        afterAdvance +
        "*" +
        "<br>" +
        "<br>" +
        "Allow to open";
    } else {
      document.getElementById("invoiceOutput").innerHTML =
        " *Invoice* " +
        "<br>" +
        "<br>" +
        productWeight1 +
        " kg... " +
        productName1 +
        "... " +
        productPrice1 +
        "*" +
        productWeight1 +
        "... " +
        productAmount1 +
        "<br>" +
        "<br>" +
        productWeight2 +
        " kg... " +
        productName2 +
        "... " +
        productPrice2 +
        "*" +
        productWeight2 +
        "... " +
        productAmount2 +
        "<br>" +
        "<br>" +
        productWeight3 +
        " kg... " +
        productName3 +
        "... " +
        productPrice3 +
        "*" +
        productWeight3 +
        "... " +
        productAmount3 +
        "<br>" +
        "<br>" +
        "Delivery charges... *Free*" +
        "<br>" +
        "<br>" +
        "Total COD amount " +
        "*" +
        totalAmount +
        "*" +
        "<br>" +
        "<br>" +
        "Allow to open";
    }
  } else if (
    productWeight1 &&
    productName1 &&
    productPrice1 &&
    productWeight2 &&
    productName2 &&
    productPrice2
  ) {
    if (paid) {
      document.getElementById("invoiceOutput").innerHTML =
        " *Invoice* " +
        "<br>" +
        "<br>" +
        productWeight1 +
        " kg... " +
        productName1 +
        "... " +
        productPrice1 +
        "*" +
        productWeight1 +
        "... " +
        productAmount1 +
        "<br>" +
        "<br>" +
        productWeight2 +
        " kg... " +
        productName2 +
        "... " +
        productPrice2 +
        "*" +
        productWeight2 +
        "... " +
        productAmount2 +
        "<br>" +
        "<br>" +
        "Delivery charges... *Free*" +
        "<br>" +
        "<br>" +
        "Total amount " +
        "*" +
        totalAmount +
        "*" +
        "<br>" +
        "<br>" +
        "Advance paid " +
        "*" +
        paid +
        "*" +
        "<br>" +
        "<br>" +
        "Total COD amount " +
        "*" +
        afterAdvance +
        "*" +
        "<br>" +
        "<br>" +
        "Allow to open";
    } else {
      document.getElementById("invoiceOutput").innerHTML =
        " *Invoice* " +
        "<br>" +
        "<br>" +
        productWeight1 +
        " kg... " +
        productName1 +
        "... " +
        productPrice1 +
        "*" +
        productWeight1 +
        "... " +
        productAmount1 +
        "<br>" +
        "<br>" +
        productWeight2 +
        " kg... " +
        productName2 +
        "... " +
        productPrice2 +
        "*" +
        productWeight2 +
        "... " +
        productAmount2 +
        "<br>" +
        "<br>" +
        "Delivery charges... *Free*" +
        "<br>" +
        "<br>" +
        "Total COD amount " +
        "*" +
        totalAmount +
        "*" +
        "<br>" +
        "<br>" +
        "Allow to open";
    }
  } else if (productWeight1 && productName1 && productPrice1   ) {
    if (paid) {
      document.getElementById("invoiceOutput").innerHTML =
        " *Invoice* " +
        "<br>" +
        "<br>" +
        productWeight1 +
        " kg... " +
        productName1 +
        "... " +
        productPrice1 +
        "*" +
        productWeight1 +
        "... " +
        productAmount1 +
        "<br>" +
        "<br>" +
        "Delivery charges... *Free*" +
        "<br>" +
        "<br>" +
        "Total amount " +
        "*" +
        totalAmount +
        "*" +
        "<br>" +
        "<br>" +
        "Advance paid " +
        "*" +
        paid +
        "*" +
        "<br>" +
        "<br>" +
        "Total COD amount " +
        "*" +
        afterAdvance +
        "*" +
        "<br>" +
        "<br>" +
        "Allow to open";
    } else {
      document.getElementById("invoiceOutput").innerHTML =
        " *Invoice* " +
        "<br>" +
        "<br>" +
        productWeight1 +
        " kg... " +
        productName1 +
        "... " +
        productPrice1 +
        "*" +
        productWeight1 +
        "... " +
        productAmount1 +
        "<br>" +
        "<br>" +
        "Delivery charges... *Free*" +
        "<br>" +
        "<br>" +
        "Total COD amount " +
        "*" +
        totalAmount +
        "*" +
        "<br>" +
        "<br>" +
        "Allow to open";
    }
  } else{
    document.getElementById("invoiceOutput").innerHTML =
      "Plz enter product details to see invoice";
  }
}



function copy() {
  let text = document.getElementById("invoiceOutput").innerText;

  navigator.clipboard.writeText(text)
   .then(() => {
  alert("Invoice copied!");
});
}
