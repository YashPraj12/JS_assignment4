
function createTodoItem(todoText) {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox">
      <span>${todoText}</span>
      <button>Delete</button>
    `;
  
    const deleteBtn = li.querySelector("button");
    deleteBtn.addEventListener("click", () => {
      const List = document.getElementById("List");
      List.removeChild(li);
      playDingSound(); 
    });
  
    const checkbox = li.querySelector("input[type=checkbox]");
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed");
      playDingSound(); 
    });
  
    return li;
  }
  
 
  function addTodo() {
    const newTodoInput = document.getElementById("newTodo");
    const todoText = newTodoInput.value.trim();
  
    if (todoText !== "") {
      const List = document.getElementById("List");
      const newTodoItem = createTodoItem(todoText);
      List.appendChild(newTodoItem);
      newTodoInput.value = "";
      playDingSound();
    }
  }
  
  
  function playDingSound() {
    const audio = new Audio('ding.mp3');
    audio.play();
  }
  
 
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", addTodo);
  
 
  const newTodoInput = document.getElementById("newTodo");
  newTodoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  });
  

  const List = document.getElementById("List");
  List.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const listItem = event.target.parentElement;
      listItem.classList.toggle("deleted");
      if (listItem.classList.contains("deleted")) {
        const deleteBtn = listItem.querySelector("button");
        deleteBtn.textContent = "Undo";
      } else {
        listItem.remove();
      }
      playDingSound();
    }
  });
  