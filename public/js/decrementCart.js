import { removeCart } from "./utils.js";

let decButton = document.getElementById("dec");
let url2 = "http://localhost:3000/api/cart/remove/";

decButton.addEventListener("click", () => {
  removeCart(url2, decButton.dataset.id).then((status) => {
    if (status === 200) location.href = "http://localhost:3000/cart";
    else if (status === 400) alert("This product is not in your cart!");
  });
});

//e.target.attributes.id.value
