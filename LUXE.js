//  PRODUCT DETAILS POPUP
//PRODUCT-1
function openProductDetails() {
  // fetch the product details from the API
      fetch("https://your-api-endpoint.com/product/123")
      .then(response => response.json())
      .then(data => {
          // populate the details on the page
          document.getElementById("price").innerHTML = data.price;
          document.getElementById("description").innerHTML = data.description;
          document.getElementById("other-info").innerHTML = data.otherInformation;
      });
      // show the popup window
      var popup = document.getElementById("product-details-popup");
      popup.style.display = "block";
  }
  
  function closeProductDetails() {
      // hide the popup window
      var popup = document.getElementById("product-details-popup");
      popup.style.display = "none";
  }

  //PRODUCT-2
  function openProduct2Details() {
    // fetch the product details from the API
        fetch("https://your-api-endpoint.com/product/123")
        .then(response => response.json())
        .then(data => {
            // populate the details on the page
            document.getElementById("price").innerHTML = data.price;
            document.getElementById("description").innerHTML = data.description;
            document.getElementById("other-info").innerHTML = data.otherInformation;
        });
        // show the popup window
        var popup = document.getElementById("product-details-popup2");
        popup.style.display = "block";
    }
    
    function closeProduct2Details() {
        // hide the popup window
        var popup = document.getElementById("product-details-popup2");
        popup.style.display = "none";
    }

    //PRODUCT-3
    function openProduct3Details() {
      // fetch the product details from the API
          fetch("https://your-api-endpoint.com/product/123")
          .then(response => response.json())
          .then(data => {
              // populate the details on the page
              document.getElementById("price").innerHTML = data.price;
              document.getElementById("description").innerHTML = data.description;
              document.getElementById("other-info").innerHTML = data.otherInformation;
          });
          // show the popup window
          var popup = document.getElementById("product-details-popup3");
          popup.style.display = "block";
      }
      
      function closeProduct3Details() {
          // hide the popup window
          var popup = document.getElementById("product-details-popup3");
          popup.style.display = "none";
      }
  

    //PRODUCT-4
    function openProduct4Details() {
      // fetch the product details from the API
          fetch("https://your-api-endpoint.com/product/123")
          .then(response => response.json())
          .then(data => {
              // populate the details on the page
              document.getElementById("price").innerHTML = data.price;
              document.getElementById("description").innerHTML = data.description;
              document.getElementById("other-info").innerHTML = data.otherInformation;
          });
          // show the popup window
          var popup = document.getElementById("product-details-popup4");
          popup.style.display = "block";
      }
      
      function closeProduct4Details() {
          // hide the popup window
          var popup = document.getElementById("product-details-popup4");
          popup.style.display = "none";
      }

    //PRODUCT-5
    function openProduct5Details() {
      // fetch the product details from the API
          fetch("https://your-api-endpoint.com/product/123")
          .then(response => response.json())
          .then(data => {
              // populate the details on the page
              document.getElementById("price").innerHTML = data.price;
              document.getElementById("description").innerHTML = data.description;
              document.getElementById("other-info").innerHTML = data.otherInformation;
          });
          // show the popup window
          var popup = document.getElementById("product-details-popup5");
          popup.style.display = "block";
      }
      
      function closeProduct5Details() {
          // hide the popup window
          var popup = document.getElementById("product-details-popup5");
          popup.style.display = "none";
      }
    //PRODUCT-6
    function openProduct6Details() {
      // fetch the product details from the API
          fetch("https://your-api-endpoint.com/product/123")
          .then(response => response.json())
          .then(data => {
              // populate the details on the page
              document.getElementById("price").innerHTML = data.price;
              document.getElementById("description").innerHTML = data.description;
              document.getElementById("other-info").innerHTML = data.otherInformation;
          });
          // show the popup window
          var popup = document.getElementById("product-details-popup6");
          popup.style.display = "block";
      }
      
      function closeProduct6Details() {
          // hide the popup window
          var popup = document.getElementById("product-details-popup6");
          popup.style.display = "none";
      }


    //PRODUCT-7
    function openProduct7Details() {
      // fetch the product details from the API
          fetch("https://your-api-endpoint.com/product/123")
          .then(response => response.json())
          .then(data => {
              // populate the details on the page
              document.getElementById("price").innerHTML = data.price;
              document.getElementById("description").innerHTML = data.description;
              document.getElementById("other-info").innerHTML = data.otherInformation;
          });
          // show the popup window
          var popup = document.getElementById("product-details-popup7");
          popup.style.display = "block";
      }
      
      function closeProduct7Details() {
          // hide the popup window
          var popup = document.getElementById("product-details-popup7");
          popup.style.display = "none";
      }
      

 //SUBSCRIBE NEWSLETTER
  // Get the form element
  var form = document.getElementById("subscribeForm");

  form.addEventListener("submit", function(event) {

    // Get the email value
    var email = document.getElementById("email").value;

    var message = document.createElement("div");
    message.innerHTML = "Thank you for Subscribing!";
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.backgroundColor = "white";
    message.style.padding = "10px";
    message.style.zIndex = "9999";

    // Add the message to the page
    document.body.appendChild(message);
  });


  //ADD TO CART 
  // Get all elements with the class "addToCart"
  var btns = document.getElementsByClassName("addToCart");
                       
  // Add a click event listener to each button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      // Create the "Added to Cart" message
      var message = document.createElement("div");
      message.innerHTML = "Added to Cart";
      message.style.position = "fixed";
      message.style.top = "50%";
      message.style.right = "0";
      message.style.backgroundColor = "white";
      message.style.padding = "10px";
      message.style.zIndex = "9999";

      // Add the message to the page
      document.body.appendChild(message);

      setTimeout(function() {
        message.remove();
      }, 5000);
    });
  }

  //HIDDEN SIZE GUIDE
