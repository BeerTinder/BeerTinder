$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});

$().ready(function() {
        var queryURL = "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?q=Budweiser&type=beer&key=16619a67284d1bb6fed7e7415c0158f2";

        $.getJSON(queryURL,
            function(response) {
                console.log(response.data);
                //console.log(response.Runtime);
            });
    })