import { removeCart } from "./utils.js";

let url2 = "http://localhost:3000/api/cart/remove/";

document.querySelectorAll(".remove").forEach((item) => {
  item.addEventListener("click", () => {
    removeCart(url2, item.dataset.id).then((status) => {
      if (status === 200) location.href = "http://localhost:3000/cart";
      else if (status === 400) alert("This product is not in your cart!");
    });
  });
});
