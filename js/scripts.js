$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var jsScore = 0;
    var csScore = 0;
    var pyScore = 0;
    //Store all form input values
    var q1Value = $("input:radio[name=make]:checked").val();
    var q2Value = $("input:radio[name=syntax]:checked").val();
    //Loop through all question values and add 1 to language score.
    var valueArray = [q1Value, q2Value];
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
    
    //Display best-fit language based on user scores
  })
})