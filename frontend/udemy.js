const con_div = document.querySelector(".container");
const list = document.createElement('ul')
const list2 = document.createElement('ol')

for (let i = 0; i < 5; i++) {
 const li = document.createElement('li') 
 li.textContent = "SALOM"

 list.append(li)
}
con_div.append(list)



for (let i = 0; i < 5; i++) {
  const li = document.createElement('li') 
  li.textContent = "SALOM"
  
  list2.append(li)
}
  
  con_div.append(list2)