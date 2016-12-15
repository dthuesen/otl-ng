import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { Ng2RoutingModule } from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopicsTableComponent } from './topics-table/topics-table.component';
import { ShortListComponent } from './short-list/short-list.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';

import {ToolbarModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopicsTableComponent,
    ShortListComponent,
    AuthComponent,
    AboutComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RoutingModule,
    ToolbarModule,
    ButtonModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
