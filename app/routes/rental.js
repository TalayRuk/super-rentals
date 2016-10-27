import Ember from 'ember';
//Finding Records w/Dynamic Segment Info (in this case rental_id)
//The rental route handler will then use the params.rental_id in the model hook to locate the single rental record we've requested:
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
    //findRecord() using id which takes 2 arguments; 1) the type of object('rental') 2) the object's specific id(params.rental_id)
    //After specified rental, the route will render the rental template/rental.hbs

  },
  actions: {//moved from index.js
    update(rental, params) {
      // use - this.store.update('update', rental, params) but since this is the update()='update'(this is the update() that came up from rental-tile.hbs from .js from update-rental.js)
      //ADD Debugger from chrome extension "Ember Inspector"
      debugger;
      //add update() code
      Object.keys(params).forEach(function(key) {
        //for each key in params,
        if(params[key]!==undefined) {
          //if it's not undefined
          rental.set(key,params[key]);
          //take the rental & set the property that matches the current key to the value of the current key,
        }
        //this assures that properties the user has updated will be changed accordingly, but properties the user has not updated will remain the same(instead of being redefined as undefined) B/c they didn't want to change those.
      });
      //after looping through all keys
      // save the rental,
      rental.save();
      //Once update is done on the rental page then transition to the index route. to reload index w/updated
      this.transitionTo('index');

    },
    destroyRental(rental) {
      //When we clicked a rental's delete button, our action up from components(templates/components/rental-tile.hbs to rental-tile.js), through template (templates/index.hbs), & into the route handler(routes/index.js).
      rental.destroyRecord();
      //Then the route handler will access our data store (firebase) & delete the obj.
      //**destroyRecord() is already exist in Ember Method
      this.transitionTo('index');
      //To return to the templates/index.hbs page after a rental is deleted.
    },

    saveReview(params) {
      //When we save a new child record (review) to a parent record (rental), we must save both sides of the relationship.
      var newReview = this.store.createRecord('review', params)
      var rental = params.rental;
      //we first identify the new review object and the rental it will belong to.
      rental.get('reviews').addObject(newReview);
      //we add the new review to the reviews attribute of our current rental using the .addObject(); method.
      newReview.save().then(function() {
        return rental.save();
        //we save the new review and specify to only save the rental after the review has been successfully saved by using .then();.
        //By using .then() we're forcing Ember to wait until newReview is successfully saved before saving rental.
      });
      this.transitionTo('rental', rental);
      //displaying details for "rental"
      //Next go to rental-detail.hbs to add display for a rental's reviews
    }
//In plain ENGLISH for saveReview
//Create a new review with the information from our parameters, save it to the database, and call it "newReview".
// Refer to the rental in those parameters as "rental".
// Retrieve the list of reviews located in "rental", and add "newReview" to that list.
// Save "newReview", so it remembers what rental it belongs in.
// Wait until "newReview" has finished saving, then save "rental" too, so it remembers it contains "newReview".
// Afterwards, take us to the page displaying details for "rental".


//the role of JavaScript promises in an RSVP.hash? Logic in Ember routes is asynchronous, meaning Ember will not wait for one line to successfully complete or return a value before running the next line of code. Since our data is stored remotely in Firebase it takes a few extra moments for our application to save a new object. However, we don't want to run rental.save(); until newReview is successfully saved, or we risk our rental containing details for a review that doesn't actually exist. By using .then(), we're forcing Ember to wait until newReview is successfully saved before saving rental. For more information, check out Ember's documentation on asynchronous routing.
//https://guides.emberjs.com/v2.3.0/routing/asynchronous-routing/
  }

});
