import Ember from 'ember';

export default Ember.Component.extend({
  //add delete review action here
  actions: {
    delete(review) {
      if (confirm('Are you sure you want to delete this review?')) {
        this.sendAction('destroyReview' review);
      }
    }
  }
});
//next need to also add destroyReview action in rental-detail.hbs component to pass it up to the route handler (in this case = routes/rental.js)
