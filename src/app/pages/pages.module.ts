/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { SidebarComponent } from './tasks/sidebar/sidebar.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { NgZorroModule } from 'src/ng-zorro/ng-zorro.module';

/*================ COMPONENTS ================*/

/*================ PIPES ================*/

/*================ MODULES ================*/

const PAGES_COMPONENTS = [
    PagesComponent,
    TasksComponent,
    TaskComponent,
    SidebarComponent,
    CreateTaskComponent,
    NoTaskComponent
];

@NgModule({
    declarations: [
        ...PAGES_COMPONENTS,

    ],
    exports: [
        ...PAGES_COMPONENTS
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        NgZorroModule
    ],
})
export class PagesModule { }
