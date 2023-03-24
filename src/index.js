document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    form.addEventListener("submit", event => {
      event.preventDefault()
      createNewTask(event.target.newTask.value,event.target.dueDate.value);
      form.reset();
    })
  })
  function createNewTask(task,date){
    let list = document.createElement("li");
    let deleteButton =  document.createElement("button");
    deleteButton.addEventListener("click", handleDelete)
    deleteButton.textContent = " X ";
    list.textContent = ` ${task}  by  ${date}  `;
    list.appendChild(deleteButton);
    tasks.appendChild(list);
  }
  function handleDelete(event){
    event.target.parentNode.remove();
  }