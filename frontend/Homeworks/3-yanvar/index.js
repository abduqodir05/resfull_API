let users = {
  name: "AAA",
  password: "222"
}

const login = document.querySelector('.login')
const inputs = document.querySelectorAll('input')
const btn = document.querySelector('button')

btn.addEventListener('click',() => {
  const name_value =inputs[0].value
  const password_value = inputs[1].value

  if (!name_value) {
    alert("username ni kirgaz")
  } else if (!password_value ) { 
    alert('password ni kirgaz')
  }
  // const check = false
  if (users.name == name_value && users.password == password_value) {
    // check == true
    alert('succesfully')
  } else {
    alert('failed')
  }
})
  
  
