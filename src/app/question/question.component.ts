import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit,OnDestroy {
  public name:string = ""
  public email:string = ""

  public points: number = 0;
  public currentQuestion: number = 0;
  public counter: number = 1800;
  public correctAnswers: number = 0;
  public questions: any = [];
  public quizCompleted = false;

  countDown: Subscription = new Subscription;

  constructor(private questionService:QuestionService) { }


  ngOnInit(): void {
    this.countDown = timer(0, 1000).subscribe(() => --this.counter);
    this.name = JSON.parse(localStorage.getItem("user")!).name
    this.email = JSON.parse(localStorage.getItem("user")!).email
    this.questions = this.questionService.getQuestions().subscribe(qs => {
      this.questions = qs.questions
    })
  }
  answer(currentQuestion:number, option: any){
    console.log(currentQuestion, option);

    if(currentQuestion == this.questions.length){
      this.quizCompleted = true;
    }

    if(option.correct){
      console.log("correct answer");
      this.points += 10;
      this.correctAnswers++;
    } else {
      console.log('wrong answer');
    }

    setTimeout(() => {
      this.currentQuestion++;
    }, 1000);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}

@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}