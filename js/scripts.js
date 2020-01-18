$(document).ready(function() {
  $("#survey").slideDown();
  $("#form").submit(function(event) {
    $("#survey").slideUp();
    event.preventDefault();
    var jsScore = 0;
    var csScore = 0;
    var pyScore = 0;
    var valueArray = getSurveyInputs();
    //Loop through all question values and add 1 to language score.
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
    chooseLanguage(jsScore, csScore, pyScore);
    loadResults();
  });
  $("#refreshButton").click(function() {
    refreshAnimation();
  })
});

//grabs input values from survey and returns an array of input values
function getSurveyInputs() {
  var q1Value = $("input:radio[name=make]:checked").val();
  var q2Value = $("input:radio[name=syntax]:checked").val();
  var q3Value = $("input:radio[name=industry]:checked").val();
  var q4Value = $("input:radio[name=popular]:checked").val();
  var q5Value = $("input:radio[name=like]:checked").val();
  var inputArray = [q1Value, q2Value, q3Value, q4Value, q5Value];
  return inputArray;
}

//Runs survey results through conditionals and displays resulting language
function chooseLanguage(jsScore, csScore, pyScore) {
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
  //Python wins
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
}

//shows results after short animation
function loadResults() {
  setTimeout(function() {
    $("#loadingDiv").fadeIn()
    setTimeout(function() {
      $("#loadingDiv").fadeOut();
      setTimeout(function() {
        $("#output").slideDown();
      }, 500);
    }, 2000);
  }, 500);
}

//refreshes page after short animation
function refreshAnimation() {
  $("#output").slideUp();
  setTimeout(function() {
    $("#leavingDiv").fadeIn()
    setTimeout(function() {
      $("#leavingDiv").fadeOut();
      setTimeout(function() {
        location.reload(true);
      }, 500);
    }, 2000);
  }, 500);
}