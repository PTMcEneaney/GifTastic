
$(document).ready(function () {
    

    var queryURL = "#";
    var artists = [
        "Vincent Van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
        "Andy Warhol",
        "Frida Khalo",
        "Salvador Dali",
        "Jackson Pollock",
        "Francisco Goya"
    ];
    var renderBtn = function () {

        //loop through array to generate buttons
        for (var i = 0; i < artists.length; i++) {
            var btn = $('<button>');
            btn.text(artists[i]);
            btn.addClass('btn btn-outline-secondary m-2 artistBtn');
            btn.attr("type", "button");
            //replaces any spaces in the ID with Plus signs
            var btnID = artists[i].split(' ').join('+');
            btn.attr("id", btnID);
            $('.btnDiv').append(btn);
        };
        //for each, && .val for any form input
    }

    var generateURL = function (btn) {
        // Grab text the user typed into the search input, add to the queryParams object
        var query = "q=" + btn + "&";
        queryURL = ("https://api.giphy.com/v1/gifs/search?" + query + "api_key=4J80i9OSkoZGm3lxqIXzE1rSwiOXkvAi&limit=10");
        console.log(queryURL);

        /* var xhr = $.get(queryURL);
        xhr.done(function(data) { 
        console.log("success got data", data); 
        }); */

        /* $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data;
            console.log(results);
        }); */

    };

    $('#newBtn').on("click", function (event) {
        event.preventDefault();
        $('.btnDiv').empty();

        var newArtist = $('#form').val().trim();
        artists.push(newArtist);
        renderBtn();
    });

    $(document.body).on("click", ".artistBtn", function () {
        generateURL($(this).attr("id"));
    });

    renderBtn();

    

    
        /* .then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(gifImage);

                $("#gifDiv").prepend(gifDiv);
            }
        });  */

});
