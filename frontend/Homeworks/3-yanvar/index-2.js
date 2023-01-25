const con_div = document.querySelector(".container");
const h1 = document.querySelector('h1');
let array = ['Muhammad','Obidjon','Murod','javohir']

for (let i = 0; i < array.length; i++ ) {
  const h1 = document.createElement(h1)
  h1.textContent += array[i]

  con_div.append(h1)
}

