function addButtons () {
    topics.forEach(function (topic) {
        $("#topicBtns").append(`<button type="button" class="btn btn-info" id=${topic}>${topic}</button>`);
    });
}
let topics = ["astartes","cats","avengers", "infinity-war", "final-fantasy"];
addButtons();

$(".btn").on("click", function(){
    console.log($(this).attr("id"));    
});