// Initial loading of the data.json file, when the site is opened for the first time, async function
$.getJSON("../../data.json", function (json) {

    // Array for analysis data from data.json ( is a javascript object) and update each activity
    for (let index = 0; index < json.length; index++) {

        var titleActivity = json[index].title;
        var titleActivityLowCase = ((json[index].title).toLowerCase()).replace(/ /g,"-");

        $("#" + titleActivityLowCase + " h2").text(titleActivity);
        $("#" + titleActivityLowCase + " h3").text(json[index].timeframes.daily.current + "hrs");
        $("#" + titleActivityLowCase + " p").text("Last Day - " + json[index].timeframes.daily.previous + "hrs");


    }

});

//The data.json file is stored in the variable dataJson.
var dataJson = $.getJSON("../../data.json", function () {

    dataJson = JSON.parse(dataJson.responseText);
});

//event listener in the filter controls (daily, weekly, monthly)
$("a").click(function (text) {

    var frameSelection = (text.target.innerText).toLowerCase();

    var lastFrame = null;

    if (frameSelection === "daily") {
        lastFrame = "Day";
    } else {
        if (frameSelection === "weekly") {
            lastFrame = "Week"
        } else{
            if (frameSelection === "monthly") {
                lastFrame = "Month"
            }
        } 
    }

    // Array for analysis data from dataJson ( is a javascript object) and update each activity
    for (let index = 0; index < dataJson.length; index++) {

        var titleActivityLowCase = ((dataJson[index].title).toLowerCase()).replace(/ /g,"-");

        var framesSec = dataJson[index].timeframes[frameSelection].current;

        $("#" + titleActivityLowCase + " h3").text(framesSec + "hrs");
        $("#" + titleActivityLowCase + " p").text("Last " + lastFrame + " - " + dataJson[index].timeframes[frameSelection].previous + "hrs");
        
    }

});

