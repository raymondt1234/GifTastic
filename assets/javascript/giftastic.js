function addButtons() {
    topics.forEach(function (topic) {
        let topicId = topic.replace(" ", "+");
        $("#topicBtns").append(`<button type="button" class="btn btn-info btnMargin" id=${topicId}>${topic}</button>`);
    });
}
let topics = ["astartes", "cats", "avengers", "infinity war", "final fantasy"];

let apiKey = "135FLYSdRS8ORkm0JLtV4609cBrkSIYb";
addButtons();



$(document).ready(function () {
    $(document).on("click", ".btn", function () {
        //console.log($(this).attr("id"));
        
        $("#gifs").empty();

        let query = $(this).attr("id");
        $.ajax({
            url: `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=10`,
            method: "GET"
        }).then(
            function (response) {
                for (let i = 0; i < 10; i++) {
                    $("#gifs").append(`<img src="${response.data[i].images.downsized.url}">`);
                }
            }
        );
    });
});