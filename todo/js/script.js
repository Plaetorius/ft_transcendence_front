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
    // Function to update the state and appearance of the checkbox and label
    function updateState() {
        var state = checkbox.getAttribute('data-state');

        switch (state) {
            case 'unchecked':
                checkbox.checked = false;
                checkbox.indeterminate = false;
                label.className = 'label-normal';
                break;
            case 'checked':
                checkbox.checked = true;
                checkbox.indeterminate = false;
                label.className = 'label-checked';
                break;
            case 'failed':
                checkbox.checked = false;
                checkbox.indeterminate = true;
                label.className = 'label-failed';
                break;
        }
    }

    // Event listener for the checkbox click
    checkbox.addEventListener('click', function() {
        var currentState = checkbox.getAttribute('data-state');
        var newState = currentState === 'unchecked' ? 'checked' :
                       currentState === 'checked' ? 'failed' : 'unchecked';
        checkbox.setAttribute('data-state', newState);
        updateState();
    });

    // Initialize the checkbox state
    updateState();
}

// Initialize checkboxes on page load
document.addEventListener('DOMContentLoaded', function() {
    var existingTasks = document.querySelectorAll('.todo-list input[type="checkbox"]');
    existingTasks.forEach(function(task) {
        var label = task.nextElementSibling;
        setupTaskCheckbox(task, label);
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
