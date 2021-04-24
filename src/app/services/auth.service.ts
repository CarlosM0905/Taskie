import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = `${environment.BACKEND_URL}/auth` 

  constructor(public http: HttpClient, public router: Router) { }

  async login(user: User): Promise<any>{
    return await this.http.post(`${this.URL}/login`, user).toPromise();
  }

  async logout(){
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }

  async register(user: User) : Promise<any>{
    return await this.http.post(`${this.URL}/register`, user).toPromise();
  } 
}
