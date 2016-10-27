import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(), //DS = data store from firebase
  rating: DS.attr(),
  content: DS.attr()
  rentals: DS.belongsTo('rental', { async: true}),
  //add rental attribute to the review model to refer of our rental objects.
});

//after add rental attribute. We'll modify rental.hbs so that when a review is added it'll be stored in a rental's reviews attribute and rental also will be stored in the review's rental attribute.
//we also need to change the review to be accessed from inside the specific rental instead of from the index.
//**Thus, we'll move {{new-review}} from index to rental.hbs
