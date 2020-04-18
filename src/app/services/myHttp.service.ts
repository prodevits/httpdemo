
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { State } from '../models/state.model';


@Injectable({providedIn: 'root'})
export class MyHttpService{
    constructor(private httpClient:HttpClient){}
    private  urlStates:string='http://demo.itvidya.in/indian-states.php';
    private urlCities='http://demo.itvidya.in/indian-cities.php?state=';

        getStates():Observable<State[]>{
            return this.httpClient.get<State[]>(this.urlStates);
        }

        getCities(stateCode:string):Observable<string[]>{
            return this.httpClient.get<string[]>(this.urlCities+stateCode);
        }
    

}