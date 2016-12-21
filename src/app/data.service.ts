import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { IData } from './data';

@Injectable()
export class DataService {
  
  public items: FirebaseListObservable<IData[]>;
  
  constructor(private af: AngularFire) {
    this.items = af.database.list('/otlReact');
  }
  
  

  firebaseConfig: {
    apiKey: 'AIzaSyBG6RABAtYE_59MiD9j2-L_Z4C5i3rJOZY',
    authDomain: 'otl-react.firebaseapp.com',
    databaseURL: 'https://otl-react.firebaseio.com',
    storageBucket: 'otl-react.appspot.com'
  };

}

