/*
Create an app that will compute the score for a game of bowling.
*/
window.onload = function () {
  const scoreCards = document.querySelectorAll('.score-form')

  scoreCards.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let total = 0

      inputs = form.querySelectorAll('.score-input')
      inputs.forEach(input => {
        total += parseInt(input.value)
      })

      output = form.nextSibling.nextSibling
      console.log(output)
      output.innerHTML = total
    })
  })
}