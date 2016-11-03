import Ember from 'ember';

export default Ember.Component.extend({
  //set addNewRental as false, then add actions when click to show form
  addNewRental: false,
  actions: {
    //when btn is clicked, action rentalFormShow() set addNewRental value to true to show form.
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    //Like hide/show image. We'll toggle what's displayed using addNewRental property.

    //add Save function
    saveRental1() {
      //create variable
      var params = {
        //like parameter to getter in Csharp to get info
        owner: this.get('owner'),
        type: this.get('type'),
        city: this.get('city'),
        bedrooms: this.get('bedrooms'),
        image: this.get('image'),
        cost:this.get('cost'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude')
        //When the field is not populated, its value will be undefined
        //**** undefined is not a valid JSON type. It'll prevent the record from being written to Firebase & cause an error.
        //For field that might be leave blank or undefined should add a conditional that sets them to "" or null;
        //example; this.get('owner'): "",
      };
      this.set('addNewRental', false);
      //after each field's value is collected, the form is hidden again)
      this.sendAction('saveRental2', params);
      //params in also build in Ember
    }

  }
});
//saveRental1 = the action that collects & save data from input in form at new-rental.hbs
//saveRental2 = a path that send the action up to route handler route/index.js

//**** saveRental1 collects data & sets them as values in a hash of keys w/ the same names.
//this.get('owner') collects the value entered in the owner input field & assigns it to the variable key owner
