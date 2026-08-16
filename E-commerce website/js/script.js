// ==========================================
// SAICAART SHOPPING CART
// ==========================================


// Get cart from localStorage

let cart = JSON.parse(localStorage.getItem("saicaartCart")) || [];


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem(
        "saicaartCart",
        JSON.stringify(cart)
    );

}


// ==========================================
// ADD PRODUCT TO CART
// ==========================================

function addToCart(name, price, image) {

    const existingProduct = cart.find(
        product => product.name === name
    );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            name: name,

            price: price,

            image: image,

            quantity: 1

        });

    }


    saveCart();

    updateCartCount();


    alert(
        name + " has been added to your cart!"
    );

}


// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cart-count");


    if (!cartCount) {
        return;
    }


    let totalQuantity = 0;


    cart.forEach(product => {

        totalQuantity += product.quantity;

    });


    cartCount.textContent = totalQuantity;

}


// ==========================================
// DISPLAY CART
// ==========================================

function displayCart() {

    const cartItems =
        document.getElementById("cart-items");


    if (!cartItems) {
        return;
    }


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <h2>Your cart is empty 🛒</h2>

                <p>
                    Add some products to your shopping cart.
                </p>

                <br>

                <a href="index.html"
                   class="shop-btn">

                    Continue Shopping

                </a>

            </div>

        `;

        updateCartSummary();

        return;
    }


    cartItems.innerHTML = "";


    cart.forEach((product, index) => {


        const cartItem =
            document.createElement("div");


        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div class="cart-item-info">

                <h3>
                    ${product.name}
                </h3>

                <p class="cart-item-price">

                    ₹${product.price}

                </p>

            </div>


            <div class="quantity-controls">

                <button
                    onclick="changeQuantity(${index}, -1)"
                >
                    -
                </button>


                <strong>
                    ${product.quantity}
                </strong>


                <button
                    onclick="changeQuantity(${index}, 1)"
                >
                    +
                </button>

            </div>


            <p>

                ₹${product.price * product.quantity}

            </p>


            <button
                class="remove-btn"
                onclick="removeFromCart(${index})"
            >

                Remove

            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    updateCartSummary();

}


// ==========================================
// CHANGE QUANTITY
// ==========================================

function changeQuantity(index, change) {

    cart[index].quantity += change;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    saveCart();

    displayCart();

    updateCartCount();

}


// ==========================================
// REMOVE PRODUCT
// ==========================================

function removeFromCart(index) {

    cart.splice(index, 1);


    saveCart();

    displayCart();

    updateCartCount();

}


// ==========================================
// UPDATE CART SUMMARY
// ==========================================

function updateCartSummary() {

    const totalItems =
        document.getElementById("total-items");

    const cartTotal =
        document.getElementById("cart-total");


    let itemCount = 0;

    let total = 0;


    cart.forEach(product => {

        itemCount += product.quantity;

        total +=
            product.price *
            product.quantity;

    });


    if (totalItems) {

        totalItems.textContent =
            itemCount;

    }


    if (cartTotal) {

        cartTotal.textContent =
            total.toLocaleString("en-IN");

    }

}


// ==========================================
// CLEAR CART
// ==========================================

function clearCart() {

    if (cart.length === 0) {

        alert("Your cart is already empty.");

        return;

    }


    const confirmation =
        confirm(
            "Are you sure you want to clear your cart?"
        );


    if (confirmation) {

        cart = [];

        saveCart();

        displayCart();

        updateCartCount();

    }

}


// ==========================================
// CHECKOUT
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty. Please add products first."
        );

        return;

    }


    alert(
        "Checkout system will be implemented here."
    );

}


// ==========================================
// CONTACT FORM
// ==========================================

function submitContact(event) {

    event.preventDefault();


    alert(
        "Thank you for contacting Saicaart! " +
        "We will get back to you soon."
    );


    event.target.reset();

}


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCartCount();

        displayCart();

    }
);