// Back End for Pizza

function Pizza(size, toppings) {
  this.price = 12;
  this.toppings = toppings;
  this.size = size; 
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

  });
});