/*
Create an app that will compute the score for a game of bowling.
*/
window.onload = function () {
  const scoreCards = document.querySelectorAll('.score-form')

  scoreCards.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      inputs = form.querySelectorAll('.score-input')

      inputs.forEach(input => {
        console.log(input.value)
      })

    })
  })
}