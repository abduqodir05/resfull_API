const button1 = document.querySelector(".button1");
const contactFormContainer = document.querySelector(".input_bottom");
const contactsTable = document.querySelector(".table tbody");
let count = 0;

button1.addEventListener("click", () => {
  const name1 = document.querySelector(".name1");
  const password1 = document.querySelector(".password1");

  if (!name1.value) {
  alert("please enter login name");
    return;
  } else if (!password1.value) {
    alert("please enter password");
    return;
  }

  let user = {
    login: name1.value,
    password: password1.value,
  };

  getLoginAccess(user);
});

async function getLoginAccess(obj) {
  let response = await fetch("http://localhost:8080/login", {
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

    renderAddContactForm(query);
    renderContacts(query);
  }
}

async function renderAddContactForm(query) {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const input_name = document.createElement("input");
  input_name.type = "text";
  input_name.placeholder = "username";
  input_name.classList.add("name2");
  const input_phone = document.createElement("input");
  input_phone.type = "text";
  input_phone.classList.add = "password2";
  input_phone.placeholder = "phone_number";
  const button2 = document.createElement("button");

  h1.textContent = "Add contact";
  p.textContent = "please enter your info";
  button2.textContent = "submit";

  contactFormContainer.append(h1);
  contactFormContainer.append(p);
  contactFormContainer.append(input_name);
  contactFormContainer.append(input_phone);
  contactFormContainer.append(button2);

  button2.addEventListener("click", async () => {
    let object = {
      id: query.id,
      name: input_name.value,
      phone: input_phone.value,
    };

    debugger;
    let addContact = await fetch("http://localhost:8080/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });

    let new_contact = await addContact.json();

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${count + 1}</td>
      <td>${new_contact.name}</td>
      <td>${new_contact.phone}</td>`;

    contactsTable.append(tr);
    count++;
  });
}
async function renderContacts(query) {
  let loginResponse = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(query),
  });

  let contacts = await loginResponse.json();

  count = contacts.length;

  for (let i = 0; i < contacts.length; i++) {
    const el = contacts[i];
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${i + 1}</td> 
    <td>${el.name}</td>
    <td>${el.phone}</td>`;

    contactsTable.append(tr);
  }
}
