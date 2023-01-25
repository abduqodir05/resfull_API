renderList();
let count_total = 0;
let orders = [];
async function renderList() {
  let foods = await fetch("http://localhost:4080/foods");
  
  foods = await foods.json();

  const ul = document.querySelector("ul");

  for (let el of foods) {
    const li = document.createElement("li");

    li.setAttribute("id", el.id);
    li.setAttribute("value", el.price);

    const h3 = document.createElement("h3");
    h3.textContent = el.title;

    const h4 = document.createElement("h4");
    h4.textContent = el.price;

    li.append(h3, h4);
    ul.append(li);

    li.addEventListener("click", () => {
      const top = document.querySelector(".top");
      const total = document.querySelector(".total");

      top.innerHTML += li.innerHTML;

      count_total += parseInt(li.value);
      total.innerHTML = `Total: ${count_total}`;

      orders.push({
        id: li.id,
        title: el.title,
        price: li.value,
      });
    });
  }
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  setOrders(orders);
  const top = document.querySelector(".top");
  const total = document.querySelector(".total");
  count_total = 0;

  top.innerHTML = null;
  total.innerHTML = "Total: 0";
});

async function setOrders(arr) {
  await fetch("http://localhost:4080/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      array: arr,
    }),
  });
}
