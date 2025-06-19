//example 1

//this keyword pointing a global element in arrow function

//this keyword pointing a current element in regular function

document.getElementById("changeText").addEventListener("click", () => {
  console.log(this);

  //   document.getElementById("myPara").innerHTML = "Hello, World!";
  //or
  let para = document.getElementById("myPara");
  para.textContent = "this para is changed";
});

//example 2

document.getElementById("highlightCity").addEventListener("click", () => {
  let city = document.getElementById("citiesList");
  city.firstElementChild.classList.add("highlight");
});

//example 3

document.getElementById("changeOrder").addEventListener("click", () => {
  let coffeetype = document.getElementById("coffeetype");
  coffeetype.textContent = "Expresso";
  coffeetype.style.backgroundColor = "brown";
});

//example 4

document.getElementById("addNewItem").addEventListener("click", () => {
  let newItem = document.createElement("li");

  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").append(newItem);
});

//example 5

document.getElementById("removeTask").addEventListener("click", () => {
  let taskList = document.getElementById("taskList");
  taskList.lastElementChild.remove();
});

//example 6

document.getElementById("clickMe").addEventListener("mouseout", () => {
  //   alert("chaicode");
});

//example 7

document.getElementById("teaList").addEventListener("click", (event) => {
  if (event.target && event.target.matches(".teaItem")) {
    alert("you selected: " + event.target.textContent);
  }
});

//example 8
document.getElementById("feedbackForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let feedback = document.getElementById("feedbackInput").value;
  document.getElementById("display").textContent = `feedback is: ${feedback}`;
});

//example 9

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//example 10
document.getElementById("toggleHighlight").addEventListener("click", () => {
  let desc = document.getElementById("desc");
  desc.classList.toggle("highlight");
});
