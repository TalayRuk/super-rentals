import Ember from 'ember';

export function rentalPopularity(params/*, hash*/) {
  var rental =  params[0];
  if(rental.get('reviews').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-heart"</span>');

  } else {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-home"</span>');
  }
}

export default Ember.Helper.helper(rentalPopularity);
