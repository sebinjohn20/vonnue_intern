 const scriptURL = 'https://script.google.com/macros/s/AKfycbwF1cgipXKC-bxZzXoNQ_2yaJGvuV9XU9xtDocdeGZuNj1wHxxdk_G3v3MCokpJclYjTQ/exec'
  const form = document.forms['submit-to-google-sheet']
 const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Thank You For Subscribing!"
        setTimeout(() => {
               msg.innerHTML=""
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })