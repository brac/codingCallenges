const h1 = process.argv[2]
const h2 = process.argv[3]

function print_tree(height, hollow) {
  for (let i = 0; i < height; i++) {
    console.log('X')
  }
}

print_tree(h1, h2)