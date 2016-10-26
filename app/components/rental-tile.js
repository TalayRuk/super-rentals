import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false, //we set this as false so it'll always be hidden by default untill the user clicks the button.
  //add function to trigger button
  //also need to add UPDATE FUNCTION***
  updateRentalForm: false,

  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
      //When 'show image' button in rental-tile.hbs is clicked, the imageShow action defined here will run, setting the "isImageShowing" value to true.
    },

    imageHide: function() {
      this.set('isImageShowing', false);
      //set back to false so the image will hide when it's clicked.
    },
    //add UPDATE function w/update(), rental argument & params
    update('update', rental, params) {
      //Add sendAction to pass up all 3 properties to route handler
      this.setAction('update', rental, params);
    //update() action in rental-tile is triggered when the child compone(update-rental) calls this.sendAction ..  which this actin just pass along all 3 properties up to index
    //***Now we need to add update="update" action btwn rental=rental & destroyRental="destroyRental" in index route ... templates/index.hbs
    },

    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }  //When delete clicked, the delete action will display a confirmation pop-up. Then If confirmed, it'll send the action destroyRental() upwards into Route handler by calling this.Action() (from rental-tile.hbs to rental-tile.js --> templates/index.hbs -> to routes/index.js --> to MODEL(firebase) not w/in the component!!!)

      //this.sendAction need argument that we provide the name of the function on the template & route handler we'd like to activate (in this case, destroyRental(), that we'll create in index.hbs) & the specific rental to provide that action.
  }
});

//Check out Route image/img-route-show/hide-img.png in our image folder

// NOTE***Creating, Deleting and Updating objects in our data store should be handled by the route handler rather than within the component. ***from rental-tile.hbs to rental-tile.js --> templates/index.hbs -> to routes/index.js --> to MODEL(firebase)**

//Check out route image/img-route-Delete.png

//Data down, Actions up: sending from templates/components/rental-tile.hbs to templates/component/rental.js to templates/index.hbs to routes/index.js to model(firebase)

//When rental is delete() action is activated, the line this.sendAction('destroyRental', rental); sends this action one level "up" to our templates/index.hbs
//Then our templates/index.hbs will need to match the action it receives from the component to the appropriate action on the route handler(routes/index.js). We also do this in the same line that calls our component:
