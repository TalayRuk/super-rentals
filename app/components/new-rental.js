import Ember from 'ember';

export default Ember.Component.extend({
  //set addNewRental as false, then add actions when click to show form
  addNewRental: false,
  actions: {
    //when btn is clicked, action rentalFormShow() set addNewRental value to true to show form.
    rentalFormShow() {
      this.set('addNewRental', true);
    }
    //Like hide/show image. We'll toggle what's displayed using addNewRental property. 
  }
});
