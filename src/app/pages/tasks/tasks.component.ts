import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // component task
  // component sidebar
  // component create-task
  // component no-task
  public taskSelected: Task;
  public reloadTasks = {};
  public createTask = {};
  constructor() { }

  ngOnInit(): void {
  }

  takeTaskSelected(task: Task){    
    this.taskSelected = task;
  }

  takeReload(reloadData: any){
    this.reloadTasks = reloadData
  }

  takeCreateNewTask(createTask:boolean){
    this.createTask = createTask
  }

}
