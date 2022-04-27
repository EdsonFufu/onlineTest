import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public name:string = ""
  public email:string = ""

  public points: number = 0;
  public currentQuestion: number = 0;
  public counter: number = 1800;
  public correctAnswers: number = 0;
  public questions: any = [];
  public quizCompleted = true;

  constructor() { }

  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem("user")!).name
    this.email = JSON.parse(localStorage.getItem("user")!).email
  }

}