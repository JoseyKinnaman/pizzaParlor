// Back End for Pizza

function Pizza(size, toppings) {
  this.price = 12;
  this.toppings = toppings;
  this.size = size; 
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
  return this.price
}
















// Front End UI
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    var toppings = $("#toppings").val();
    console.log(toppings);
    var size = $("#size").val();
    console.log(size);
    var myPizza = new Pizza(size, toppings);
    console.log(myPizza);
    var price = myPizza.calcPrice();
    console.log(price);
  });
});