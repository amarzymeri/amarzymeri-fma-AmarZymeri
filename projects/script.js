const body = document.body;
const header = document.getElementById("header");
header.textContent = "Shopping Cart";

let cart = [
    {
        title: "Milk",
        category: "Food",
        quantity: 3,
        price: 1.65,
    },
    {
        title: "Bread",
        category: "Food",
        quantity: 2,
        price: 2.25,
    },
    {
        title: "Smartphone",
        category: "Electronics",
        quantity: 1,
        price: 699.99,
    },
    {
        title: "Running Shoes",
        category: "Fashion",
        quantity: 1,
        price: 49.99,
    },
    {
        title: "Book: The Hitchhiker's Guide to the Galaxy",
        category: "Books",
        quantity: 1,
        price: 12.99,
    },
    {
        title: "Coffee Maker",
        category: "Appliances",
        quantity: 1,
        price: 34.99,
    },
    {
        title: "Gaming Laptop",
        category: "Electronics",
        quantity: 1,
        price: 1299.99,
    },
    {
        title: "Sunglasses",
        category: "Fashion",
        quantity: 2,
        price: 19.99,
    },
];

for (let i = 0; i < cart.length; i++) {
    const div = document.createElement("div");


    const productTitle = document.createElement("h3");
    productTitle.textContent = cart[i].title;

    const productCatagory = document.createElement("p");
    productCatagory.textContent = cart[i].category;

    const productQuantity = document.createElement("span");
    productQuantity.textContent = cart[i].quantity;

    const productPrice = document.createElement("span");
    productPrice.textContent = cart[i].price;

    div.appendChild(productTitle);
    div.appendChild(productCatagory);
    div.appendChild(productQuantity);
    div.appendChild(productPrice);

    body.appendChild(div);
}