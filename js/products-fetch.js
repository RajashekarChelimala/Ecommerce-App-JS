function fetchData() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => getProducts(data))
    .catch((error) => alert(error));

  function getProducts(data) {
    console.log(data);
    localStorage.setItem("products", JSON.stringify(data));
    let productsHTML = "";
    data.forEach((product) => {
      productsHTML += `
          <card class='card'>
            <h3 class='card-header'>${product.title}</h3>
            <div class='card-body'>
            <img src="${product.image}" alt="${product.title}">
            <p>$${product.price}</p>
            </div>
            <div class='card-footer'>
            <button>Add to Cart</button>
            <button>Buy Now></button>
            </div>
          </card>`;
    });
    let element = document.getElementById("productsList");
    element.innerHTML = productsHTML;
  }
}
