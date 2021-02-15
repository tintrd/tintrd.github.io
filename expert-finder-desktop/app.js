var categoryContainer = document.getElementById("categoryContainer");
var btns = categoryContainer.getElementsByClassName("btn");

// event listeners
// add active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

filterSelect("all");

function filterSelect(c) {
  console.log(c);
  var x = document.getElementsByClassName("card");
  // console.log(c)  // check selected filter
  // console.log(x.length)  // check length of class elements
  if (c == "all") c = ""; // select all
  for (var i = 0; i < x.length; i++) {
    // loop thru each element
    removeClass(x[i], "show");
    // console.log(x[i].className)
    if (x[i].className.indexOf(c) > -1) {
      // if c is in one of the classes of xi
      addClass(x[i], "show"); // show xi
    }
  }
}

// add elements with selected class to show
function addClass(element, name) {
  var arr_cls = element.className.split(" "); // array of class names of each element (ex: ['agri', 'arch'])
  var arr_name = name.split(" ");
  // console.log(arr_name);
  for (var i = 0; i < arr_name.length; i++) {
    if (arr_cls.indexOf(arr_name[i]) == -1) {
      element.className += " " + arr_name[i];
    }
  }
}

function removeClass(element, name) {
  var arr_cls = element.className.split(" "); // array of class names of each element
  var arr_name = name.split(" ");
  for (var i = 0; i < arr_name.length; i++) {
    while (arr_cls.indexOf(arr_name[i]) > -1) {
      idx = arr_cls.indexOf(arr_name[i]); // index of class
      arr_cls.splice(idx, 1); // splice = add/remove items to/from array. here remove 1 item at index idx
    }
  }
  element.className = arr_cls.join(" ");
}
