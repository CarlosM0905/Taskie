import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // username
  // name
  // email
  // password
  // repeat password
  // register with google
  public formRegister: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  async register() {
    const user: User = {
      username: this.formRegister.get('username').value,
      password: this.formRegister.get('password').value,
      email: this.formRegister.get('email').value,
      name: this.formRegister.get('name').value
    }

    const responseRegister = await this.authService.register(user);
    this.router.navigateByUrl('/login');
    console.log(responseRegister);
  }

}
