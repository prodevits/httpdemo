import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../services/myHttp.service';
import { State } from '../models/state.model';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  
  states:State[];
  cities:string[];
  state:string='0';
  city:string='0';
  constructor(private http:MyHttpService) { }

  ngOnInit() {
    this.http.getStates().subscribe((data)=>this.states=data);
  }

  loadCities(stateCode:string){
    console.log(stateCode);
    
    this.http.getCities(stateCode).subscribe((data)=>this.cities=data);
  }

}
