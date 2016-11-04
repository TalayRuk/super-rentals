import Ember from 'ember';

export default Ember.Component.extend({
  fName: 'tony',
  lName: 'stark',
  fullName: Ember.computed('fName','lName', function(){
    return `${this.get('fName')} ${this.get('lName')}`;
  }),
});
