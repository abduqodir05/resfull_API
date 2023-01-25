async function getUsers() {
  let res = await fetch(
    "http://localhost:8080/users",
  }
  mehod: "POST", 
  Headers : {"content-type": "application/json"},
  body: JSON.stringify({
    id: 1,
    name: "Anvar",
    password: 1222
  })
}
  )
  
  console.log(await res);
  console.log(await res.json());
}
getUsers()