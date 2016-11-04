import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  items:[],
  rentalPriceArray: Ember.computed.mapBy('items', 'cost')
  //itemCosts created an array of costs -only by mapping the items costs.
  totalRentalPrice: Ember.computed.sum('rentalPriceArray')


  // actions: {
  //   remove(rental) {
  //     this.get('shoppingCart').remove(rental);
  //   }



  // }
});
