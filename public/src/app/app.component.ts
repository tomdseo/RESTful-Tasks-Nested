import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Task Manager';
  newTask: any;
  tasks = [];
  selectedTasks = [];
  selectedTask: any;
  editClicked = false;
  editTaskID: string;
  editTask: any;

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    console.log("Showing all Tasks!");
    this.getTasksFromService();
    this.newTask = { title: "", description: ""};
    this.editTask = { title: "", description: ""};
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Showing all Tasks", data);
      // @ts-ignore
      this.tasks = data;
    })
  }

  onCreateTask() {
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(obj => {
      console.log("Task from Post Back!", obj);
    });
    this.newTask = { title: "", description: ""}
    this.getTasksFromService();
  }

  onShowDescription(task): void {
    console.log("Showing Task", task);
    this.selectedTasks.push(task);
    this.selectedTask = task;
  }

  onDeleteTask(id: string): void {
    console.log("This is the ID Passed", id);
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(obj => {
      console.log("Deleted this Task", obj);
    });
    this.getTasksFromService();
  }

  onEditClick(id: string): void {
    this.editTaskID = id;
    let observable = this._httpService.getDescription(this.editTaskID);
    observable.subscribe(listOfObj => {
      this.editTask = { title: listOfObj[0].title, description: listOfObj[0].description}
    });
    this.editClicked = true;
  }

  onEditTask() {
    let observable = this._httpService.editTask(this.editTaskID, this.editTask);
    observable.subscribe(obj => {
      console.log("Task from Post Back!", obj);
      this.editTask = { title: "", description: ""}
    });
    this.editClicked = false; //hides edit form
    this.getTasksFromService(); //shows all tasks
  }

}


