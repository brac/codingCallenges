const height = parseInt(process.argv[2])
const hollow = (process.argv[3])

function print_tree(height, hollow) {
  if (height < 4 ) {
    console.warn('Tree must be larger than 4')
    process.exit(1)
  }
  const width = ((height - 1) * 2) - 1

  for (let i = 0; i < height; i++) {
    const lastLine = i + 1 === height
    const numberOfXes = lastLine ? 1 : i + i + 1
    console.log(genLine(width, numberOfXes))
  }
}

function genLine(width, numXs){
  const leftOffset = Math.floor((width - numXs)/2)
  const rightOffset = numXs + leftOffset

  if (width === numXs) return Array(width).fill('X').join('')

  return Array(width).fill().map((_, cellIndex) =>
    cellIndex < leftOffset ||
    (hollow && cellIndex > leftOffset && cellIndex < rightOffset - 1 ) ||
    cellIndex >= rightOffset ? '-' : 'X'
  ).join('')
}

print_tree(height, hollow)
