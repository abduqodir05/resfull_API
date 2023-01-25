const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  let inputs_value = {};
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert("fill the inputs");
      return;
    } else {
      if (i == 0) {
        inputs_value.name = inputs[0].value;
      } else if (i == 1) {
        inputs_value.last_name = inputs[1].value;
      } else if (i == 2) {
        inputs_value.age = inputs[2].value;
      } else if (i == 3) {
        inputs_value.password = inputs[3].value;
      }
    }
  }
  postData(inputs_value);
});

async function postData(newUser) {
  const rawResponse = await fetch("http://localhost:8080/register",{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const content = await rawResponse.json();

  if (content.Error) {
    alert(content.Error);
    return;
  } else {
    alert("you have been registered");
    return;
  }
}
