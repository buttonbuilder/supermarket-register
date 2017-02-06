$( "#target" ).submit(function( event ) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});

$(document).ready(function() {
    // $.ajax({
    //     type: "POST",
    //     data: "{'itemList':'dnsa'}",
    //     url: "http://localhost:3000/cart"
    //
    // }).then(function(data) {
    //    $('.total').append(data.total);
    // });
});
