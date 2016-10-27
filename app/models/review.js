import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(), //DS = data store from firebase
  rating: DS.attr(),
  content: DS.attr()
});
