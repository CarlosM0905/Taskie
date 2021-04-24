import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task.model'

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private URL = `${environment.BACKEND_URL}/tasks` 

  constructor(
    private http: HttpClient,
  ) { }

  getTasks(){

  }

  async createTask(user_id: number, task: Task, file: File){

    const image_url = await this.uploadPictureTask(file);

    const body = {
      user_id,
      title: task.task_title,
      description: task.task_description,
      image_url
    }

    return await this.http.post(this.URL, body).toPromise();
  }

  updateTasks(){

  }

  deleteTask(){

  }

  async uploadPictureTask(file: File): Promise<any> {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dzoo253yt/upload';
    const formData = new FormData()
    formData.append('upload_preset', 'react-journal-app')
    formData.append('file', file)

    const {status, data} = (await this.http.post(cloudUrl, formData).toPromise()) as any;
    if(status === 200){
      const {secure_url} = data;
      return secure_url;
    }
  }

}
