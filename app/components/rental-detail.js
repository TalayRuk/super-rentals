import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    },
    //add delete review
    destroyReview(review) {
      this.sendAction('destroyReview', review);
      //next: add code for destroyReview in  templates/rental.hbs at rental-detail right after destroyRental!
    }
  }
});

//add delete() action of rental-detail component, and remove it from the rental-tile component.
//we'll need to pass the action through the template in order to reach route handler by declaring destroyRental
