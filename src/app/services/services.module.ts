import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthService} from './auth.service';
import {TaskService} from './task.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     HttpClientModule
  ],
  providers: [
    AuthService,
    TaskService
  ]
})
export class ServicesModule { }