document.getElementById("hidden-btn").addEventListener('click', function () {op.innerHTML = ta.innerHTML;}, false);

// var link = document.getElementById("style-guide");

// link.addEventListener("click", function(event) {
//   event.preventDefault(); 

//   var tooltip = document.createElement("div");
//   tooltip.innerHTML = "Style Guide";
//   tooltip.style.position = "absolute";
//   tooltip.style.backgroundColor = "lightgray";
//   tooltip.style.padding = "5px";

//   document.body.appendChild(tooltip);
// });

  // Get the button element
  // var btn = document.getElementById("addToCartBtn");

  // // Add a click event listener to the button
  // btn.addEventListener("click", function() {
  //   // Create the "Added to Cart" message
  //   var message = document.createElement("div");
  //   message.innerHTML = "Added to Cart";
  //   message.style.position = "fixed";
  //   message.style.top = "50%";
  //   message.style.right = "0";
  //   message.style.backgroundColor = "lightgreen";
  //   message.style.padding = "10px";
  //   message.style.zIndex = "9999";

  //   // Add the message to the page
  //   document.body.appendChild(message);
  // });

  
  // var formDivs = document.getElementsByClassName("subscribeForm");
  // // Add a submit event listener to the form
  // for (var i = 0; i < formDivs.length; i++) {
  //   var form = formDivs[i].querySelector('form');
  //   form.addEventListener("submit", function(event) {
  //       event.preventDefault(); // Prevent the form from submitting

  //       // Get the email value
  //       var email = formDivs[i].querySelector('.email').value;
  //       // Send the email to the server (assuming you have some server-side code to handle this)
  //       // For example, you can use the fetch API to make a post request
  //       // ...

  //       // Create the "Thank you for subscribing!" message
  //       var message = document.createElement("div");
  //       message.innerHTML = "Thank you for subscribing!";
  //       message.style.position = "fixed";
  //       message.style.top = "50%";
  //       message.style.left = "50%";
  //       message.style.transform = "translate(-50%, -50%)";
  //       message.style.backgroundColor = "lightgreen";
  //       message.style.padding = "10px";
  //       message.style.zIndex = "9999";

  //       // Add the message to the page
  //       document.body.appendChild(message);
  //   });
  // }