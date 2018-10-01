(function(){
  const input = {
    string1: process.argv[2].split('').sort(),
    string2: process.argv[3].split('').sort(),
  }

  let calculating = true

  const checkPermutation = (strings) =>{
    loop:
    while (calculating) {
      if (strings.string1.length != strings.string2.length ) {
        console.log('Not a permutation!')
        break
      }
      for(let i = 0; i < strings.string1.length; i++){
        if (strings.string1[i] != strings.string2[i]) {
          console.log('Not a permutation!')
          break loop
        }
      }
      console.log('It is a permutation!')
      break
    }
  }
  checkPermutation(input)
})()

