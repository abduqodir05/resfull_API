renderProductCarts();

const cartsContainer = document.querySelector(".carts");
const submitButton = document.querySelector(".order-products");
const orderedProductsContainer = document.querySelector(".ordered-products");

let orderedProducts = [];

function incrementCountOfOrder(clickedElementId) {
  for (let i = 0; i < orderedProducts.length; i++) {
    const order = orderedProducts[i];

    if (order.id == clickedElementId) {
      if (order.count) order.count++;
      else order.count = 1;
    }
  }
}

function decrementCountOfOrder(clickedElementId) {
  for (let i = 0; i < orderedProducts.length; i++) {
    const order = orderedProducts[i];

    if (order.id == clickedElementId) {
      if (order.count == 0) return;
      if (order.count) order.count--;
      else order.count = 0;
    }
  }
}

async function renderProductCarts() {
  // get product with fetch  +
  let products = await fetch("http://localhost:8080/products");

}
  products = await products.json();
  const fetchedProducts = response.json();
  orderedProducts = fetchedProducts;

  const product = fetchedProducts[i];
  let box1 =document.createElement('div')
  let name1_h3 =document.createElement('h3')
  let name1_h4 =document.createElement('h4')  
  let plus1 =document.createElement('button')
  let p1 = document.createElement('p')
  let minus1 =document.createElement('button')

  for (let i = 0; i < fetchedProducts.length; i++) {
    name1_h3.textContent = fetchedProducts.title
    name1_h4.textContent = fetchedProducts.price
  }


    // let box2 =document.createElement('div')
    // let name2_h3 =document.createElement('h3')
    // let name2_h4 =document.createElement('h4')  
    // let minus2 =document.createElement('button')
    // let p2 = document.createElement('p')
    // let plus2 =document.createElement('button')

    // let box3 =document.createElement('div')
    // let name3_h3 =document.createElement('h3')
    // let name3_h4 =document.createElement('h4')  
    // let minus3 =document.createElement('button')
    // let p3 = document.createElement('p')
    // let plus3 =document.createElement('button')

    // let box4 =document.createElement('div')
    // let name4_h3 =document.createElement('h3')
    // let name4_h4 =document.createElement('h4')  
    // let minus4 =document.createElement('button')
    // let p4 = document.createElement('p')
    // let plus4 =document.createElement('button')


    plus1.addEventListener('click',() => {
      incrementCountOfOrder()
      cartsContainer.append(incrementCountOfOrder)
    })
    // create element of cart according to html
    // add event listener for the carts plus and minus buttons
    // append it to carts container
  

submitButton.addEventListener("click", (event) => {
  // post request to orders
  // use orderedProducts to send the body of request
});
