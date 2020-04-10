// Back End for Pizza

function Pizza(size, toppings, addTop) {
  this.price = 12;
  this.toppings = toppings;
  this.size = size; 
  this.addTop = addTop;
}

Pizza.prototype.calcPrice = function () {
  if (this.size === "med") {
    this.price += 1;
  }
  if (this.size === "large") {
    this.price += 2;
  }
  if (this.size === "xl") {
    this.price += 3;
  }
  if (this.addTop === "Pineapple") {
    this.price += 0.50;
  }
  if (this.addTop === "Pop Corn") {
    this.price += 0.50;
  }
  if (this.addTop === "Pastrami") {
    this.price += 0.50;
  }
  if (this.addTop === "Pop Rocks") {
    this.price += 0.50;
  } else {
    this.price += 0;
  }
  return this.price;
};
 

Pizza.prototype.pieAndSize = function () {
  return this.size + " " + this.toppings + " Pizza "
}



// Front End UI
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    var toppings = $("#toppings").val();
    console.log(toppings);
    var size = $("#size").val();
    console.log(size);
    var addTop = $("#addTop").val();
    console.log(addTop);
    var myPizza = new Pizza(size, toppings, addTop);
    console.log(myPizza);
    var price = myPizza.calcPrice();
    console.log(price);
    $("#pizzaTotal").text("You ordered the " + myPizza.pieAndSize() + "and the price is $" + price + "! ");
    $("#toppers").text("Additional Toppings: " + myPizza.addTop);
    $("#order").show();
  });
});