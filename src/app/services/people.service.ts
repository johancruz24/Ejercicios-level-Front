import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  URL_API = 'http://localhost:4000/api/peoples'

    
  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get(this.URL_API);
    
  }
}
