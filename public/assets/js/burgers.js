// document load
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newdevoured = $(this).data("newdevoured");

    var newdevouredState = {
      devoured: newdevoured
    };

    // ajax call on burgers with id/ put(update) boolen 
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevouredState
    }).then(
      function() {
        //reload current page
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
burgs = $("#burger").val().trim();
 if (burgs === ""){
   alert("No BLANKS BITCH!");
 }else{
    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    // ajax post newBurger 
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
 }
  });
  
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // ajax deleting burger with specific id reload after
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
