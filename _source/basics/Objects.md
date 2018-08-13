{% include navigation.html %}

Objects are a way to store keys and values.  You might want to do this if you have a concept to model in your code.
Imagine you have a concept of a product that you are selling on your online ecommerce store.  Each product will have
the same attributes, they will have a product name, product sku and a product price.  Here is how that might look:

```javascript
var chair = {name: 'Office Chair', sku: '123abc', price: 100.00};
var table = {name: 'Kitchen Table', sku: '456ebc', price: 550.99};

// now we can access properties on these javascript objects through the name.
// Note that with arrays we access values through indexes -> ['j', 'a', 'k', 'e'][0] gives us 'j'
// BUT with objects we can access values through names.
console.log(chair.name);   // Prints 'Office Chair'
console.log(table.price);  // Prints 550.99
console.log(table.weight); // Prints 'undefined'
```

The values of an object can be of any type (string, number, object, etc).
here are some examples of objects:
```javascript
var house = {
    'location': 'Boston, MA',  // Value is a simple string
    'zipCode': 02135,  // Value is an integer
    'accessableTrainLInes': ['Green', 'Red', 'Orange'],  // Value is an array of strings
    'accessableRestaurants': [{'name': 'Publick House'}, {'name': 'The Abbey'}]  // Value is an array of objects
}
```

You can add new properties to a object once it has been created:
```javascript
var user = {userName: 'jdean'};
user.emailAddress = 'jdean@yahoo.com';
user.country = 'USA';

// Prints {'userName': 'jdean', 'emailAddress': 'jdean@yahoo.com', 'country': 'USA'}
console.log(user);
```

#### Objects Problems
1.
```javascript
// in code create an object that has keys that are TShirt sizes S,M,L whose values are arrays of objects where
// each of those objects represent people that have a first name and last name
```
2.
```javascript
// Create an object to model a blog, where a blog has many entries, an entry has a name, a date and comments.
// each comment on an entry has an author and the comment content.
// Create this object and loop through each block entry and print the info to the console.
```