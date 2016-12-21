import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';

import { IData } from '../data'
import { DataService } from '../data.service'



@Component({
  selector: 'app-short-list',
  templateUrl: './short-list.component.html',
  styleUrls: ['./short-list.component.css']
})
export class ShortListComponent implements OnInit {
  
  items;
  
  constructor(private _dataService: DataService) {
    this.items = _dataService.items;
    
    console.log(this.items);
  }
  
  

  ngOnInit() {
  }

}
