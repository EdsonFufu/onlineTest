import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title:string = "Welcome to the online quiz!"

  userForm:FormGroup = new FormGroup({

  })

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name : new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      email : new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(30)])
    })
  }

  submitForm(userForm:FormGroup){
    console.log("form submitted",userForm.value)
  }
  reset(){
    this.userForm.reset()
  }

}
