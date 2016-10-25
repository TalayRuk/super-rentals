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
// }];

export default Ember.Route.extend({
  //add model hook
  model() {
    return this.store.findAll('rental');
    //to return to the application
    //this.store mean firebase data store.
    //findAll() method w/ rental as argument
  },
});
//your table names in Firebase will be a plural model name, and the model hooks in your routes will refer to the singular model name.
