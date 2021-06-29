function TODO(id, todo, status) {
      this.id = id;
      this.todo = todo;
      this.status = status;
}

let todoList = [];
const ul = document.querySelector(`.todos`);

function deleteTodo() {
      todoList = todoList.filter(
            (item) =>
                  item.id.toString() !== this.id);
      renderList();
}

function changeTodoStatus() {
      for (let item of todoList) {
            if (this.checked && item.id.toString() === this.id) item.status = true;
            if (!this.checked && item.id.toString() === this.id)
              item.status = false;
      }
      renderList();
}


const renderList = () => {
      ul.innerHTML = "";
      todoList.forEach((item) => {
            const checkbox = document.createElement(`input`);
            checkbox.type = "checkbox";
            checkbox.id = item.id;
            checkbox.checked = item.status;
            checkbox.addEventListener('change', changeTodoStatus);
            const label = document.createElement(`label`);
            label.htmlFor = item.id;
            label.innerText = item.todo;

            const span = document.createElement(`span`);
            span.appendChild(checkbox);
            span.appendChild(label);

            const img = document.createElement(`img`);
            img.id = item.id;
            if (item.status)
                  img.src = `assets/delete_forever_black_24dp.svg`;
            img.addEventListener('click', deleteTodo);
            
            const li = document.createElement(`li`);
            li.classList.add(`todo`);
            li.appendChild(span);
            li.appendChild(img);

            ul.appendChild(li);
      });
}



function addTodo() {
      const todoInput = document.querySelector(`.todo-input`);
      if (todoInput.value.trim()) {
            if (todoList.length !== 0) {
                  todoList.push(
                        new TODO(
                              todoList[todoList.length - 1].id + 1,
                              todoInput.value.trim(),
                              false
                    )
                  );
            } else {
                   todoList.push(
                         new TODO(
                               1,
                       todoInput.value.trim()
                     )
                   );
           }
            renderList();
      }
}

(() => {
      const addButton = document.querySelector(`.add-button`);
      addButton.addEventListener("click", addTodo);
})();

renderList();