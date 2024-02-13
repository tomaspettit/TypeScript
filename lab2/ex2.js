var Tasks = [];
addTask("Eat Breakfast");
addTask("Eat Lunch");
addTask("Eat Dinner");
addTask("Eat Dessert");
listAllTasks();
deleteTask("Eat Breakfast");
deleteTask("Eat Snacks");
listAllTasks();
function addTask(task) {
    var length;
    length = Tasks.push(task);
    console.log(task + " has been added to out Tasks Array.");
    return length;
}
function listAllTasks() {
    Tasks.forEach(function (element) {
        console.log("Task " + element + " is on our Tasks Array.");
    });
}
function deleteTask(task) {
    var index;
    index = Tasks.indexOf(task, 0);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log(task + " has been deleted to out Tasks Array.");
    }
    else {
        console.log(task + " was not found in our Tasks Array.");
    }
    return Tasks.length;
}
