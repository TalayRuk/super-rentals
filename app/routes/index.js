import Ember from 'ember';

//add hard-coded
// var rentals = [{
//   id: 1,
//   owner: "Veruca Salt",
//   city: "San Francisco",
//   type: "Estate",
//   bedrooms: 15,
//   image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
// }, {
//   id: 2,
//   owner: "Mike TV",
//   city: "Seattle",
//   type: "Condo",
//   bedrooms: 1,
//   image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
// }, {
//   id: 3,
//   owner: "Violet Beauregarde",
//   city: "Portland",
//   type: "Apartment",
//   bedrooms: 3,
//   image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
// }]; removed this section since we already put it in our rental.json to firebase

export default Ember.Route.extend({
  //add model hook
  model() {
    return Ember.RSVP.hash({ //add new model using Ember.RSVP.hash to display Multiple Model types in one Model HOOK
      rentals: this.store.findAll('rental'),
      //to return to the application
      //this.store mean firebase data store.
      //findAll() method w/ rental as argument
      reviews: this.store.findAll('review')
    });
      // both are promises. When Ember first loads your model hook, rentals and reviews are not instantly available. It has to reach out to Firebase and return them. This takes time. These statements are promises because they will not have completed when Ember first runs this code; it has to wait for these objects to return from Firebase.

//A promise can be in one of three states: Pending, fulfilled, or rejected. When the code is first run, the promise is in the pending state. From here, it will either become fulfilled or rejected depending on whether it has successfully completed its goal. This is called resolving the promise.

//Grouping multiple promises together in the RSVP.hash is beneficial because it merges multiple individual promises into one large promise. The RSVP.hash returns a new promise that is only fulfilled when all promises it contains are fulfilled.
//This prevents asynchronous timing issues in your application by prompting Ember to wait for all necessary objects before rendering your templates and components.
//more info about RSVP.hash: https://guides.emberjs.com/v2.3.0/routing/specifying-a-routes-model/#toc_multiple-models

  },
  //now we need to add delete actions we created it in rental-tile.hbs & .js & defined destroyRental(rental)
  actions: {
    saveRental3(params) {//params from new-rental.js to creat a new rental record in the store & then save it.
      var newRental = this.store.createRecord('rental', params);
      newRental.save();// createRecord & save() r ember build in method
      this.transitionTo('index');
      //Then transition back to index page & show new rental added to the list.
    },
    //Add save for review using Review params from new-review.js
    //Once review added to rental model & rental model added to review saveReview will B MOVED TO RENTAL.JS
    // saveReview(params) {
    //   var newReview = this.store.createRecord('review', params);
    //   newReview.save();
    //   this.transitionTo('index');
      //next we need to add a link to index.hbs to the new-review component
    }

//******MOVED TO App/Routes/RENTAL.JS
    // update(rental, params) {
    //   // use - this.store.update('update', rental, params) but since this is the update()='update'(this is the update() that came up from rental-tile.hbs from .js from update-rental.js)
    //   //ADD Debugger from chrome extension "Ember Inspector"
    //   debugger;
    //   //add update() code
    //   Object.keys(params).forEach(function(key) {
    //     //for each key in params,
    //     if(params[key]!==undefined) {
    //       //if it's not undefined
    //       rental.set(key,params[key]);
    //       //take the rental & set the property that matches the current key to the value of the current key,
    //     }
    //     //this assures that properties the user has updated will be changed accordingly, but properties the user has not updated will remain the same(instead of being redefined as undefined) B/c they didn't want to change those.
    //   });
    //   //after looping through all keys
    //   // save the rental,
    //   rental.save();
    //   //then transition to the index route. to reload index w/updated
    //   this.transitionTo('index');
    // },
    //
    // destroyRental(rental) {
    //   //When we clicked a rental's delete button, our action up from components(templates/components/rental-tile.hbs to rental-tile.js), through template (templates/index.hbs), & into the route handler(routes/index.js).
    //   rental.destroyRecord();
    //   //Then the route handler will access our data store (firebase) & delete the obj.
    //   //**destroyRecord() is already exist in Ember Method
    //   this.transitionTo('index');
    //   //To return to the templates/index.hbs page after a rental is deleted.
    // }
    //**************END OF SECTION MOVED TO RENTAL.JS***************
    //check out: http://emberjs.com/api/classes/Ember.Route.html Ember.Route Class ..methods, properties, events
  }
});
//your table names in Firebase will be a plural model name, and the model hooks in your routes will refer to the singular model name.
