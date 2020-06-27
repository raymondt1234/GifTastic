function addButtons() {
    $("#topicBtns").empty();
    topics.forEach(function (topic) {
        let topicId = topic.replace(" ", "+");
        $("#topicBtns").append(`<button type="button" class="topicBtn btn btn-info btnMargin" id=${topicId}>${topic}</button>`);
    });
}
let topics = ["astartes", "cats", "avengers", "infinity war", "final fantasy"];
let apiKey = "135FLYSdRS8ORkm0JLtV4609cBrkSIYb";
let giphyObject;

addButtons();

$(document).ready(function () {
    $(document).on("click", ".topicBtn", function () {

        $("#gifs").empty();

        let query = $(this).attr("id");
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=9`,
            method: "GET"
        }).then(
            function (response) {
                giphyObject = response;
                for (let i = 0; i < 10; i++) {
                    
                    let rating = giphyObject.data[i].rating;
                    let stillImage = giphyObject.data[i].images.downsized_still.url;
                    
                    let pTag = $("<p>").text(`Rating:${rating}`);
                    let image = $("<img>");
                    let imgDiv = $("<div>");

                    imgDiv.attr("class", "col-md-4 img-div img-fluid");

                    image.attr("src", stillImage);
                    image.attr("value", "gif_still");
                    image.attr("id", i);

                    imgDiv.append(image);
                    imgDiv.append(pTag);

                    $("#gifs").append(imgDiv);
                }
            }
        );
    });
    $(document).on("click", "img", function () {
        let i = Number($(this).attr("id"));

        if ($(this).attr("value") === "gif_still") {
            $(this).attr("src", `${giphyObject.data[i].images.downsized.url}`);
            $(this).attr("value", "gif_notStill");
        } else {
            $(this).attr("src", `${giphyObject.data[i].images.downsized_still.url}`);
            $(this).attr("value", "gif_still");
        }

    });
    $("#add-topic").on("click", function (event) {

        event.preventDefault();

        var topic = $("#topic-input").val().trim();

        if (!topic) {
            return;
        }

        topics.push(topic);
        addButtons();

    });
});