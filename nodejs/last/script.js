const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const name = document.querySelector(".name");
  const password = document.querySelector(".password");

  if (!name.value) {
    alert("Please enter login name");
    return;
  } else if (!password.value) {
    alert("Please enter password");
    return;
  }

  let sss = {
    login: name.value,
    password: password.value,
  };
  getLoginAccess(sss);
});

async function getLoginAccess(obj) {
  let response = await fetch("http://localhost:4000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  response = await response.json();

  if (!response.access) {
    alert(response.error);
    return;
  } else if (response.access) {
    let query = {
      id: response.id,
    };
    renderCars(query);
  }
}

async function renderCars(query) {
  let car_response = await fetch("http://localhost:4000/cars", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  });
  car_response = await car_response.json();

  // const cars = car_response.cars;

  const ul = document.querySelector("ul");
  ul.innerHTML = null;
  for (let el of car_response) {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${el.title}</h3>
        <h4>${el.price}</h4>`;

    // const h3 = document.createElement("h3")
    // const h4 = document.createElement("h4")

    // h3.textContent = el.title
    // h4.textContent = el.price

    // li.append(h3, h4)

    ul.append(li);
  }
} 
