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

//challenge6
document.getElementById("clickMeButton").addEventListener('mouseover', function(){
  document.getElementById("clickMeButton").style.cursor = "pointer";
  document.getElementById("clickMeButton").addEventListener('click', function(){
    alert("This is an alert message");
})});

//challenge7
document.getElementById("teaList").addEventListener('click', function(event){
  //the event in the parameter stores the current event's context.
  //like a click or a hover or any other thing
  //console.log(event); to see the type of event selected
  /*in event properties a property known as target shows with respect to which element did the event take place. 
  That property can be used to access the affected element*/
  if(event.target && event.target.matches(".teaItem")){ //to check if an event did take place. And optionally check if the selected item matches the 
    //the type tea, in case there are more than one type of item in the list 
      alert("You have selected: " + event.target.textContent);
  }
});

//challenge8
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
  event.preventDefault();   //without this the browser immediately reloads the page and sends the data to the server. This stops us from handling the data
  let user_input = document.getElementById("feedbackInput").value;  //.value for input boxes and .innerHTML for paragraphs and all
  //console.log(user_input); why is it grabbing the input insted of the label?
  document.getElementById("feedbackDisplay").innerHTML = `Feedback is: ${user_input}`;
});

//challenge9
document.addEventListener('DOMContentLoaded', function(event){
  document.getElementById("domStatus").textContent = "DOM fully loaded."
})

//challenge10
document.getElementById("toggleHighlight").addEventListener('click', function(){
  document.getElementById("descriptionText").classList.toggle("highlight");
});



