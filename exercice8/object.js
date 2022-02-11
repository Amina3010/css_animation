 function randomColor() {
  return '#'+Math.random().toString(16).substr(-6);
}
  
// Toggle button code. Don't edit.
var loader = document.querySelectorAll('.card');
loader.forEach( element => {
  element.addEventListener("click",()=>{
    element.style.backgroundColor = "#00FF00";
    element.style.opacity = 0.8;
    element.style.outline = randomColor();
    console.log(randomColor());

})
    
  });


//loader.className =""; 


