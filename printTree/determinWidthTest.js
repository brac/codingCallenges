
function determineWidth(height) {
  let width = 1
  let currentLine = 1

  while(currentLine < height - 1){
    width += 2
    currentLine += 1
  }
  return width
}

function betterDeterminWidth(height){
  return ((height - 1) * 2) - 1
}


// for(let i=5; i < 20; i++){
//   console.log('determineWidth', determineWidth(i))
//   console.log('betterDeterminWidth', betterDeterminWidth(i))
// }

const good   = Array(20).fill().map((_, i) => determineWidth(i + 5))
const better = Array(20).fill().map((_, i) => betterDeterminWidth(i + 5))
console.log('good', good);
console.log('better', better);