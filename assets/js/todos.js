/*
	Seetaram Patel - 200393396
	Keval Patel - 200393482
	Lalit Sharma - 200395019
*/

// The below are the methods for selecting elements
let liList = document.querySelectorAll("ul li");
var spanList = document.getElementsByTagName("span");
let faPlus = document.querySelector("#faPlus");
let fatrash = document.querySelectorAll(".fa trash");
let inputPlace = document.querySelector("input[type = 'text']");
let ul = document.querySelector("ul");
toDoListArray = new Array();

// Here we can fire the event on li where if default or future lis are clicked then it will turn in gray and vice versa
// Here we fire the event on li element so we write target.tagName
// Here the third element false in addEventListener will stop bubling the parent elements
ul.addEventListener("click", function(event) {
	if (event.target.tagName === 'LI' ) {
      	event.target.classList.toggle('completed');
    }
},false);

// This function will delete the existing todos as well as future added todos
function todoDelete() {
	for(let span of spanList) {
		span.addEventListener("click", function() {
			// Here span remove the parentElement called li from the ToDOList
			span.parentElement.remove();

			// stopPropagation will stop the event to the bubligg on parent elements and apply only given elements
			event.stopPropagation();
			localStorage.removeItem('ToDOList',JSON.stringify(toDoListArray));
		});
	}
}

function keyNote(event) {
	// The below which 13 is for enter key
	if(event.which === 13) {

		// These will create new elements for our new added todos
		let li = document.createElement("li");
		let span = document.createElement("span");
		let icon = document.createElement("i");

		// here we grab the input from user, save it as variable and then clear the input
		let todoText = inputPlace.value;
		inputPlace.value = " ";

		// here we add image and its css properties into icon element
		icon.classList.add('fa', 'fa-trash');
		// Then we add icon element to the parent span element
		span.append(icon);
		// Here the main ul element include li element which also inlude the span element with our user input
		ul.appendChild(li).append(span, todoText);	

		toDoListArray.push(todoText);
		localStorage.setItem("ToDoList", JSON.stringify(toDoListArray));
		
		// This function will delete the new added todo
		todoDelete();
	}
} 

// This is a addEventListener which take the care of the keydown event on user input
// The second parameter is the keyNote function
inputPlace.addEventListener("keydown", keyNote);

// This addEventListener fires when user click plus button alternately
// Here classList will toggle between class names and display and hide the input
faPlus.addEventListener("click", function() {
	inputPlace.classList.toggle('inputDisplay');
});

// load the function when page loads
todoDelete();
