const input = document.querySelector('input')
const allh = document.querySelectorAll('h3')
const reset = document.querySelector('.reset')
const equal = document.querySelector('.equal')

for (let i = 0; i < allh.length; i++){
  allh[i].addEventListener('click', ()=>{
      const toinput = allh[i].textContent
      input.value +=toinput
      if (input.value != 'DEL')
    input.value = input.value +allh[i]
  })
} 
