import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {

  public user;
  public tasks: Task;
  @Output() sendTaskSelected = new EventEmitter<Task>();
  @Input() reloadTask = new EventEmitter();
  constructor(
    private authService: AuthService,
    private taskService: TaskService,
    private notificationService: NotificationService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'))
   }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.reloadTask.currentValue){
      this.getTasks()
    }
  }

  ngOnInit(): void {
    this.getTasks()
  }

  logout(){
    this.authService.logout()
  }


  async getTasks() {
    const user_id = this.user.user_id;
    this.tasks = await this.taskService.getTasks(user_id)
    this.notificationService.createIconNotification('success', 'Felicitaciones', 'Se cargaron las tareas', 'bottomRight')
  }

  selectTask(task: Task){
    localStorage.setItem('taskSelected', JSON.stringify(task))
    this.sendTaskSelected.emit(task)
  }

}
