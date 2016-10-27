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
      //then transition to the index route. to reload index w/updated
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
});
