const AuthKey = "Bearer 2Ly-4eOWIdU0p6M65l1EB_1jNjNgqIDf4XD9Vmmw727kvqIcrlYAQON-D6t7pCAhmMVsh1No-X3FyCbbdsIgcT65lyYEcpNqycJKvTShp-1xjITEhxZOiWKLLei_WXYx"
const url = "https://api.yelp.com/v3/"
const corsURL = "https://cors-anywhere.herokuapp.com/"
const apiURL = "https://salty-island-62883.herokuapp.com/"

$(() => {
  console.log('jQuery is connected!!!!!');
})
$(document).ready(function(){
     $('.parallax').parallax();
   });

$("#espanol").click(function() {
  alert("We're' learning spanish still, be tune")
})


$("#input-search-activity, #input-search-location").keyup(function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    var locationSearch =$("#input-search-location").val();
    var activitySearch =$("#input-search-activity").val();
      // window.location.assign("tripCards.html");
      console.log(activitySearch,locationSearch);
      var businessURL = url + "businesses/search?location=" + locationSearch
      var eventsURL = url + "events?location=" + locationSearch
// console.log(searchURL);
$.ajax({
  type:  "GET",
  url: corsURL + eventsURL,
  headers: {
    "authorization": "Bearer 2Ly-4eOWIdU0p6M65l1EB_1jNjNgqIDf4XD9Vmmw727kvqIcrlYAQON-D6t7pCAhmMVsh1No-X3FyCbbdsIgcT65lyYEcpNqycJKvTShp-1xjITEhxZOiWKLLei_WXYx",
    "expires_in": 641713742,
    "token_type": "Bearer"
  },
  success: function(data) {
        console.log(data);
        }
})
 };
});

$("#input-first-name").keyup(function (event) {
  // var firstName = $("input-first-name").val()
  if (event.keyCode == 13) {
    
    event.preventDefault()
    var firstName = $("#input-first-name").val();
  console.log(firstName);
  const postName = {
    "first_name": firstName,
  }
  $.post(apiURL + "/tripineer_user", postName)
    .then(result => {
      console.log(result)
    })
    }
})


