// Get the cart elements
var cart = document.getElementById("cart");
var cartItems = document.getElementById("cart-items");
var cartTotal = document.getElementById("cart-total");
var checkoutBtn = document.getElementById("checkout-btn");

// Initialize the cart with some items
var items = [
  { name: "Item 1", price: 1500 },
  { name: "Item 2", price: 1500 }
];

// Add the items to the cart
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  var li = document.createElement("li");
  li.innerHTML = item.name + " - PKR" + item.price;
  cartItems.appendChild(li);
}

// Calculate the total price
var total = 0;
for (var i = 0; i < items.length; i++) {
  total += items[i].price;
}
cartTotal.innerHTML = "Total: PKR" + total;


 // Style the cart
 
 checkoutBtn.style.padding = "10px 20px";
 checkoutBtn.style.cursor = "pointer";
 checkoutBtn.style.marginTop = "10px";
 checkoutBtn.style.float = "right";
 checkoutBtn.style.border = "none";

// Add checkout function
checkoutBtn.addEventListener("click", function() {
alert("Checking out... Total: PKR" + total);
});