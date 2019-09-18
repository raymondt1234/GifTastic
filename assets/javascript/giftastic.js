function addButtons() {
    topics.forEach(function (topic) {
        let topicId = topic.replace(" ", "+");
        $("#topicBtns").append(`<button type="button" class="btn btn-info btnMargin" id=${topicId}>${topic}</button>`);
    });
}
let topics = ["astartes", "cats", "avengers", "infinity war", "final fantasy"];
let apiKey = "135FLYSdRS8ORkm0JLtV4609cBrkSIYb";
let giphyObject;

addButtons();



$(document).ready(function () {
    $(document).on("click", ".btn", function () {
        
        $("#gifs").empty();

        let query = $(this).attr("id");
        $.ajax({
            url: `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=10`,
            method: "GET"
        }).then(
            function (response) {
                giphyObject = response;
                for (let i = 0; i < 10; i++) {
                    $("#gifs").append(`<img src="${giphyObject.data[i].images.downsized_still.url}" value="gif_still" id="${i}">`);
                }
            }
        );
    });
    $(document).on("click", "img", function(){
        let i = Number($(this).attr("id"));
    
        if ($(this).attr("value") === "gif_still") {
            //console.log(`${giphyObject.data[i].images.downsized.url}`);

            $(this).attr("src", `${giphyObject.data[i].images.downsized.url}`);
            $(this).attr("value", "gif_notStill");
        }else {
            //console.log(`${giphyObject.data[i].images.downsized_still.url}`);
                             
            $(this).attr("src", `${giphyObject.data[i].images.downsized_still.url}`);
            $(this).attr("value", "gif_still");
        }

    });
});