/*
Given an input string, return an array of substrings that are each less than
  or equal to 140 characters, including a count of the string’s position out
  of total (like in a text message showing (1 of 3) messages the substring
  cannot break up any words so must be split on a space or delimiter
*/

(() => {
  const inputString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nobis nam perferendis sint beatae, dignissimos ab inventore adipisci. Odio placeat quisquam impedit esse, quia optio repudiandae voluptate odit nisi, perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatum nobis dicta dignissimos rerum accusantium, ad hic fugiat obcaecati magni iusto alias laudantium. Magni, labore, culpa. Provident nam consectetur blanditiis.'

  const createSubstrings = () => {
  let currentLetterIndex = 0
  let messages = []

    while(currentLetterIndex < inputString.length) {
      /* Use a counter for every 140 characters
         Then walk back the iterator until you find a space
         Slice the string and update the new iterator and break
         out of the while look used to find the space.
     */
      if (currentLetterIndex === 140) {
        let message = ''
        // while(inputString[currentLetterIndex] !== ' '){
          // currentLetterIndex--
          // message = inputString.slice(0, currentLetterIndex)
        // }
      }
      console.log(inputString[currentLetterIndex])
      currentLetterIndex++
    }
  }
  createSubstrings(inputString)
})()

/*
Output:
Message 1 of X: (0-137)
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nobis nam perferendis sint beatae, dignissimos ab inventore adipisci. Odio

Message 2 of X: (138-277)
  placeat quisquam impedit esse, quia optio repudiandae voluptate odit nisi, perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing

Message 3 of X: (278-412)
  elit. Sint, voluptatum nobis dicta dignissimos rerum accusantium, ad hic fugiat obcaecati magni iusto alias laudantium. Magni, labore,

Message $ of X: (412)
  culpa. Provident nam consectetur blanditiis.
*/