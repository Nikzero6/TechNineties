import express from "express";
import axios from "axios";
import { cart } from "./constants.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");



app.get("/", (req, res) => {
  res.render("home", { cart });
});

app.post("/product", (req, res) => {
  let params = req.body;

  res.redirect(`product/${params.store}/${params.product_id}`);
});

const getProduct = async (store, product_id) => {
  try {
    const { data } = await axios.post(
      "https://dev.nazdik.in/api/product/show",
      {
        store,
        product_id,
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

app.get("/product/:store/:product_id", (req, res) => {
  let store = req.params.store;
  let product_id = req.params.product_id;
  let id = store + "-" + product_id;

  getProduct(store, product_id).then((data) => {
    const { name, sku, description, price, images } = data;
    res.render("product", { name, sku, description, price, images, id });
  });
});

app.get("/cart", (req, res) => {
  res.render("cart", { cart });
});

const search = (id) => cart.findIndex((elem) => elem.id == id);

app.post("/api/cart/add/:id", (req, res) => {
  let index = search(req.params.id);

  if (index != -1) {
    cart[index]["quantity"]++;
    res.sendStatus(200);
  } else {
    let [store, product_id] = req.params.id.split("-");

    getProduct(+store, +product_id)
      .then((data) => {
        const { name, price, images } = data;
        const product = {
          id: req.params.id,
          name,
          price,
          quantity: 1,
          image: images[0].images,
        };
        cart.push(product);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
});

const decQuantity = (arr, index) => arr[index].quantity--;

app.post("/api/cart/remove/:id", (req, res) => {
  let index = search(req.params.id);

  if (index == -1) {
    res.sendStatus(400);
  } else if (cart[index].quantity == 1) {
    cart.splice(index, 1);

    res.sendStatus(200);
  } else {
    decQuantity(cart, index);

    res.sendStatus(200);
  }
});

app.listen(3000, () => {
  console.log("App is running at port 3000!");
});
