let link = document.getElementsByClassName('page-link');

let currentValue = 1;


function backwardBtn() {
  if (currentValue > 1) {
    for (l of link) {
      l.classList.remove('current');
    }
    currentValue--;
    link[currentValue - 1].classList.add('current');
  }

}


function currentpage() {

  for (l of link) {
    l.classList.remove('current');
  }
  event.target.classList.add('current');
  currentValue = event.target.value;

}

function forwardBtn() {
  if (currentValue < 3) {
    for (l of link) {
      l.classList.remove('current');
    }
    currentValue++;
    link[currentValue - 1].classList.add('current');
  }

}




function filter() {
  // Get input value and convert to lowercase
  var searchValue = document.getElementById("search").value.toLowerCase();

  // Get gallery items
  var galleryItems = document.getElementsByClassName("mini-container");

  // Loop through all gallery items and hide those that don't match the search query
  for (var i = 0; i < galleryItems.length; i++) {
    var galleryItem = galleryItems[i];
    var text = galleryItem.getElementsByTagName("p")[0].textContent.toLowerCase();

    if (text.indexOf(searchValue) > -1) {
      galleryItem.style.display = "";
    } else {
      galleryItem.style.display = "none";
    }
  }
}

function handleEnterKey(event) {
  if (event.keyCode === 13) {
    filter();
  }
}
/*
function performSearch() {
  const searchText = document.getElementById("searchInput").value;
  // Your search logic here...
  console.log("Searching for:", searchText);
}
*/


function myFunction0() {
  window.open("https://hdhub4u.wales/", "_self"); //open in same window 
}

function myFunction1() {
  let change1 = document.getElementById("option_a2");
  window.open("https://www.w3schools.com", "_top"); //back to previous window // open in same window//
}

function myFunction2() {
  let change2 = document.getElementById("option_a3");
  window.location.replace("http://www.w3schools.com"); // back to home page //
}