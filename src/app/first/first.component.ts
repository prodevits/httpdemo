import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../services/myHttp.service';
import { State } from '../models/state.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  states:State[];
  constructor(private http:MyHttpService) { }

  ngOnInit() {
    this.http.getStates().subscribe((data)=>this.states=data);
  }

}
