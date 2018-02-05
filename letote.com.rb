# write a simple flatten method that will flatten the given array

def flatten(array)
  flat = []
    array.each do |elem|
      if elem.is_a?(Array)
        flat = flat + flatten(elem)
      else
        flat << elem
      end
    end
  flat
end

p flatten(["a",1,[3,4]])
puts flatten(["a",1,[3,4]]) == ["a",1,3,4]
puts flatten([[],1,[[2]],[[3,[4]]],[5]]) == [1,2,3,4,5]
