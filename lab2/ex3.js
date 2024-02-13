"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tasks = /** @class */ (function () {
    function Tasks() {
        this.Tasks = [];
    }
    Tasks.prototype.addTask = function (task) {
        var length;
        length = this.Tasks.push(task);
        console.log(task + " has been added to out Tasks Array.");
        return length;
    };
    Tasks.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (element) {
            console.log("Task " + element + " is on our Tasks Array.");
        });
    };
    Tasks.prototype.deleteTask = function (task) {
        var index;
        index = this.Tasks.indexOf(task, 0);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been deleted to out Tasks Array.");
        }
        else {
            console.log(task + " was not found in our Tasks Array.");
        }
        return Tasks.length;
    };
    return Tasks;
}());
var myTodos = new Tasks();
myTodos.addTask("Eat Breakfast");
myTodos.addTask("Eat Lunch");
myTodos.addTask("Eat Dinner");
myTodos.addTask("Eat Dessert");
myTodos.listAllTasks();
myTodos.deleteTask("Eat Breakfast");
myTodos.deleteTask("Eat Snacks");
myTodos.listAllTasks();
