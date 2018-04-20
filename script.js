function getDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  return "<span id='date-span'>"+year+"-"+month+"-"+day+"</span>";
}

function getTime() {
  var time = new Date();
  var hours = (time.getHours() < 10? '0' : '') + time.getHours();
  var minutes = (time.getMinutes() < 10? '0' : '') + time.getMinutes();
  var seconds = (time.getSeconds() < 10? '0' : '') + time.getSeconds();
  return hours+":"+minutes
}

function getWeekday() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  return weekday[d.getDay()];
}

function updateTime() {
  $('#date-clock-bottom-panel').html("[ "+getDate()+" | "+getWeekday()+" "+getTime()+" ]");
}
function showTime() {
  updateTime();
  setInterval(updateTime, 1000);
}

$(document).ready(showTime);

$("body").keydown(function(event){
  $("#fake-prompt").append(event.key);
})