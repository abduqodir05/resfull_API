const condiv = document.getElementById(".container");
const input = document.querySelector(".input");
const btn = document.querySelector(".button");
const p = document.createElement("p");
p.textContent = "What is your name?";
p.style.marginLeft = "10px";
p.style.fontSize = "30px";
condiv.append(p);

input.style.borderWidth = "1px";
input.style.borderStyle = "solid";
input.style.borderColor = "black";
input.style.borderRadius = "5px";
input.style.height = "40px";
input.style.width = "350px";
input.minLength = "3";
condiv.append(input);

btn.style.height = "40px";
btn.style.width = "100px";
btn.textContent = "Submit";
btn.style.marginLeft = "10px";
alert = "Welcome to the site John";
condiv.append(btn);

btn.addEventListener("click", () => {
  const name = input.value;

  if (name.length > 3) {
    container.innerHTML = null;
    const welcome = document.createElement("h1");
    welcome.textContent = "Welcome to the site John";
    container.append(welcome);
  } else {
    text = "Name length must be 3+ characters";
    input.style.borderColor = "red";
  }
});