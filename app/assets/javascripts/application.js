// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// When the button to submit the form is clicked, disable the button so that the
// user cannot double-click. Try not to use jQuery, but if you have to, so be it.

// function disableButton() {
//     document.getElementById("button").disabled = true;
// }
//
// onclick="disableButton()"

(document).ready(function(){
    $(#hideCheckbox).change(function(){
      if (page loads..not sure how to write that)
        $('#hideCheckbox').hide();
      else
        $('#hideCheckbox').show();
      });
});


Using jQuery, hide the checkboxes and their labels when the form page loads.

When the user types in his or her name, show the checkboxes.

If the user totally deletes his or her name, hide the checkboxes again.
