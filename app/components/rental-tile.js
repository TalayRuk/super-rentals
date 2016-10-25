import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false, //we set this as false so it'll always be hidden by default untill the user clicks the button.
  //add function to trigger button
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
      //When 'show image' button in rental-tile.hbs is clicked, the imageShow action defined here will run, setting the "isImageShowing" value to true.
    },

    imageHide: function() {
      this.set('isImageShowing', false);
      //set back to false so the image will hide when it's clicked.
    }
  }
});

//Check out Route image/img-route-show/hide-img.png in our image folder
