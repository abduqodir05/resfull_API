const company = {
  name: "hilola",
  Address: "singapur",
  contacts: {
    phone: "+ 312 90940 123 ",
    email: "sakanaki.gmail.com",
  },
};

console.log(company.Address);
console.log(company["name"]);
console.log(company["contacts"].email);
console.log(company.contacts.phone);
