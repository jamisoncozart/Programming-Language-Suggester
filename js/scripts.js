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
    //Loop through all question values and add 1 to language score.
    var valueArray = [q1Value, q2Value, q3Value, q4Value];
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
    $("#output").show();
    
    //Display best-fit language based on user scores
    //Javascript wins
    if(jsScore >= pyScore && jsScore >= csScore && csScore >= pyScore) {
      $("#survey").hide();
      $("#languageName").text("Javascript!");
      $("#scoreList").append("<li>Javascript: " + jsScore + "</li>");
      $("#scoreList").append("<li>C#: " + csScore + "</li>");
      $("#scoreList").append("<li>Python: " + pyScore + "</li>");
      $("#cs").hide();
      $("#py").hide();
    } else if(jsScore >= pyScore && jsScore >= csScore && pyScore >= csScore) {
      $("#survey").hide();
      $("#languageName").text("Javascript!");
      $("#scoreList").append("<li>Javascript: " + jsScore + "</li>");
      $("#scoreList").append("<li>Python: " + pyScore + "</li>");
      $("#scoreList").append("<li>C#: " + csScore + "</li>");
      $("#cs").hide();
      $("#py").hide();
    //C# wins
    } else if(csScore >= pyScore && csScore > jsScore && jsScore >= pyScore) {
      $("#survey").hide();
      $("#languageName").text("C#!");
      $("#scoreList").append("<li>C#: " + csScore + "</li>");
      $("#scoreList").append("<li>Javascript: " + jsScore + "</li>");
      $("#scoreList").append("<li>Python: " + pyScore + "</li>");
      $("#js").hide();
      $("#py").hide();
    } else if(csScore >= pyScore && csScore > jsScore && pyScore > jsScore) {
      $("#survey").hide();
      $("#languageName").text("C#!");
      $("#scoreList").append("<li>C#: " + csScore + "</li>");
      $("#scoreList").append("<li>Python: " + pyScore + "</li>");
      $("#scoreList").append("<li>Javascript: " + jsScore + "</li>");
      $("#js").hide();
      $("#py").hide();
    //Python wins
    } else if(pyScore > jsScore && pyScore > csScore && jsScore >= csScore) {
      $("#survey").hide();
      $("#languageName").text("Python!");
      $("#scoreList").append("<li>Python: " + pyScore + "</li>");
      $("#scoreList").append("<li>Javascript: " + jsScore + "</li>");
      $("#scoreList").append("<li>C#: " + csScore + "</li>");
      $("#js").hide();
      $("#cs").hide();
    } else if(pyScore > jsScore && pyScore > csScore && csScore > jsScore) {
      $("#survey").hide();
      $("#languageName").text("Python!");
      $("#scoreList").append("<li>Python: " + pyScore + "</li>");
      $("#scoreList").append("<li>C#: " + csScore + "</li>");
      $("#scoreList").append("<li>Javascript: " + jsScore + "</li>");
      $("#js").hide();
      $("#cs").hide();
    } else {
      $("#mainTitle").empty().text("Something went wrong");
    }
  })
})