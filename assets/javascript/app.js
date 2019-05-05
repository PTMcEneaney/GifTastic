
$(document).ready(function () {
    

    var queryURL = "#";
    var current;
    var moreNum = 12;

    //base array that gif options are generated from
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
    };

    //Makes unique URL's, has ajax call, and creates unique divs for each
    var generateURL = function (btn, limit) {

        // Grab the value of the button (btn) the user clicks, concatinate to create a unique query URL
        //limit is pre-definied to determine how many gifs display
        queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + btn + "&api_key=4J80i9OSkoZGm3lxqIXzE1rSwiOXkvAi&limit=" + limit);

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
            //rating
            var rating = results[i].rating;
            //title
            var title = results[i].title;
            //animated
            var animated = results[i].images.fixed_height.url;
            //still
            var still = results[i].images.fixed_height_still.url;

            //the base div that all the other img/text is added to
            var dynamicDiv = $('<div>');
            dynamicDiv.addClass('m-4 p-0 float-left');

            //creating each gif & adding attributes
            var newImg = $('<img>');
            newImg.attr("id", "eachGif");
            newImg.attr("src", still);
            newImg.attr("data-still", still);
            newImg.attr("data-animate", animated);
            newImg.attr("data-state", "still");

            //adding Rating MetaData
            var newRating = $('<p>');
            newRating.text("Rating: " + rating);

            //adding Title MetaData
            var newTitle = $('<p>');
            newTitle.text("Title: " + title);
            newTitle.addClass("titles");

            //appending all those items to the base div
            $(dynamicDiv).append(newImg);
            $(dynamicDiv).append(newRating);
            $(dynamicDiv).append(newTitle);

            //appending those unique divs to the page
            $('#gifDiv').append(dynamicDiv);
            }
        });

    };

    //on click function to create a new button
    $('#newBtn').on("click", function (event) {                    
        //prevents page from reloading
        event.preventDefault();
            
        //checks that user has actually typed something in the form field
        if ($("#form").val().length > 3) {
            //clears div of previous buttons
            $('.btnDiv').empty();
            //pulls the value from the form, adds it to the artists array & calls button-creation function
            var newArtist = $('#form').val().trim();
            artists.push(newArtist);
            renderBtn();
        } else {
            alert("Please type a word or phrase (3 characters or longer) in the field above to create a new button");
        }
    });
    
    //on click with class artistBtn
    $(document.body).on("click", ".artistBtn", function () {
        //empty gif Div and more Gif button
        $('#gifDiv').empty();
        $('#moreDiv').empty();

        //store the id of the clicked button to a variable, set the # of gifs displayed, and call the generateURL function
        current = $(this).attr("id")
        moreNum = 12;
        generateURL(current, moreNum);

        //add a "more gifs" button to the bottom of the container, add attributes/text
        var more = $('<button>');
        more.addClass("btn");
        more.attr("id", "moreGifs");
        more.text("See More Gifs!")
        //append to the page
        $('#moreDiv').append(more);
    });

    //on click with id eachGif
    $(document.body).on("click", '#eachGif', function() {
        var state = $(this).attr("data-state");

        //conditional to check if the gif is still or animated
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

    //on click event with id moreGifs
    $(document.body).on("click", '#moreGifs', function() {
        event.preventDefault();

        //empty gif div and increase # of gifs displayed each time the button is clicked
        $('#gifDiv').empty();
        moreNum = moreNum + 12;

        //call generate URL function with the last-clicked button info, and a higher # of gifs
        generateURL(current, moreNum);
    });

    renderBtn();

});
