// Contact Page: Send Email from user
$(document).ready(function() {
    $("#message-form").submit(function(event) {
      event.preventDefault();
      
      var message = $("#messagetext").val();


      var emailLink = "mailto:rohanritter@gmail.com" +
                        "?subject=New Form Submission" +
                        "&body=Message: " + encodeURIComponent(message) +
                        "";

      window.location.href = emailLink;
    });
  });