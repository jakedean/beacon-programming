Classes offer a way to model concepts in code.  Imagine we had an ecommerce website where we often had to
display information about products.  We might have a class called Product like this:

```javascript
class Product {
  // When we create a new Product we will always set a name, sku and price for the product.
  constructor (name, sku, price) {
    this.name = name;
    this.sku = sku;
    this.price = price;
  }

  // Function to format the full product info
  getFullInfo() {
    return "Product Name: " + this.name + ", SKU: " + this.sku + ", Price: " + this.price;
  }
}
```

If we wanted to define a few products on our site we could do it like this:

```javascript
var chair = new Product('Office Chair', '123ABC', 99.99);
var sofa = new Product('Brown Sofa', '147BCD', 800.00);

// Will print out "Product Name: Office Chair, SKU: 123ABC, Price: 99.99"
console.log(chair.getFullInfo());
// Will print out "Product Name: Brown Sofa, SKU: 147BCD, Price: 800.00"
console.log(sofa.getFullInfo());
```

We can also have what are known as base classes that we can extend.  In our example we might have a
base class called Product and child classes called Chair that will have things in common with all products
but will have some chair specific characteristics.

```javascript
class Product {
  constructor(name, sku, price) {
    this.name = name;
    this.sku = sku;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getSku() {
    return this.sku;
  }

  getPrice() {
    return this.price;
  }
}

class Chair extends Product {
  constructor(name, sku, price, seatMaterial, backMaterial) {
    // Make a call to the constructor on the product class...
    super(name, sku, price);
    this.seatMaterial = seatMaterial;
    this.backMaterial = backMaterial;
  }

  getBackMaterial() {
    return this.backMaterial;
  }

  getSeatMaterial() {
    return this.seatMaterial;
  }
}
```

Now we have access to the functions on Product becuase Chair extends Product, so here is what we can do.

```javascript
var chair = new Chair('Office Chair', 'abc123', 100, 'leather', 'wood');

// Prints 'Office Chair', the getName function on the Product class is called.
console.log(chiar.getName());

// Prints 'leather' the getSeatMaterial function is called on the Chair class.
console.log(chair.getSeatMaterial());
```

#### Class Problems
1.
```javascript
// Create a class called Car that accepts brand and year in the constructor.
// Add the method called describe car that will print out "I am a 2010 Chevy Cruze" if we
// passed 'Chevy Cruze' and 2010 to the constructor.
```
2.
```javascript
// Create another class called Vehicle and make Car extend Vehicle.  Move the brand and year attributes
// to the Vehicle class and have Car accept milesPerGallon in the constructor instead.
// Create a class called Bicycle that extends Vehicle and pass the number of gears the bike has
// to the constructor.
```