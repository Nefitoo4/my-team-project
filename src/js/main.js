import { loadHeaderFooter } from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const element = document.getElementById(".product-list");
const productList = new ProductList("tents", dataSource, element);

productList.init();
