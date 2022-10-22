function function1880() {
  alert("Helen Keller is born in Tuscumbia, Alabama on June 27.");
}

function function1882() {
  alert(
    "In February, Keller contracts scarlet fever or meningitis and becomes deaf and blind at the age of 19 months."
  );
}

function function1887() {
  alert(
    "In January, Helen Keller’s father, Captain Arthur Keller, writes a letter to Perkins Director Michael Anagnos about employing a teacher for his daughter. Read the letter on the Internet Archive."
  );
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
