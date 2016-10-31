import Ember from 'ember';

export function rentalCost(rental) {

  var cost = rental[0].get('cost');
  var costReturned = "error";
  if ( cost >= 150) { costReturned = "$$$";}
  else if ( cost >= 100) { costReturned = "$$";}
  else if ( cost >= 50) { costReturned = "$";}
  else if ( cost < 50) { costReturned = "Cheap!";}
  else { costReturned = "No price listed";}

  return costReturned;
}

export default Ember.Helper.helper(rentalCost);
