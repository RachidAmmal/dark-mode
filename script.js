let inputEl = document.querySelector(".input")
let bodyEl = document.querySelector('body')

inputEl.checked = JSON.parse(localStorage.getItem('mode'))
updateBody()

function updateBody() {
   if (inputEl.checked) {
      bodyEl.style.backgroundColor = 'white'
   } else {
      bodyEl.style.backgroundColor = 'black'
   }
}
inputEl.addEventListener('input', () => {
   updateBody()
   updateLocalStorage()
})

function updateLocalStorage() {
   localStorage.setItem('mode', JSON.stringify(inputEl.checked))
}