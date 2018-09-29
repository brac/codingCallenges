(function function_name(argument) {
  const inputA = [parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4])]
  const inputB = [parseInt(process.argv[5]), parseInt(process.argv[6]), parseInt(process.argv[7])]

  let scoreA = 0
  let scoreB = 0

  for (let i = 0; i < 3; i++) {
    if (inputA[i] > inputB[i]) {
      console.log(`${inputA[i]} > ${inputB[i]}`)
      scoreA++
    } else if (inputA[i] < inputB[i]) {
      console.log(`${inputA[i]} < ${inputB[i]}`)
      scoreB++
    } else if (inputA[i] === inputB[i]) {
      console.log('The same')
    }
  }

  console.log(scoreA, scoreB)
})()