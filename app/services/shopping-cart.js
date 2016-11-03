import Ember from 'ember';

export default Ember.Service.extend({
  rentals: [],

  add(rental) {
    this.get('rentals').pushObject(rental);
  },
  remove(rental) {
    this.get('rentals').removeObject(rental);
  }
});
