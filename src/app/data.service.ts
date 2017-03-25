import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseConfig } from './firebase-config-object';

import { IData } from './data';

export const firebaseConfig = FirebaseConfig;

@Injectable()
export class DataService {
  
  
  public items: FirebaseListObservable<IData[]>;
  
  constructor(private af: AngularFire) {
    this.items = af.database.list('/otlReact');
  }


}
