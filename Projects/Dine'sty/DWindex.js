

// Filter Search on Wine List and  Restaurtant Page
function myFunction() {
    var filter = $("#myFilter").val().toUpperCase();
    var cards = $("#myItems .card");

    cards.each(function() {
        var title = $(this).find(".card-body h5.card-title");
        if (title.text().toUpperCase().indexOf(filter) > -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

// Send Email of data submitted
$(document).ready(function() {
    $("#wine-email-form").submit(function(event) {
      event.preventDefault();
      
      var name = $("#name").val();
      var description = $("#description").val();
      var pros = $("#pros").val();
      var cons = $("#cons").val();
      var starR = $("#starR").val();

      var emailLink = "mailto:rohanritter@gmail.com" +
                        "?subject=New Form Submission" +
                        "&body=Name: " + encodeURIComponent(name) +
                        "%0ADescription: " + encodeURIComponent(description) +
                        "%0APros: " + encodeURIComponent(pros) +
                        "%0ACons: " + encodeURIComponent(cons) +
                        "%0AStar Rating: " + encodeURIComponent(starR) +
                        "%0Awine" +
                        "";

      window.location.href = emailLink;
    });
  });

  $(document).ready(function() {
    $("#dine-email-form").submit(function(event) {
      event.preventDefault();
      
      var name = $("#name").val();
      var description = $("#description").val();
      var pros = $("#pros").val();
      var cons = $("#cons").val();
      var starR = $("#starR").val();

      var emailLink = "mailto:rohanritter@gmail.com" +
                        "?subject=New Form Submission" +
                        "&body=Name: " + encodeURIComponent(name) +
                        "%0ADescription: " + encodeURIComponent(description) +
                        "%0APros: " + encodeURIComponent(pros) +
                        "%0ACons: " + encodeURIComponent(cons) +
                        "%0AStar Rating: " + encodeURIComponent(starR) +
                        "%0Adine" +
                        "";

      window.location.href = emailLink;
    });
  });