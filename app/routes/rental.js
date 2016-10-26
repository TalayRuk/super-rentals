import Ember from 'ember';
//Finding Records w/Dynamic Segment Info (in this case rental_id)
//The rental route handler will then use the params.rental_id in the model hook to locate the single rental record we've requested:
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
    //findRecord() using id which takes 2 arguments; 1) the type of object('rental') 2) the object's specific id(params.rental_id)
    //After specified rental, the route will render the rental template/rental.hbs
  },
});
