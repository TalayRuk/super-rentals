import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {// all routes below are automatically created by ember when run ember g route ... on the terminal
  this.route('about');
  this.route('contact');
  this.route('rental', {path: '/rental/:rental_id'});//path id = dynamic segment
});

export default Router;//Route & Router is the same the diff is that Route is like a noun & Router is like a verb

//add id to route('rental')
//Dynamic Segment = a placeholder that may be dynamically updated depending on the circumstances(ie; which link we click to travel to this route.)
//In this case dynamica Segment we add to the rental route = id of a given rental in firebase that will allow us to return only a single rental in the route's model hook.

//Once router receives a request matching /rental/:rental_id
//it'll map the URL to the rental route handler, rental.js, and send a params hash(= parameter properties' data that sending to Firebase; in this case, means id property) that includes the value the :rental_id segment in the URL
