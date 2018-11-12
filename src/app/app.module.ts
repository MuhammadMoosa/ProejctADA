import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { AssingmentComponent } from './assingment/assingment.component';
import { AppHolderComponent } from './app-holder/app-holder.component';
import { LoginComponent } from './login/login.component';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabNavComponent,
    SubHeaderComponent,
    AssingmentComponent,
    AppHolderComponent,
    LoginComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
