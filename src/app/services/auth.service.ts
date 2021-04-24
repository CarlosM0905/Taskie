import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, public router: Router) { }

  async login(user: User): Promise<any>{
    return await this.http.post(`/auth/login`, user).toPromise();
  }

  async logout(){
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }

  async register(user: User) : Promise<any>{
    return await this.http.post(`/auth/register`, user).toPromise();
  } 
}
