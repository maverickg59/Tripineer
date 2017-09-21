// const AuthKey = "Bearer 2Ly-4eOWIdU0p6M65l1EB_1jNjNgqIDf4XD9Vmmw727kvqIcrlYAQON-D6t7pCAhmMVsh1No-X3FyCbbdsIgcT65lyYEcpNqycJKvTShp-1xjITEhxZOiWKLLei_WXYx"
// const url = "https://api.yelp.com/v3/"
// const corsURL = "https://cors-anywhere.herokuapp.com/"
// const apiURL = "https://evening-dawn-29918.herokuapp.com"
//
// $("#input-search-activity, #input-search-location").keyup(function(event) {
//   if (event.keyCode == 13) {
//     event.preventDefault();
//     var locationSearch = $("#input-search-location").val();
//     var activitySearch = $("#input-search-activity").val();
//     // window.location.assign("tripCards.html");
//
//     if (locationSearch.length == 0) {
//       alert("Enter Location")
//     } else {
//       console.log(activitySearch, locationSearch);
//       var businessURL = url + "businesses/search?location=" + locationSearch + "&categories=" + activitySearch
//       $.ajax({
//         type: "GET",
//         url: corsURL + businessURL,
//         headers: {
//           "authorization": "Bearer 2Ly-4eOWIdU0p6M65l1EB_1jNjNgqIDf4XD9Vmmw727kvqIcrlYAQON-D6t7pCAhmMVsh1No-X3FyCbbdsIgcT65lyYEcpNqycJKvTShp-1xjITEhxZOiWKLLei_WXYx",
//           "expires_in": 641713742,
//           "token_type": "Bearer"
//         },
//         success: function(data) {
//           console.log(data);
//
//           var yelpData = data.businesses;
//           console.log(yelpData)
//
//           var source = $("#entry-template").html();
//           var template = Handlebars.compile(source);
//           var context = {
//             businesses: yelpData
//           };
//           var html = template(context);
//           $('#main-pic').hide()
//           $('.tripContainer').prepend(html)
//           $('.tripButton').on("click", function(event) {
//             event.preventDefault();
//             // alert("click worked")
//             // var name = $(".card-Title").innerHTML()
//             var name = $(this).attr("data-name")
//             var rating = $(this).attr("data-rating")
//             var image = $(this).attr("data-img")
//             //  console.log(name, rating, image)
//
//             const cardData = {
//               'name': name,
//               'rating': rating,
//               'image_url': image,
//             }
//             console.log(cardData);
//             $.post('https://evening-dawn-29918.herokuapp.com/activity', cardData)
//               .then(result => {
//                 console.log(result);
//               })
//           })
//         }
//       })
//     }
//     $('main').css({
//       'height': '600px',
//       'width': '100%'
//     })
//     $('.search-location').css({
//       'top': '1.5%',
//       'left': '30%',
//       'height': '10px !important',
//     })
//     $('.search-activity').css({
//       'top': '1.5%',
//       'left': '50%',
//       'height': '10px !important',
//     })
//     $('nav').css({
//       'margin-bottom': '20px',
//     })
//     $('#input-search-activity').val('')
//     $('#input-search-location').val('')
//   }
// });
