(() => {
  const height = parseInt(process.argv[2])
  const hollow = (process.argv[3] == 'true')

  function print_tree(height, hollow) {
    if (height < 4) {
      return console.log('Tree must be larger than 4')
    }

    let width = 1
    let currentLine = 1

    while(currentLine < height - 1){
      width += 2
      currentLine += 1
    }

    let numXs = 1
    for (let i = 0; i < height; i++) {
      if (i + 1 == height) {
         console.log(genLine(width, (1)))
         break
      }

      console.log(genLine(width, (i + numXs)))

      // console.log(i + numXs)
      numXs++
    }
    // console.log(`Width is ${width}`)
  }

  function genLine(width, numX){
    let line = new Array(width + 1).join('-')
    return line
  }



  print_tree(height, hollow)
})()


