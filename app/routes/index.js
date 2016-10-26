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
    return this.store.findAll('rental');
    //to return to the application
    //this.store mean firebase data store.
    //findAll() method w/ rental as argument

  },
  //now we need to add delete actions we created it in rental-tile.hbs & .js & defined destroyRental(rental)
  actions: {
    saveRental3(params) {//params from new-rental.js to creat a new rental record in the store & then save it.
      var newRental = this.store.createRecord('rental', params);
      newRental.save();// createRecord & save() r ember build in method
      this.transitionTo('index');
      //Then transition back to index page & show new rental added to the list.
    },

    update(rental, params) {
      // use - this.store.update('update', rental, params) but since this is the update()='update'(this is the update() that came up from rental-tile.js)
      //ADD Debugger from chrome extension "Ember Inspector"
      debugger;
      save?
      this.transitionTo('index');
    },

    destroyRental(rental) {
      //When we clicked a rental's delete button, our action up from components(templates/components/rental-tile.hbs to rental-tile.js), through template (templates/index.hbs), & into the route handler(routes/index.js).
      rental.destroyRecord();
      //Then the route handler will access our data store (firebase) & delete the obj.
      //**destroyRecord() is already exist in Ember Method
      this.transitionTo('index');
      //To return to the templates/index.hbs page after a rental is deleted.
    }
    //check out: http://emberjs.com/api/classes/Ember.Route.html Ember.Route Class ..methods, properties, events
  }
});
//your table names in Firebase will be a plural model name, and the model hooks in your routes will refer to the singular model name.
