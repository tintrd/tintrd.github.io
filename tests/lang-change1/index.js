$("button").click(function () {
  var lang = $("#content").attr("lang");
  var flagSrc = $("#flag > img");

  //   console.log(lang);
  console.log(flagSrc.attr("src"));

  if (lang == "en") {
    $("#content").attr("lang", "th");
    $("button").css("background", "yellow");
    $("button").text("(TH) change language");
    flagSrc.attr("src", "images/th-flag.png");
  }
  if (lang == "th") {
    $("#content").attr("lang", "en");
    $("button").css("background", "pink");
    $("button").text("(EN) change language");
    flagSrc.attr("src", "images/us-flag.png");
  }
});
