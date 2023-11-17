// Add Button
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTask);

function addTask() {
    const taskname = prompt("Enter the task name");
    const lowercase_taskname = taskname.toLowerCase();
    const div = document.createElement("div");
    div.id = lowercase_taskname;
    const button = document.createElement("button");
    button.id = "delete-" + lowercase_taskname;
    button.className = "delete-button";
    button.title = "Delete?";
    button.innerHTML = "X";
    button.addEventListener('click', function() {
        this.parentNode.remove();
    });

    const box = document.createElement("input");
    box.type = "checkbox";
    box.id = lowercase_taskname;
    box.name = lowercase_taskname;
    box.value = lowercase_taskname;
    
    const label = document.createElement("label");
    label.htmlFor = lowercase_taskname;
    label.appendChild(document.createTextNode(" " + taskname));
    
    const element = document.getElementById("todo-fieldset");
    div.appendChild(button);
    div.appendChild(box);
    div.appendChild(label);
    element.appendChild(div);
};

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
