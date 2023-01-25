const about = {
  name: "Abduqodir",
  password: 1111,
  address: {
    state: "Uzbekistan",
    region: "Tashkent",
    street: "Olmazor",
  },
};
const inputs = document.querySelectorAll("input");
const login = document.querySelector(".login");
const btn = document.querySelector("button");
const loginContainer = document.querySelector(".login");  

btn.addEventListener("click", () => {
  const name_value = inputs[0].value;
  console.log(
    "🚀 ~ file: app.js:17 ~ btn.addEventListener ~ name_value",
    name_value
  );
  const password_value = inputs[1].value;
  console.log(
    "🚀 ~ file: app.js:19 ~ btn.addEventListener ~ password_value",
    password_value
  );

  if (!name_value) {
    alert("Username kirgaz");
  } else if (!password_value) {
    alert("passwordni kirgaz");
  }
  if (about.name == name_value && about.password == password_value) {
    console.log("🚀 ~ file: app.js:32 ~ btn.addEventListener ~ about", about);
    console.log(
      "🚀 ~ file: app.js:40 ~ btn.addEventListener ~ loginContainer",
      loginContainer
    );
    loginContainer.innerHTML = `<div><p>${about.address.state}</p> <p>${about.address.region}</p> <p>${about.address.street}</p></div>`;
    // alert(about.address.region + about.address.state + about.address.street);
  } else {
    alert("failed");
  }
});
