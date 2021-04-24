/*================ IMPORTS ================*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { TasksComponent } from './tasks/tasks.component';

/*================ COMPONENTS ================*/

/*================ MODULES ================*/

const PAGES_ROUTES: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            {
                path: 'tasks',
                component: TasksComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(PAGES_ROUTES),
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule{}
