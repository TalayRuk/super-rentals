import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false, //set this to false so we can see update button to show form
  actions: {
    //once update button is clicked; updateRentalForm is True, Form will show
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental) {//set update action receives the rental as an argument.
    //set variable params to retrieve information from the form, & pkg it in a params hash.
      var params = {
        owner: this.get('owner'),
        type: this.get('type'),
        city: this.get('city'),
        bedrooms: this.get('bedrooms'),
        image: this.get('image'),
      };
      //when the Save button clicked (Once the params r gathered, we hide the form by setting the updateRentalForm property back to false)
      this.set('updateRentalForm', false);
      //when 'update' btn clicked send Update action (update() & including rental argument & params variable data up one level b/c update-rental is nested w/in rental-tile) up to rental-tile.hbs then rental-tile will send to  route handler (in this case index.js)
      this.sendAction('update', rental, params);
    }
    //  rental-tile.hbs is a parent component of update-rental.hbs & js. Once rental-tile receives action from update-rental.js, it'll pass the action upward in order for this action to eventually reach the appropriate route. Thus, rental-tile.js will need to have update action as well in order to be able to send the action up to the route handler.
  }
});

//****It's important that the variable names we assign these values match the rental model’s attribute names (ie: owner, city, type, image, and bedrooms; the same attributes we defined on our model in models/rental.js). If they do not, we will receive errors when assigning these new values to our rental object.
