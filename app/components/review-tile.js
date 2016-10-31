import Ember from 'ember';

export default Ember.Component.extend({
  //add computed property = new property called "heading" to combined both author & rating into single property w/o updating the database/
  rator: Ember.computed('review.author', 'review.rating', function() {
    return this.get('review.author') + ' - ' + this.get('review.rating');
  }),

  //add delete review action here
  actions: {
    delete(review) {
      if (confirm('Are you sure you want to delete this review?')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});
//next need to also add destroyReview action in rental-detail.hbs component to pass it up to the route handler (in this case = routes/rental.js)
