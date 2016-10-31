import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  cost: DS.attr(),
  //add review model to rental model as ONE to MANY(reviews) relationship
  reviews: DS.hasMany('review', { async: true})
  //{asyn: true} property = if the related model data isn't already loaded, an additional request should be made to Firebase in order to retrieve it.
  //next add rental attribute to review model using belongsTo keyword in review model
});
