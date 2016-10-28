import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    },
    //add delete review
    delete(review) {
      this.sendAction('destroyReview', review);
      //next: add code for delete in --templates/rental.hbs 
    }
  }
});

//add delete() action of rental-detail component, and remove it from the rental-tile component.
//we'll need to pass the action through the template in order to reach route handler by declaring destroyRental
