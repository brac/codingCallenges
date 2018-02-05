# Create an abstract Shape class with a method getArea that others will inherit from

class Shape
  def getArea
    raise "define method"
  end
end

# Make a Cirlce class that inherits from Shape and define getArea for it
# Interviewer asked me to make it more OO by using an initializer

class Circle < Shape
  def initialize(radius)
    @radius = radius
  end
  def getArea
    Math::PI * (@radius*@radius)
  end
end

# Define a Square class that has a draw() method that accepts x,y and 
# an object that will be used to draw the shape. This object will be passed
# in when running the code

def draw x, y, imageMagick
  imageMagick.drawSquare(x,y)
end

# ??? not sure how this one was supposed to go *shrugs*
