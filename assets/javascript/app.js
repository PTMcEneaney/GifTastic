$(document).ready(function () {
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
var renderBtn = function() {
    // 

    //loop through array to generate buttons
    for (var i = 0; i < artists.length; i++) {
        var btn = $('<button>');
        btn.text(artists[i]);
        btn.addClass('btn btn-outline-secondary m-2');
        btn.attr("type", "button");
        $('.btnDiv').append(btn);
    };
    //for each, && .val for any form input
}

// var generateURL = function() {
    
// }

$('#newBtn').on("click", function() {
    event.preventDefault();
    $('.btnDiv').empty();

    var newArtist = $('#form').val().trim();
    artists.push(newArtist);
    renderBtn();
});

renderBtn();


});
