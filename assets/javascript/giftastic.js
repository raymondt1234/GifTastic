function addButtons() {
    topics.forEach(function (topic) {
        $("#topicBtns").append(`<button type="button" class="btn btn-info btnMargin" id=${topic}>${topic}</button>`);
    });
}
let topics = ["astartes", "cats", "avengers", "infinity-war", "final-fantasy"];

let apiKey = "135FLYSdRS8ORkm0JLtV4609cBrkSIYb";
addButtons();

$.ajax({
    url: `http://api.giphy.com/v1/gifs/search?q=${topics[0]}&api_key=${apiKey}&limit=10`,
    method: "GET"
}).then(
    function (data) {$("#gifs").append(`<img src=${data[0].url}>`);}
    //function (data) { console.log("success got data", data); }
);

$(document).ready(function () {
    $(document).on("click", ".btn", function () {
        console.log($(this).attr("id"));
    });
});