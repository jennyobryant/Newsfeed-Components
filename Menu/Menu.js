/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      <li>Students</li>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu-open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu (items){
  let div = document.createElement("div");
  let menubutton = document.querySelector(".menu-button"); 
  menubutton.addEventListener("click", (event)=>{
    console.log("here is testing")
    div.classList.toggle("menu-open");
  })

  div.setAttribute("class", "menu"); 

  let ul = document.createElement("ul"); 
//all items in array
  items.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item; 
    ul.appendChild(li); 
  })
//single item in array
 //let li = document.createElement("li");
  //li.textContent = items[0]; 
//  ul.appendChild(li); 

  div.appendChild(ul);
  return div; 
}
const menu = createMenu(menuItems);
//console.log(menu);

document.querySelector("body").appendChild(menu); 