import products from "./products";

function getMockAPIData() {
  const promiseProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Productos cargados");
      resolve(products);
    }, 2000);
  });
  return promiseProducts;
}

export default getMockAPIData;
