function createLiElement(toDoItemText) {
  const liElement = document.createElement("li");
  const liTextNode = document.createTextNode(toDoItemText);
  liElement.appendChild(liTextNode);

  liElement.addEventListener("click", function(e) {
    let strike = (e.target.style.textDecoration = "line-through");
    if (liElement.value.length > 0) {
      return strike;
    }
  });

  return liElement;
}

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  const deleteText = "Delete";
  const buttonText = document.createTextNode(deleteText);
  deleteButton.appendChild(buttonText);
  return deleteButton;
}

document
  .getElementById("js-todo-input")
  .addEventListener("keydown", function(evt) {
    if (evt.code === "Enter") {
      evt.preventDefault();
      let toDoItem = evt.target.value;
      localStorageArray.push(toDoItem);
      window.localStorage.setItem("liText", JSON.stringify(localStorageArray));
      let ulElement = document.getElementById("todo-list");
      let liElement = createLiElement(evt.target.value);
      ulElement.appendChild(liElement);

      let deleteButton = createDeleteButton();

      deleteButton.addEventListener("click", function(e) {
        let removeEl = e.target;
        let liEl = removeEl.parentNode;
        ulElement.removeChild(liEl);
      });
      liElement.appendChild(deleteButton);

      // window.localStorage.setItem('liItems', JSON.stringify(localStorageArray));
      evt.target.value = "";

      // store new todo item in local storage
      // check to see if there is any new exiting array in local storage
      // if not, create a new array and add an item to it
      // if so, add new item to array
      // update local storage with new array
    }
  });

let localStorageArray = [];

function localStorageDisplay() {
  let getLocalStorage = JSON.parse(window.localStorage.getItem("liText"));
  for (i = 0; i < getLocalStorage.length; i++) {
    let ulElement = document.getElementById("todo-list");
    let liElement = createLiElement(getLocalStorage[i]);
    ulElement.appendChild(liElement);
    let deleteButton = createDeleteButton();

    deleteButton.addEventListener("click", function(e) {
      let removeEl = e.target;
      let liEl = removeEl.parentNode;
      ulElement.removeChild(liEl);
      for (i = 0; i < getLocalStorage.length; i++) {
    let buttonText = deleteButton.innerText;
    let liText = liElement.textContent;
    //    if (getLocalStorage[i] === liText + buttonText) {
       //   console.log(getLocalStorage[i] === liText);
      //   getLocalStorage.splice(getLocalStorage[i], 1);
        
       // }
      }
    });
    liElement.appendChild(deleteButton);
  }
}
localStorageDisplay();

//retrieve the to do list from local storage
//should have array in local storage
//loop through each item in array, and display items on page
