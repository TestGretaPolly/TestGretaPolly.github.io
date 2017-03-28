function showInput() {
        document.getElementById('display').innerHTML = 
                    document.getElementById("user_input").value;
        document.getElementById('display2').innerHTML = 
                    document.getElementById("user_input").value;
    }

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
// Greta I cannot get this to display the seleccte dropdown once clicked
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function showHover(img) {
   if(img) {
        img.src = 'images/B&W Knickers.png';
   }
}
function showNormal(img) {
   if(img) {
        img.src = 'images/5160_207_4_1_1__BW.png';
   }
}

$(document).ready(function() {
    $('#ex1').mouseover(function(){
  showHover(this);
    }).mouseout(function(){
  showNormal(this);
    });

    $('#hlink').mouseover(function(){
  showHover($('#ex2').get()[0]);
    }).mouseout(function(){
  showNormal($('#ex2').get()[0]);
    });
});
