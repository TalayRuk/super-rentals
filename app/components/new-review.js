import Ember from 'ember';

export default Ember.Component.extend({
  //if addNewReview is false
  addNewReview: false,

  actions: {
    //set.addNewReview is true, tell form to show
    showReviewForm(){
      this.set('addNewReview', true);
    },
    //'saveReview' model.reviews.Save() by set up variable
    saveReview() {
      var params = {//add properties
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content')
      };
      //now we have to set addNewReview to false again to hide
      this.set('addNewReview', false);
      this.sendAction('saveReview', params); //actions up to route handler = routes/index.js
    }
  }
});
