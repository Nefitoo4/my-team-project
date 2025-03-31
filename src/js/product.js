import { getLocalStorage, getParam, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductsDetails from "./ProductsDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const productDetails = new ProductsDetails(productId, dataSource);
productDetails.init();

//define addProductToCart function
function addProductToCart(product) {
  const cartItems = getLocalStorage("so-cart") || [];
  const existingProduct = carItems.find((item) => item.Id === product.Id);

  if (existingProduct) {
    //if the product is in the cart, increment the quantity
    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
  } else {
    //if new, add the product with an initial of 1
    product.quantity = 1;
    cartItems.push(product);
  }

  //Keep the cart updated in localStorage
  setLocalStorage("so-cart", cartItems);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const productItem = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(productItem);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
