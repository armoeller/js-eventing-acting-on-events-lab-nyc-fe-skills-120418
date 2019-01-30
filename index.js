//Event Listener
// 1 FInd the thing to do the Event on 
// we actually dont need an element (can skip 1, document will get event listener)
//2 write the Function that will happen when we do the thing

const moveDodgerLeft = () => {
  //get the dodger 
  const dodger = document.getElementById('dodger')
  //change the layout/position of dodger - need some css changes
  console.log(dodger.style.left)
}

//dgoing to figure out do we move dodger left or move dodger right
const moveDodgerHelper = (event) => {
}

//3 add event listener
document.addEventListener('keydown', moveDodgerHelper)