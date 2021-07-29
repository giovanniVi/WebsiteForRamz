var firstName;
var lastName;
var email;

  $( "#submit" ).on( "click", function() {
    firstName = $( "#fname" )[0].value;
    lastName = $( "#lname" )[0].value;
    email = $( "#email" )[0].value;
    $( "#inputForms" ).addClass("hide-me");
    var message = "<p>Thank you, " + firstName + " " + lastName + ", we will be reaching out to you via: " + email + "</p>";
    $( "#inputMessage" ).html(message);
    $( "#inputMessage" ).removeClass("hide-me");
  });



