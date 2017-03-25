# OTL Ng

## Instructions to this project:

### Installing Firebase and AngularFire
According to `http://codingthesmartway.com/angular-2-firebase-introduction/`

##### 1. Paste the settings in `firebase-config-object.ts` in the following form:

    export const firebaseConfig = {
      apiKey: '<your-key>',
      authDomain: '<your-project-authdomain>',
      databaseURL: '<your-database-URL>',
      storageBucket: '<your-storage-bucket>'
    };

##### 2. Add following two code lines to bottom of `typings.d.ts`:

    declare var require: any;
    declare var module: any;

##### 3. Add types property to compilerOptions configuration in `tsconfig.json`:

    {
      "compilerOptions": {
        [...],
        "types": [
          "firebase"
        ]
      }
    }
    
##### 4. Import AngularFireModule to `app.module.ts`:

    import { AngularFireModule } from 'angularfire2';

   
##### 5. Inject AgularFire in Component (in this case first `short-list.component.ts`:

First import the firebase configuration (because only steps 1 to 3 are not working)

        import { firebaseConfig } from '../environments/firebase.config';

And then import AngularFire

        import { AngularFire, FirebaseListObservable } from 'angularfire2';
    
... and then inject into that component:

    @Component({
      selector: 'app-root',
      templateUrl: 'app.component.html',
      styleUrls: ['app.component.css']
    })
    export class AppComponent {
      constructor(af: AngularFire) {
      }
    }


##### 6. Get access to the data in that component:

Declare an object of type `FirebaseListObservable<any[]>` and get the data with e.g. `this.items...`

          import { Component } from '@angular/core';import { AngularFire, FirebaseListObservable } from 'angularfire2';

          @Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
          })
          export class AppComponent {
            items: FirebaseListObservable<any[]>;        <--- here
            constructor(af: AngularFire) {
              this.items = af.database.list('/items');   <--- and here
            }
          }

##### 7. Print out the data in the template like this: 

    <ul>
      <li class="text" *ngFor="let item of items | async">
        {{item.summary}}
      </li>
    </ul>



### Now following: instructions from Angular CLI
-------------------------------------------------------------------------------

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

#### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

#### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).





