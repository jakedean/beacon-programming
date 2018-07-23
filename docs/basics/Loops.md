Loops allow you to repeat instructions over and over, without needing to write much code.

## Examples

### For-Loops
Lets imagine you have an app that has thousands of users. You might represent the list of all users as an array. "for-loops" are a useful construct for iterating over the values in an array.
```javascript
var users = [
  {first: 'Tony', last: 'Nardi', state: 'MA'},
  {first: 'Jake', last: 'Dean', state: 'MA'},
  {first: 'Randy', last: 'Treverson', state: 'CT'},
 ...
]
for (var index = 0; index < users.length; index = index + 1) {
  console.log(users[index])  // logs {first: 'Tony', last: 'Nardi', state: 'MA'} etc
}
```

Let's dissect the for-loop a bit.

1. The `var index = 0` is initialized first.
2. If `index < users.length` is `true`, then the body of the loop is executed.
3. After the body of the loop is executed, `index = index + 1` is executed.
4. `index < users.length` is checked again, and if true, we execute the body again and increment `index`

As you might notice, the loop will run for as many items there are in the list.

### While Loops
While loops are a similar construct to for loops. While loops are a more fitting tool for when you want to execute code until a particular condition is met.
```
var randyIsHungry = true;
while (randyIsHungry) {
  eatCheeseburger();
  randyIsHungry = isRandyHungry();
}
```
As you can see, Randy will keep eating cheeseburgers until he is full.

## Problems
1.
```javascript
// What is the highest number in the following array?
// [1,1,2,1.5,1.9,2.2,2.09,1.5,2.2,2.3,2.2,0,.99,.5,.02,.92,.2.20,2.11,1,1,1.22,1,9,.3,.5]
```
2.
```javascript
// How many iterations does it take to get to the number 10,000,000 if you only multiply `1.5` by itself?
```
3.
```javascript
// Loop over the numbers from 0 to 100 printing 'Even' for evens and 'Odd' for odds.
```
