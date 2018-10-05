(() => {
  const height = parseInt(process.argv[2])
  const hollow = (process.argv[3])

  function print_tree(height, hollow) {
    if (height < 4) {
      return console.log('Tree must be larger than 4')
    }
    const width = determineWidth(height)
    let numXs = 1

    for (let i = 0; i < height; i++) {
      if (i + 1 == height) {
        numXs = 1
        break
      }
      console.log(genLine(width, i + numXs))
      numXs++
    }
      console.log(genLine(width, numXs))
  }

  function genLine(width, numXs){
    let line = new Array(width + 1).fill('-')

    line.splice(Math.floor(width/2) - (numXs - 1)/2, numXs + 1, 'X'.repeat(numXs))

    if (hollow == 'true' && numXs >= 3 && numXs !== width) {
      let hollowSection = line[Math.floor(line.length/2)].split('')

      hollowSection.splice(Math.floor(hollowSection.length/2), 0, '-'.repeat(numXs - 2))


      hollowSection = hollowSection.join('')
      line[Math.floor(line.length/2)] = hollowSection
      // line[Math.floor(line.length/2)] = hollowSection.join()
    }

    line = line.join('')
    return line
  }



  function determineWidth(height) {
    let width = 1
    let currentLine = 1

    while(currentLine < height - 1){
      width += 2
      currentLine += 1
    }
    return width
  }

  print_tree(height, hollow)
})()


