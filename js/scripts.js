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
  });
});