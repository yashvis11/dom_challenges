// document.getElementById("myParagraph"); wrong; grab the button first as that is the trigger

/*Regular functions point to the DOM element as for them the this object is created and points to the specific DOM element
whereas arrow functions do not have a personal this object and go from the surrounding scope, where the this points to the outermost scope .i.e., the Windows
object */

// document
//   .getElementById("changeTextButton")
//   .addEventListener("click", () => {
//         console.log(this);  //example of arrow function refer notes above
//   });

//challenge1
document.getElementById("changeTextButton").addEventListener('click', function (){
//  console.log(this); //example of regular function refer notes above
    let para = document.getElementById("myParagraph");
    para.textContent = "This is the changed paragraph";
});

//challenge2
document.getElementById("highlightFirstCity").addEventListener('click', function() {
  let list = document.getElementById("citiesList");
  list.firstElementChild.classList.add("highlight"); //add the highlight class to the text's class
});

//challenge3

document.getElementById("changeOrder").addEventListener('click', function(){
  let text = document.getElementById("coffeeType");
  text.textContent = "Espresso";
  
});
document.getElementById("changeOrder").style.backgroundColor = "beige";

//challenge4
let i = 0;
document.getElementById("addNewItem").addEventListener('click',function(){
  let list = document.getElementById("shoppingList");
  let items = ['Banana','Purse','Lipstick'];
  let newItem = document.createElement("li");  //create new list element
  
  newItem.textContent = items[i];  //set the text of the element from empty to a new item
  list.appendChild(newItem);  //append it to the main list
  i+=1;  //update counter
  if(i===items.length){  //reset on reaching length of the items list 
    i=0;
  }
});

//challenge5

document.getElementById("removeLastTask").addEventListener('click', function(){
    let item = document.getElementById("taskList").lastElementChild;
    item.remove();
});



