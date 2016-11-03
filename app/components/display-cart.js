import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    remove(rental) {
      this.get('shoppingCart').remove(rental);
    }
  }
});
