/*===============> IMPORTS <===============*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgZorroModule } from 'src/ng-zorro/ng-zorro.module';

/*================ COMPONENTS ================*/

/*================ PIPE ================*/

/*================ MODULES ================*/

const AUTH_COMPONENTS = [
    LoginComponent,
    RegisterComponent
];

@NgModule({
    declarations: [
        ...AUTH_COMPONENTS,
    ],
    exports: [
        ...AUTH_COMPONENTS
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        NgZorroModule
      ],
  })
export class AuthModule{}

