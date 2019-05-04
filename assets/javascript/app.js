
$(document).ready(function () {
    

    var queryURL = "#";
    var artists = [
        "Art History",
        "Vincent Van Gogh",
        "Andy Warhol",
        "Leonardo da Vinci",
        "Painting",
        "Bob Ross",
        "Frida Khalo",
        "Salvador Dali",
        "M.C. Escher",
        "Street Art",
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
        queryURL = ("https://api.giphy.com/v1/gifs/search?" + query + "api_key=4J80i9OSkoZGm3lxqIXzE1rSwiOXkvAi&limit=12");
        console.log(queryURL);

        /* var xhr = $.get(queryURL);
        xhr.done(function(data) { 
        console.log("success got data", data); 
        }); */ 

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data;
            console.log(results);

            for (var i = 0; i < results.length; i++) {
            //rating
            var rating = results[i].rating;
            //animated
            var animated = results[i].images.fixed_height.url;
            //still
            var still = results[i].images.fixed_height_still.url;

            var dynamicDiv = $('<div>');
            dynamicDiv.addClass('m-4 p-0 float-left');

            var newImg = $('<img>');
            newImg.attr("id", "eachGif");
            newImg.attr("src", still);
            newImg.attr("data-still", still);
            newImg.attr("data-animate", animated);
            newImg.attr("data-state", "still");

            // var download = $('<button')
            // download.attr("method", "get");
            // download.attr("action", webClient);
            // using (WebClient webClient = new WebClient()) 
            // {
            // webClient.DownloadFile(results[i].images.fixed_height.url, "image.gif") ; 
            // }

            var newRating = $('<p>');
            newRating.text("Rating: " + rating);


            $(dynamicDiv).append(newImg);
            $(dynamicDiv).append(newRating);
            // $(dynamicDiv).append(download);


            $('#gifDiv').append(dynamicDiv);

            }
        });

    };

    $('#newBtn').on("click", function (event) {
        event.preventDefault();
        $('.btnDiv').empty();

        var newArtist = $('#form').val().trim();
        artists.push(newArtist);
        renderBtn();
    });

    $(document.body).on("click", ".artistBtn", function () {
        $('#gifDiv').empty();
        
        generateURL($(this).attr("id"));
        // $(this).addClass('active');
    });

    $(document.body).on("click", '#eachGif', function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", ($(this).attr('data-animate')));
            $(this).attr("data-state", "animated")
        } else if (state === "animated") {
            $(this).attr("src", ($(this).attr('data-still')));
            $(this).attr("data-state", "still")
        } else {
            console.log('something went wrong');
        }
    });

    renderBtn();

});
