import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // username
  // password
  // google

  public formLogin: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }


  async login() {
    const user: User = {
      username: this.formLogin.get('username').value,
      password: this.formLogin.get('password').value,
    }

    const responseLogin = await this.authService.login(user);
    if(responseLogin.isLogged){
      localStorage.setItem('isLogged', JSON.stringify(responseLogin.isLogged))
      localStorage.setItem('user', JSON.stringify(responseLogin.user))
      this.router.navigateByUrl('/dashboard/tasks');
    }

    console.log(responseLogin);

    
  }

}
