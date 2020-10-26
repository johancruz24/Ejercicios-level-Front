import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../services/people.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(public peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeoples();
  } 

  getPeoples(){
    this.peopleService.getPeople().subscribe(
      res => {
        this.peopleService.peoples = res;
      },  
      err => console.log(err) 
    )
  }

  addPeople(form){

  }

}
