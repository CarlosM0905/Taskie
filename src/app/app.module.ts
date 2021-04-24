/*================ IMPORTS ================*/
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

/*================ MODULES ================*/
import { NgZorroModule } from './../ng-zorro/ng-zorro.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';

import { AppRoutingModule } from './app.routes';

/*================ COMPONENTS ================*/
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    ComponentsModule,
    SharedModule,
    PagesModule,
    NgZorroModule,
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
