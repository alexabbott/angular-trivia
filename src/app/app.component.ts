import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import { WindowRef } from './window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions: any;

  constructor(
    public questionService: QuestionService,
    private windowRef: WindowRef
  ) {
      if (JSON.parse(windowRef.nativeWindow.localStorage.getItem('questions'))) {
        this.questionService.questionsSubject.next(JSON.parse(windowRef.nativeWindow.localStorage.getItem('questions')));
      } else {
        this.questionService.questionsSubject.next(this.questionService.questions);
      }

      questionService.questionsSubject.subscribe((q) => {
        if (q) {
          this.questions = q;
          this.windowRef.nativeWindow.localStorage.setItem('questions', JSON.stringify(this.questions));
        } else {
          this.questions = questionService.questions;
          this.windowRef.nativeWindow.localStorage.setItem('questions', null);
        }
      });
  }

  reset() {
    this.questionService.questionsSubject.next(null);
  }
}