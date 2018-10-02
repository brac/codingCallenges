/*
  Calculate and print the sum of the elements in an array, keeping in mind
  that some of those integers may be quite large.

input:
5
1000000001 1000000002 1000000003 1000000004 1000000005

output:
5000000015
*/

(() => {
  const numIntegers = parseInt(process.argv[2])
  let bigSum        = 0

  for (let i = 3; i <= numIntegers + 2 ; i++) {
    bigSum += parseInt(process.argv[i])
  }
  console.log(bigSum)
})()
