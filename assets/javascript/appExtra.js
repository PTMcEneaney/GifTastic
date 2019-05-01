//javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=4J80i9OSkoZGm3lxqIXzE1rSwiOXkvAi&limit=5");
// xhr.done(function (data) { console.log("success got data", data); });

//call to return 25 objects of "funny cats"
//http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=4J80i9OSkoZGm3lxqIXzE1rSwiOXkvAi


//create base array
$(document).ready(function () {

    var buttons = ['dog', 'cat', 'guinea pig', 'bird'];
    var input = $('#input')[0].formAction;
    var searchPhrase = input.split("=");
    var queryURL;


    var urlCreator = function() {
        
    }

    /* var renderBtn = function() {
        $('.btnDiv').empty();

        //loop through array to generate buttons
        for (var i = 0; i < buttons.length; i++) {
            var a = $('<button>');
            a.text(button[i]);
            a.attr("data-name")
            
        };
        //for each, && .val for any form input
    } */
    


    //add new string to array through form entry and sumbission
    $('.submitBtn').on("click", function () {

        buttons.push(searchPhrase[1]);

        $('.btnDiv').append('<button>' + buttons[buttons.length - 1] + '</button>');

        console.log('upper: ' + buttons);

        console.log($('#input').val());

        //SOMEWHERE IN HEREE, STORE FORM INFO AS BUTTON VALUE

        //instead of placeholder/this, it is the vaue from th form entry
        // var PLACEHOLDER = $(this).attr("value");
      
        // Logging the URL so we have access to it for troubleshooting
        // console.log(results[0].data.source);
        alert(queryURL);
        renderBtn();
        urlCreator();

    });

}); 
 
 
 
 $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var gifImage = $("<img>");
                    gifImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(gifImage);

                    $(".gifDiv").prepend(gifDiv);
                }

            }); 
        // console.log($('#input')[0].formAction);
        // console.log(buttons);



        //LOOPING!! vs still images

        //data.images.looping.mp4
               "looping": {
                    "mp4": "https://media2.giphy.com/media/5ldfj1DCIHa8/giphy-loop.mp4",
        
        "fixed_height_still": {
        "url": "https://media2.giphy.com/media/5ldfj1DCIHa8/200_s.gif",
        "width": "356",
        "height": "200"
        
        
        OR 
        
        // _S MAKES IT STILL VS THE NORMAL ONE HAS NO _S --> create still vs plain state
        
          <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">
          <img src="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-still="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-animate="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200.gif" data-state="still" class="gif">
          <img src="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-still="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-animate="https://media3.giphy.com/media/W6LbnBigDe4ZG/200.gif" data-state="still" class="gif">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script type="text/javascript">
            $(".gif").on("click", function() {
              // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
              var state = $(this).attr("data-state");
              // If the clicked image's state is still, update its src attribute to what its data-animate value is.
              // Then, set the image's data-state to animate
              // Else set src to the data-still value
              if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
              }
            });
        
        
        
        
        
        
        