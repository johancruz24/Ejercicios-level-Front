import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../services/people.service';
import {NgForm} from '@angular/forms';



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

  
  addPeople(form: NgForm){
    console.log(form.value.mail);
    
    
    
    var emailCompare =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var nameCompare =  /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

    var restultName = nameCompare.test(form.value.name);
    var restultMail = emailCompare.test(form.value.mail);

    console.log(restultName);
    console.log(restultMail);
    

    if(form.value.km <= 4 && form.value.km != null && form.value.km != 0){
      return alert("Let's Go, You must to walk more")
    }else if(form.value.km == null){
      return alert("The distance traveled must not have a null value")
    }else if(form.value.km == 0){
      return alert("The distance traveled must be greater than zero")
    }else if(form.value.name == ('')){
      return alert("Enter a value for the name field")
    }
    if(restultName != true){
      return alert("Please Enter a value for the name like Pepito Perez")
    }else if(form.value.mail == ('')){
      return alert("Enter a value for the Email field")
    }else if(restultMail != true){
      return alert("Please Enter a value for the Email like pepitoperez@xxxxxx.com")
    }else{
      this.peopleService.createPeople(form.value).subscribe(
        res => {
          this.getPeoples();
          form.reset();
          alert("Congratulations !!!")
        },
        err => console.error(err)
        
      )    

    }

    
  }

  deletePeople(id:string){
    if(confirm('Do you want to remove the record?')){
      this.peopleService.deletePeople(id)
      .subscribe(
        res => {
          this.getPeoples();
        },
        err => console.error(err)
      )
    }
  }

}
