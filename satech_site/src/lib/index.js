// place files you want to import through the `$lib` alias in this folder.


const scriptURL = 'https://script.google.com/macros/s/AKfycbxqLzXrOjvxlM2Y-boJjLZ_RRuJbCIiuexPxSpRJqpnLExg9Ko01vqabNXguo2xhVPVgg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})