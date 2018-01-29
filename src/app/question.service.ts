import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class QuestionService {
  topics: Array<string>;
  questions: Array<any>;
  public questionsSubject = new BehaviorSubject(null);

  constructor() {
    this.questions = [
      {
        topic: 'History',
        questions: [
          {
            points: 100,
            prompt: 'Who is the king of China?',
            answer: 'Emperor Zhao',
            facts: 'He is 12 years old',
            status: 0
          },
          {
            points: 500,
            prompt: 'How old is China?',
            answer: '200 years',
            facts: 'China is the oldest country',
            status: 0
          },
          {
            points: 1000,
            prompt: 'Who ruled China in 1343 B.C.?',
            answer: 'Emperor Zhu',
            facts: 'Emperor Zhu was the best emperor',
            status: 0
          }
        ]
      },
      {
        topic: 'Food',
        questions: [
          {
            points: 100,
            prompt: 'What are noodles made of?',
            answer: 'Eggs',
            facts: 'Noodles tast yummy',
            status: 0
          },
          {
            points: 500,
            prompt: 'What is the tastiest Chinese food?',
            answer: 'Dumplings',
            facts: 'Dumplings are nutritious and delicious',
            status: 0
          },
          {
            points: 1000,
            prompt: 'How many dumplings can an average person consume in 2 hours?',
            answer: '452',
            facts: 'Dumplings taste better with dipping sauce',
            status: 0
          }
        ]
      },
      {
        topic: 'Geography',
        questions: [
          {
            points: 100,
            prompt: 'What continent is China in?',
            answer: 'Asia',
            facts: 'Asia is a pretty big place',
            status: 0
          },
          {
            points: 500,
            prompt: 'What is the capital of China?',
            answer: 'Beijing',
            facts: 'Beijing is a pretty cool place',
            status: 0
          },
          {
            points: 1000,
            prompt: 'How long would it take a person to walk across China?',
            answer: '14 months',
            facts: 'Don\'t try to walk across China',
            status: 0
          }
        ]
      }
    ];
  }

  updateStatus(topicIndex, questionIndex, questions) {
    if (questions[topicIndex].questions[questionIndex].status < 3) {
      questions[topicIndex].questions[questionIndex].status += 1;
      this.questionsSubject.next(questions);
    }
  }
}
