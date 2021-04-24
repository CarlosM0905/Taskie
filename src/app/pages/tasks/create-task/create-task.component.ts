import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';


function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit, OnChanges {
  
  @Input() taskSelected: Task;
  @Output() reloadTasklist = new EventEmitter()
  fileImage: File;
  fileImageUrl: string | ArrayBuffer;
  formTask: FormGroup;
  user; 
  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
   }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.taskSelected.currentValue) {
      this.formTask.patchValue({
        title: this.taskSelected.task_title,
        description: this.taskSelected.task_description
      })
    }
  }

  ngOnInit(): void {
    this.formTask = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
    })
  }



  async handleChangeFile(event){
    console.log(event.target.files);
    const filesImages = event.target.files;
    this.fileImage = filesImages[0]
    const result = await getBase64(this.fileImage);
    this.fileImageUrl = result;
    console.log(result);
    
  }

  async saveTask(){

    if(this.disableSave()){
      return;
    }

    const task: Task = {
      task_title: this.formTask.get('title').value,
      task_description: this.formTask.get('description').value
    }

    if(this.taskSelected){
      await this.taskService.updateTask(this.taskSelected.task_id,  task)
      this.reloadTasklist.emit({
        type: 'update',
        task: task
      })
    }
    else {
      await this.taskService.createTask(this.user.user_id, task, this.fileImage)
      this.reloadTasklist.emit({
        type: 'create',
        task: task
      })
    }
    
    this.formTask.patchValue({
      title: '',
      description: ''
    })
    this.fileImage = null;

    

  }

  async deleteTask(){
    if(this.taskSelected){
      this.taskService.deleteTask(this.taskSelected.task_id)
    }

    this.formTask.patchValue({
      title: '',
      description: ''
    })
    this.fileImage = null;

    this.reloadTasklist.emit({
      type: 'delete',
      task: this.taskSelected
    })

  }

  disableSave() {
    return this.formTask.invalid || !this.fileImage
  }

  startNewTask(){
    this.taskSelected = null;
    this.formTask.patchValue({
      title: '',
      description: ''
    })
    this.fileImage = null;
  }
  
}
