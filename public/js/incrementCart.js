import { addCart } from "./utils.js";

let incButton = document.getElementById("inc");
let url1 = "http://localhost:3000/api/cart/add/";

incButton.addEventListener("click", () => {
  addCart(url1, incButton.dataset.id).then((status) => {
    if (status === 200) location.href = "http://localhost:3000/cart";
    else alert("Some error occured!");
  });
});
