import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  URL_API = 'http://localhost:4000/api/peoples'

  peoples  : People[];  
  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get<People[]>(this.URL_API);
    
  }
}
