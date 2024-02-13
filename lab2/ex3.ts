import{tasksInterface} from './TasksInterface'

class Tasks implements tasksInterface {

    constructor() { }

    Tasks: string[] = [];

    addTask(task: string): number {
        let length: number;
        length = this.Tasks.push(task);
        console.log(task + " has been added to out Tasks Array.");
        return length;
    }

    listAllTasks() {
        this.Tasks.forEach(function (element) {
            console.log("Task " + element + " is on our Tasks Array.");
        })
    }


    deleteTask(task: string): number {
        let index: number;
        index = this.Tasks.indexOf(task, 0);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been deleted to out Tasks Array.");
        } else {
            console.log(task + " was not found in our Tasks Array.");
        }
        return Tasks.length;
    }
}

let myTodos = new Tasks();
myTodos.addTask("Eat Breakfast");
myTodos.addTask("Eat Lunch");
myTodos.addTask("Eat Dinner");
myTodos.addTask("Eat Dessert");
myTodos.listAllTasks();
myTodos.deleteTask("Eat Breakfast");
myTodos.deleteTask("Eat Snacks");
myTodos.listAllTasks();

