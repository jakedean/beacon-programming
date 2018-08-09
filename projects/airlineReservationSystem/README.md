### The Project

- Implement an airline reservation system where we have flights that have origin/destination cities on
  certain dates.  Each flight should have a set number of first class and economy class seats.
- There should be a base price for each seat (economy and first class will have different prices)
  and there should be a multiplier (10% off) if you order the tickets 2 months prior and another
  multiplier if you order the tickets 4 months prior (20% off).
- When someone tries to buy a ticket then you should check if you have any available for that
  origin/destination and that date, and then if there are any available tell them how much it will cost.
- We can have classes for ReservationSystem, Flight, Customer where we can init a reservation system
  with flights, and then have a customer set max amounts they are willing to pay.
- ReservationSystem - Should maintain a list of flights that we currently have, as people buy
  tickets we should be updating the system to record how many seats are left.
- Flight - The flight class should hold the origin, destination, info on first class/economy
  number of seats and price of seat and the date of the flight.
- Customer - Should hold information on what the max price the customer is willing to pay, the
  origin/ destination cities, the date the customer is looking to fly, the date the customer
  is making the purchase, and the number of tickes the customer is looking to purchase.

Your system should be able to function as follows:

```javascript
// First we will just set up our 3 flights to be put into our flight system...
// Flight constructor looks like this:
// Flight(origin, destination, firstClass, economy, departureDate);
var firstClassInfo = {'numberSeats': 2, 'basePrice': 100};
var economyClassInfo = {'numberSeats': 4, 'basePrice': 50};
var bostonToMiamiFlight = new Flight('boston', 'miami', firstClassInfo, economyClassInfo, '2018-10-30');

var firstClassInfo = {'numberSeats': 2, 'basePrice': 300};
var economyClassInfo = {'numberSeats': 4, 'basePrice': 150};
var nycToLaFlight = new Flight('nyc', 'la', firstClassInfo, economyClassInfo, '2018-10-28');

var firstClassInfo = {'numberSeats': 2, 'basePrice': 150};
var economyClassInfo = {'numberSeats': 4, 'basePrice': 100};
var denverToSeattleFlight = new Flight('denver', 'seattle', firstClassInfo, economyClassInfo, '2018-10-29');

// Now create our reservation system and init it with the flights that we have.
var reservationSystem = new ReservationSystem([bostonToMiamiFlight, nycToLaFlight, denverToSeattleFlight]);

// Now we have to create our customers and set the info on when each customer wants to buy the flight,
// where they are going to / from, how much they are willing to pay and how many tickets they would like
// and whether or not they would like first class.
// The Customer constructor looks like this:
// Customer(origin, destination, dateOfPurchase, departureDate, maxPrice, numTickets, isFirstClass)
var jake = new Customer('denver', 'seattle', '2018-07-15', '2018-10-29', 75, 2, false);
var matt = new Customer('denver', 'seattle', '2018-08-15', '2018-10-29', 75, 6, false);
var tony = new Customer('boston', 'miami', '2018-10-15', '2018-10-30', 150, 1, true);
var kathrine = new Customer('nyc', 'la', '2018-04-10', '2018-10-28', 100, 2, false);
var amy = new Customer('boston', 'san diego', '2018-07-28', 300, 4, true);

// Now we will start to see if our reservation system can help our customers purchase their flights

// should print out "Booked: 2 tickets from: denver to: seattle on: 2018-10-29 base price: 50
// discount: 10% final per ticket price: 45 total price: 90."
reservationSystem.makePurchase(jake);

// At this point there are only 2 economy class tickets left so matt's purchase should not go through!
// Should print out: "Could not book: 6 tickets from: denver to: seattle only: 2 tickets left in: economy"
reservationSystem.makePurchase(matt);

// We should allow tony to book because there should be enough tickets and his price is high enough but he
// should not get a discount becuase is a last minute shopper.
// should print out "Booked: 1 tickets from: boston to: miami on: 2018-10-30 base price: 100
// discount: 0% final per ticket price: 100 total price: 100."
reservationSystem.makePurchase(tony);

// We should not allow Kathrine to book because she is not willing to pay more than 100 for her tickets
// and even though she is booking more than 4 months before and gets 20% off she is still not willing to pay
// as much as we want so reject the purchase.
// We should print out "Count not book: 2 tickets from: nyc to: la ticket price was 120 and customer max
// price was 100"
reservationSystem.makePurchase(kathrine);

// We should not allow Amy to book a flight because we don't have a flight from boston to san diego in
// our system on 2018-07-28, we shold print:
// "Could not book: 4 tickets from: boston to: san diego, flight does not exist!"
reservationSystem.makePurchase(amy);
```