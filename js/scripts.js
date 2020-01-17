$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var jsScore = 0;
    var csScore = 0;
    var pyScore = 0;
    //Store all form input values
    var q1Value = $("input:radio[name=make]:checked").val();
    var q2Value = $("input:radio[name=syntax]:checked").val();
    var q3Value = $("input:radio[name=industry]:checked").val();
    var q4Value = $("input:radio[name=popular]:checked").val();
    var q5Value = $("input:radio[name=like]:checked").val();
    //Loop through all question values and add 1 to language score.
    var valueArray = [q1Value, q2Value, q3Value, q4Value, q5Value];
    for(let i = 0; i < valueArray.length; i++) {
      if(valueArray[i] === "js") {
        jsScore++;
      } else if(valueArray[i] === "cs") {
        csScore++;
      } else if(valueArray[i] === "py") {
        pyScore++;
      } else {
        console.log("Something went wrong");
      }
    }
    $("#survey").hide();
    $("#loadingDiv").show().removeClass().addClass("loadingDiv");
    //Displays survey output and hides loading icon after 2000ms
    setTimeout(function() {
      $("#loadingDiv").hide();
      $("#output").show();
      //Display best-fit language based on user scores
      //Javascript wins
      if(jsScore >= pyScore && jsScore >= csScore && csScore >= pyScore) {
        $("#languageName").text("Javascript!");
        $("#scoreList").append("<tr><td>Javascript</td><td>" + jsScore + "</td></tr>");
        $("#scoreList").append("<tr><td>C#</td><td>" + csScore + "</td></tr>");
        $("#scoreList").append("<tr><td>Python</td><td>" + pyScore + "</td></tr>");
        $("#cs").hide();
        $("#py").hide();
      } else if(jsScore >= pyScore && jsScore >= csScore && pyScore >= csScore) {
        $("#languageName").text("Javascript!");
        $("#scoreList").append("<tr><td>Javascript</td><td>" + jsScore + "</td></tr>");
        $("#scoreList").append("<tr><td>Python</td><td>" + pyScore + "</td></tr>");
        $("#scoreList").append("<tr><td>C#</td><td>" + csScore + "</td></tr>");
        $("#cs").hide();
        $("#py").hide();
      //C# wins
      } else if(csScore >= pyScore && csScore > jsScore && jsScore >= pyScore) {
        $("#languageName").text("C#!");
        $("#scoreList").append("<tr><td>C#</td><td>" + csScore + "</td></tr>");
        $("#scoreList").append("<tr><td>Javascript</td><td>" + jsScore + "</td></tr>");
        $("#scoreList").append("<tr><td>Python</td><td>" + pyScore + "</td></tr>");
        $("#js").hide();
        $("#py").hide();
      } else if(csScore >= pyScore && csScore > jsScore && pyScore > jsScore) {
        $("#languageName").text("C#!");
        $("#scoreList").append("<tr><td>C#</td><td>" + csScore + "</td></tr>");
        $("#scoreList").append("<tr><td>Python</td><td>" + pyScore + "</td></tr>");
        $("#scoreList").append("<tr><td>Javascript</td><td>" + jsScore + "</td></tr>");
        $("#js").hide();
        $("#py").hide();
      //Pytdon wins
      } else if(pyScore > jsScore && pyScore > csScore && jsScore >= csScore) {
        $("#languageName").text("Python!");
        $("#scoreList").append("<tr><td>Python</td><td>" + pyScore + "</td></tr>");
        $("#scoreList").append("<tr><td>Javascript</td><td>" + jsScore + "</td></tr>");
        $("#scoreList").append("<tr><td>C#</td><td>" + csScore + "</td></tr>");
        $("#js").hide();
        $("#cs").hide();
      } else if(pyScore > jsScore && pyScore > csScore && csScore > jsScore) {
        $("#languageName").text("Python!");
        $("#scoreList").append("<tr><td>Python</td><td>" + pyScore + "</td></tr>");
        $("#scoreList").append("<tr><td>C#</td><td>" + csScore + "</td></tr>");
        $("#scoreList").append("<tr><td>Javascript</td><td>" + jsScore + "</td></tr>");
        $("#js").hide();
        $("#cs").hide();
      } else {
        $("#mainTitle").empty().text("Sometding went wrong...");
      }
    }, 2000);
  });
});