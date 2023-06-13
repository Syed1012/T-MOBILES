// above code is for drop down bar of contents apple, samsung etc

function showBrandsDropdown() {
  var brandsDropdown = document.querySelector('.brands-dropdown');
  brandsDropdown.classList.add('show');
}

function hideBrandsDropdown() {
  var brandsDropdown = document.querySelector('.brands-dropdown');
  brandsDropdown.classList.remove('show');
}

// ==============================================================================================================================

//slider images code below

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}


function navigateToPage() {
  window.location.href = 'signin.html';
}

// ==============================================================================================================================

// News letter below code

window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('newsletterWrapper').style.display = 'flex';
  }, 9000);
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('newsletterWrapper').style.display = 'none';
});



// ==================================================================================================================

//Add to cart functionality

  // Get all "ADD TO CART" buttons
  var addToCartButtons = document.querySelectorAll('.add-to-cart');

  // Add click event listener to each button
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the item details
      var itemCard = button.closest('.card');
      var itemTitle = itemCard.querySelector('h3').textContent;
      var itemPrice = itemCard.querySelector('.price').textContent;

      // Create a new table row
      var newRow = document.createElement('tr');

      // Create table cells for item title, quantity, and price
      var titleCell = document.createElement('td');
      var quantityCell = document.createElement('td');
      var priceCell = document.createElement('td');

      // Set the content of the table cells
      titleCell.textContent = itemTitle;
      quantityCell.textContent = '1'; // Assuming quantity is always 1 for now
      priceCell.textContent = itemPrice;

      // Append the table cells to the new row
      newRow.appendChild(titleCell);
      newRow.appendChild(quantityCell);
      newRow.appendChild(priceCell);

      // Get the cart table body and append the new row
      var cartTableBody = document.querySelector('.cart-items tbody');
      cartTableBody.appendChild(newRow);

      // Update cart count
      var cartCount = document.querySelector('.cart-count');
      cartCount.textContent = parseInt(cartCount.textContent) + 1;

      // Update cart total
      updateCartTotal();

      // Show cart container
      var cartContainer = document.querySelector('.cart-container');
      cartContainer.style.display = 'block';
    });
  });

  // Show/hide cart container
  var cartIcon = document.querySelector('.cart-icon');
  var cartContainer = document.querySelector('.cart-container');

  cartIcon.addEventListener('click', function() {
    if (cartContainer.style.display === 'block') {
      cartContainer.style.display = 'none';
    } else {
      cartContainer.style.display = 'block';
    }
  });

  // Get a reference to the clear cart button
  var clearCartButton = document.getElementById('clear-cart-btn');

  // Add a click event listener to the button
  clearCartButton.addEventListener('click', clearCart);

  // Function to clear the cart
  function clearCart() {
    // Clear the cart items
    var cartTableBody = document.querySelector('.cart-items tbody');
    cartTableBody.innerHTML = '';

    // Reset the cart count
    var cartCount = document.querySelector('.cart-count');
    cartCount.textContent = '0';

    // Update cart total
    updateCartTotal();

    // Hide the cart container
    var cartContainer = document.querySelector('.cart-container');
    cartContainer.style.display = 'none';
  }

  // Get the close button element
  var closeButton = document.getElementById('close-close');

  // Add click event listener to the close button
  closeButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event propagation to the cart

    // Handle close action here
    // For example, you can hide the cart element
    var cartContainer = document.querySelector('.cart-container');
    cartContainer.style.display = 'none';
  });

  // Prevent the cart from closing when clicking inside it
  var cart = document.getElementById('cart');
  cart.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event propagation to the close button
  });

 // Update cart total
function updateCartTotal() {
  var total = 0;
  var cartItems = document.querySelectorAll('.cart-items tbody tr');

  cartItems.forEach(function(item) {
    var price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
    var quantity = parseFloat(item.querySelector('.quantity input').value || 0); // Use the input value for quantity if available, otherwise default to 0
    total += price * quantity;
  });

  // Update the total price in the HTML
  var cartTotal = document.getElementById('cart-total');
  cartTotal.textContent = '$' + total.toFixed(2);
}







