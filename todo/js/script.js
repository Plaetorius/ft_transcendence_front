// Add Button
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTask);

function addTask() {
    const taskname = prompt("Enter the task name");
    if (!taskname) return;
    const lowercase_taskname = taskname.toLowerCase().replace(/\s/g, "-");
    const div = document.createElement("div");
    div.id = lowercase_taskname;
    const button = document.createElement("button");
    button.id = "delete-" + lowercase_taskname;
    button.type = "button";
    button.className = "delete-button";
    button.title = "Delete?";
    button.innerHTML = "&#x2715;";
    button.addEventListener('click', function() {
        div.remove();
    });
    const box = document.createElement("input");
    box.type = "checkbox";
    box.id = lowercase_taskname;
    box.name = lowercase_taskname;
    box.value = lowercase_taskname;
    box.setAttribute('data-state', 'unchecked');
    const label = document.createElement("label");
    label.htmlFor = lowercase_taskname;
    label.appendChild(document.createTextNode(" " + taskname));
    label.className = 'label-normal';
    setupTaskCheckbox(box, label);
    div.appendChild(button);
    div.appendChild(box);
    div.appendChild(label);
    const element = document.getElementById("todo-fieldset");
    element.appendChild(div);
}


function setupTaskCheckbox(checkbox, label) {
    var isLabelClicked = false;

    // Function to update the state of the checkbox
    function updateState() {
        var state = checkbox.getAttribute('data-state');

        switch (state) {
            case 'unchecked':
                checkbox.checked = true;
                checkbox.setAttribute('data-state', 'checked');
                label.className = 'label-checked';
                break;
            case 'checked':
                checkbox.checked = false;
                checkbox.indeterminate = true;
                checkbox.setAttribute('data-state', 'failed');
                label.className = 'label-failed';
                break;
            case 'failed':
                checkbox.indeterminate = false;
                checkbox.setAttribute('data-state', 'unchecked');
                label.className = 'label-unchecked';
                break;
        }
    }

    // Handle mousedown event
    label.addEventListener('mousedown', function() {
        isLabelClicked = true;
    });

    // Handle mouseup event
    label.addEventListener('mouseup', function() {
        if (isLabelClicked) {
            isLabelClicked = false;
            updateState();
        }
    });

    // Handle mousedown event on the checkbox
    checkbox.addEventListener('mousedown', function(e) {
        if (e.target === checkbox) {
            e.preventDefault();
            updateState();
        }
    });
}


document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var existingTasks = document.querySelectorAll('.todo-list input[type="checkbox"]');
    existingTasks.forEach(function(task) {
        var label = task.nextElementSibling;
        setupTaskCheckbox(task, label);
    });
});