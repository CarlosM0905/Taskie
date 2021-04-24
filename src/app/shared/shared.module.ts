/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgZorroModule } from 'src/ng-zorro/ng-zorro.module';

/*================ COMPONENTS ================*/

/*================ PIPES ================*/

/*================ MODULES ================*/

const SHARED_COMPONENTS = [];

@NgModule({
  declarations: [
      ...SHARED_COMPONENTS,
      NotFoundComponent
  ],
  exports: [
      ...SHARED_COMPONENTS
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule,
      NgZorroModule
    ],
})
export class SharedModule {}
