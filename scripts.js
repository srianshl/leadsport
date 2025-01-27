// Toggle dropdown menu
function toggleDropdown() {
  document.getElementById("sportsDropdown").classList.toggle("show");
}

// Filter sports based on user input
function filterSports() {
  const input = document.getElementById("sportInput").value.toUpperCase();
  const dropdown = document.getElementById("sportsDropdown");
  const links = dropdown.getElementsByTagName("a");

  for (let i = 0; i < links.length; i++) {
    const text = links[i].textContent || links[i].innerText;
    if (text.toUpperCase().indexOf(input) > -1) {
      links[i].style.display = "";
    } else {
      links[i].style.display = "none";
    }
  }
  dropdown.classList.add("show");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropdown button') && !event.target.matches('#sportInput')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}