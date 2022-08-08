// Your code here
const dodger = document.getElementById('dodger');
      
dodger.style.backgroundColor = "#ff69b4";
      
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);
        
  if ( left > 0 ) {
    dodger.style.left = `${left - 4}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if ( left < 360) {
    dodger.style.left = `${left + 4}px`;
  }
}
      
document.addEventListener('keydown', function(e) {
  if ( e.which === 37 ) {
    moveDodgerLeft();
  }
  if ( e.which === 39 ) {
    moveDodgerRight();
  }
});
