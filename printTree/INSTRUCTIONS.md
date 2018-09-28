# Print Tree Challenge
## From AltAssian

In your preferred language, write a function print_tree that takes in an integer height and a boolean hollow and prints a Christmas tree; example output is below.

You can assume height will be even, and is >= 4


`
 print_tree(10, false)
 --------X--------
 -------XXX-------
 ------XXXXX------
 -----XXXXXXX-----
 ----XXXXXXXXX----
 ---XXXXXXXXXXX---
 --XXXXXXXXXXXXX--
 -XXXXXXXXXXXXXXX-
 XXXXXXXXXXXXXXXXX
 --------X--------
`
`
print_tree(6)
 ----X----
 ---XXX---
 --XXXXX--
 -XXXXXXX-
 XXXXXXXXX
 ----X----
`

`
 print_tree(10, true)
 --------X--------
 -------X-X-------
 ------X---X------
 -----X-----X-----
 ----X-------X----
 ---X---------X---
 --X-----------X--
 -X-------------X-
 XXXXXXXXXXXXXXXXX
 --------X--------
`


```ruby
def print_tree(lines)
  width = 1
  curr_line = 1
  while curr_line < lines - 1 do
    width += 2
    curr_line += 1
  end

  xout = 0
  lines.times do
    startx = ((width - 1) / 2)
    printx = 0
    width.times do
      if printx >= startx - xout && printx <= startx + xout
        print('X')
      else
        print('-')
      end
      printx += 1
    end
    xout += 1
    print("\n")
  end
end
```