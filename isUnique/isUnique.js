(function () {
  const isThisUnique = process.argv[2]
  let alphebet = {
    'a': false,
    'b': false,
    'c': false,
    'd': false,
    'e': false,
    'f': false,
    'g': false,
    'h': false,
    'i': false,
    'j': false,
    'k': false,
    'l': false,
    'm': false,
    'n': false,
    'o': false,
    'p': false,
    'q': false,
    'r': false,
    's': false,
    't': false,
    'u': false,
    'v': false,
    'w': false,
    'x': false,
    'y': false,
    'z': false,
  }

  let itIsUnique = true
  let letters = isThisUnique.split('')

  loop:
  while( itIsUnique ) {
    for (let i = 0; i < letters.length; i++) {
      if (!alphebet[letters[i]]) {
        alphebet[letters[i]] = true
      } else if (alphebet[letters[i]]) {
        console.log('It is NOT unique!')
        break loop
      }
    }
    console.log('It is unique!')
    itIsUnique = false
  }
})()