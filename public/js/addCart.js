import { addCart } from "./utils.js";

let url1 = "http://localhost:3000/api/cart/add/";

document.querySelectorAll(".add").forEach((item) => {
  item.addEventListener("click", () => {
    addCart(url1, item.dataset.id).then((status) => {
      if (status === 200) location.href = "http://localhost:3000/cart";
      else alert("Some error occured!");
    });
  });
});
