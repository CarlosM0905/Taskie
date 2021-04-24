import { HttpClient, HttpParams } from '@angular/common/http';
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

  async getTasks(user_id: number): Promise<any> {
    const params = new HttpParams().set('user_id', user_id.toString())
    return await this.http.get(`${this.URL}`, { params }).toPromise()
  }

  async createTask(user_id: number, task: Task, file: File) {

    try {
      const image_url = await this.uploadPictureTask(file);

      const body = {
        user_id,
        title: task.task_title,
        description: task.task_description,
        image_url
      }

      return await this.http.post(this.URL, body).toPromise();
    } catch (error) {
      console.log(error);

    }
  }

  async updateTask(task_id: number, task: Task) {
    const body = {
      description: task.task_description,
      title: task.task_title,
      image_url: task.task_image_url
    }

    return await this.http.put(`${this.URL}/${task_id.toString()}`, body).toPromise();
  }

  async deleteTask(task_id: number) {
    return await this.http.delete(`${this.URL}/${task_id}`).toPromise()
  }

  async uploadPictureTask(file: File): Promise<any> {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dzoo253yt/upload';
    const formData = new FormData()
    formData.append('upload_preset', 'react-journal-app')
    formData.append('file', file)
    console.log(file);
    

    const {secure_url} = await this.http.post(cloudUrl, formData).toPromise<any>()
    
    if (secure_url) {
      return secure_url;
    }
  }

}
