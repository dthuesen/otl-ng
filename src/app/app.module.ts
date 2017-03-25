import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods, } from 'angularfire2';

// The configuration object for firebase with the access token. Not pushed to github!!!
import { FirebaseConfig } from './firebase-config-object';

import { Ng2RoutingModule } from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopicsTableComponent } from './topics-table/topics-table.component';
import { ShortListComponent } from './short-list/short-list.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';

import { DataService } from './data.service'

// PRIME-NG
import { ToolbarModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';

const firebaseConfig = FirebaseConfig;

// TODO - Not yet ready implemented
const myFirebaseAuthConfig = {     
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

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
    InputTextModule,
    PasswordModule,
    DataTableModule,
    SharedModule,
    // AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
  ],
  exports: [
    BrowserModule,
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
