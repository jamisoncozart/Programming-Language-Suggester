$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var jsScore = 0;
    var csScore = 0;
    var pyScore = 0;
    //Store all form input values
    var q1Value = $("input:radio[name=make]:checked").val();
    var q2Value = $("input:radio[name=syntax]:checked").val();

    console.log(q1Value + " " + q2Value);
  })
})