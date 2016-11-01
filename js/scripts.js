$(".button").click(function(){

  $(".results").html(getResult($(".age").val(),$(".sex").val(),$(".height").val()));

});

function getResult(age,sex,height){

  var result;
  json.forEach(function(d){
    if (age == ''){
      result = "<p>Please enter your age.</p>"
    } else if (height == ''){
      result = "<p>Please enter your height.</p>"
    } else if (age < 20 || age > 49) {
      result = "We do not have data for people younger than 20 and older than 49. Sorry."
    } else if (age >= d.ageMin && age <= d.ageMax){
      result = "<p>The average height for Indian <b>" + sex + "s</b> ages <b>" + d.ageMin + " to " + d.ageMax + "</b> is <b>" + d[sex] + "</b> centimeters.</p><p>You are <b>" + height + "</b> centimeters tall, which is <b>" + compare(height,d[sex]) + "</b>.</p>";
    }
  });

  return result;

};

function compare(height,avg){
  if (height > avg) {
    return "taller than average";
  } else if (height < avg) {
    return "shorter than average";
  } else if (height == avg) {
    return "average height"
  }
}
