// Add Button
var addButton = document.getElementById("add-button");

addButton.addEventListener("click", function() {
    const taskname = prompt("Enter the task name");
    const lowercase_taskname = taskname.toLowerCase();
    const box = document.createElement("input");
    box.type = "checkbox";
    box.id=lowercase_taskname;
    box.name=lowercase_taskname;
    box.value=lowercase_taskname;
    const label = document.createElement("label");
    label.htmlFor=lowercase_taskname;
    label.appendChild(document.createTextNode(" " + taskname));
    const br = document.createElement("br");
    const element = document.getElementById("todo-fieldset");
    element.appendChild(box);
    element.appendChild(label);
    element.appendChild(br);
});

var span = document.getElementById("span-todo-1");
span.remove();