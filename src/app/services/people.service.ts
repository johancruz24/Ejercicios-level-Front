import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { People } from '../models/people';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
 
  URL_API = 'http://localhost:4000/api/peoples'

  selectedPeople: People={
    name: '',
    mail: '',
    km: null,
  }; 
  peoples  : People[];  
  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get<People[]>(this.URL_API);    
  }

  createPeople(people: People){
    return this.http.post(this.URL_API, people)

  }

  deletePeople(_id: String){
    return this.http.delete(`${this.URL_API}/${_id}`)   
  }
}
