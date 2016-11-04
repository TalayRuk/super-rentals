import Ember from 'ember';

const {
  Component,
  inject,
  computed,
  computed: { alias, mapBy, sum},
} = Ember;

export default Component.extend({
  shoppingCart: inject.service(),


  rentals: alias('shoppingCart.rentals'),

  //to get array of each rental's cost in shopping cart
  rentalPriceArray: mapBy('rentals', 'cost'),
  //itemCosts created an array of costs -only by mapping the items costs. If I use "rentals instead of shoppingCart.rentals w/o using the alias above, rentals or (even rental from .hbs will be undefined or not found)
//   totalRentalPrice: sum('rentalPriceArray')

  //To get all the rentals' cost in the shopping cart to sum up
  totalRentalPrice: sum('rentalPriceArray')


//LONG WAY OF SUM
  // totalOfRentalPrice: computed('rentals.@each.cost', {//this mean for every rental watch thisspecific property auto update each cost when it's got update individually .. if it's not in data if it's in the array like testIncomes: [500, 600, 700] instead of using model.cost .. need to specify that it's an array 'testIncomes.[]'!***
  //   get() {
  //     let rentals = get(this, 'rentals');
  //     let costs = rentals.mapBy('cost');
  //     return costs.reduce((previous, current) => {
  //     //reduce pass it in the callback function that keep calling & keep passing until it's gone through every item in the array starting from 0 ..similar to for loop
  //     //previou value & current value
  //       return parseInt(previous) + parseInt(current);
  //     }, 0);//start at index 0
  //   }
  // })



  // actions: {
  //   remove(rental) {
  //     this.get('shoppingCart').remove(rental);
  //   }



  // }
});
