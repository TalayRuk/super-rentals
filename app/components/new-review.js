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
        rental: this.get('rental')//don't need to add this to new-review.hbs (b/c since there's a rental model in the review model and in rental.hbs we also add and access to current rental object at rental=model)
      };
      //now we have to set addNewReview to false again to hide
      this.set('addNewReview', false);
      this.sendAction('saveReview', params); //actions up to route handler = routes/index.js
      //when user enter the review this will save it to the firebase
    }
  }
});
//Once the review form is submitted, the action to save a new review will now be processed by the rental.js route instead of index.js
//Thus we need to include the actions section of the rental route handler to rental.js 
