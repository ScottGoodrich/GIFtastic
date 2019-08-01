// API Key: QRYo0rjkgeNg2qNonN3WbkW7Z70imMbP
var newTopic = "";
var topics = ["star wars", "dogs", "weird", "baseball", "heavy metal", "goonies", "the office", "scrubs", "parks and recreation", "pixar"];


function displayButtons() {
    $("#button-div").empty();
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.addClass("topic");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $("#button-div").append(button);
    }
}

$("#submit-btn").on("click", function(event) {  
    event.preventDefault();
    var newTopic = $("#input").val().trim();
    topics.push(newTopic);
    displayButtons();
    $("#input").val("");
});
displayButtons();

$("button").on("click", function() {
    var getGif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=QRYo0rjkgeNg2qNonN3WbkW7Z70imMbP&q=" + getGif + "&limit=10&offset=0&rating=PG-13&lang=en";
    
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        $("#gif-collect").empty();
        var results = response.data;
        for (var j = 0; j < results.length; j++) {
            var gifDiv = $("<div>");
            var rating = results[j].rating;
            var caption = $("<p>").text("TITLE: " + title + " RATING: " + rating);
            var title = results[j].title;
            var gifImage = $("<img>");
            gifImage.attr("src", results[j].images.fixed_height.url);
            gifDiv.prepend(caption);
            gifDiv.prepend(gifImage);
            $("#gif-collect").prepend(gifDiv);
        }
});
});
