const createTaskForm = document.getElementById('create-task-form');

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  createTaskForm.addEventListener('submit',(event) => { 
    event.preventDefault();
    const userInput = event.target.querySelector('#new-task-description');
    const ul = document.getElementById('tasks');
    const li = document.createElement('li');
    li.innerText = userInput.value;
    ul.appendChild(li);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'x';
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click',() => {
          const result = confirm('Are you sure?');
          if (result){
            li.remove();
          }
        });
  });

});

