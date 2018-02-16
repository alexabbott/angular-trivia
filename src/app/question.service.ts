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
        topic: 'history & tradition',
        questions: [
          {
            points: 50,
            prompt: '<h2>Out of the three which one of these is not an emperor?</h2> <ul><li>Qin Shi Huang</li><li>Xi Jinping</li><li>Kang Xi Di</li></ul>',
            answer: '<h2>Xi Jinping</h2><img class="img" src="../assets/xi.jpg">',
            facts: '<h3>From the Qin dynasty to the Qing dynasty, there were 557 emperors including the rulers of minor states.</h3><img class="img" src="../assets/emperors.gif">',
            status: 0,
            topic: 'history',
            dog: 1
          },
          {
            points: 100,
            prompt: '<h2>Which language is more widely spoken?</h2><ul><li>Cantonese</li><li>Mandarin</li><li>Shanghainese</li></ul>',
            answer: '<h2>Mandarin</h2><img class="img" src="../assets/mandarin.jpg">',
            facts: '<h3>There are 955 million native Mandarin speakers globally. That’s 14% of the world’s total population.</h3><img class="img" src="../assets/crowd.jpg">',
            status: 0,
            topic: 'history',
            dog: 2
          },
          {
            points: 500,
            prompt: '<h2>Why are fireworks used to celebrate Chinese New Year?</h2>',
            answer: '<h3>Fireworks are used to scare evil spirits. Most mainland Chinese believe that the flash and bang of firecrackers and fireworks scare away demons and evil ghosts.</h3>',
            facts: '<h3>China produces about 90% of the world\'s fireworks</h3><img class="img" src="../assets/fireworks.jpg">',
            status: 0,
            topic: 'history',
            dog: 3
          }
        ]
      },
      {
        topic: 'food',
        questions: [
          {
            points: 50,
            prompt: '<h2>Which of the following dishes is not an authentic Chinese recipe?</h2> <ul><li>Mapo tofu</li><li>General Tso’s chicken</li><li>Peking duck</li><li>scallion pancake</li><li>soup dumplings</li></ul>',
            answer: '<h2>General Tso\'s Chicken</h2><img class="img" src="../assets/tso.jpg">',
            facts: '<p>This very real general had absolutely nothing to do with the battered and sauced chicken that now bears his name. In fact, it’s unknown to the whole of Hunan province, Tso’s home.</p><img class="img" src="../assets/tso-man.jpeg">',
            status: 0,
            topic: 'food',
            dog: 4
          },
          {
            points: 100,
            prompt: '<h2>Name 3 types of noodles used in Chinese cooking</h2><img class="img" src="../assets/noodles.png">',
            answer: '<h3>Types of noodles:</h3><ul><li>cellophane noodles (made from mung bean starch)</li><li>egg flour noodles (made from eggs)</li><li>rice noodles (made from rice)</li></ul>',
            facts: '<h3>We’ll get to try 2 different types of chinese noodles for lunch today! Hand-pulled noodles and knife-sliced noodles from the northern region.</h3><img class="img" src="../assets/tasty.png">',
            status: 0,
            topic: 'food',
            dog: 5
          },
          {
            points: 500,
            prompt: '<h3>With more than 20 different types of spices within the Asian cuisine, in your opinion, which of the following Beyonders can take the most heat?</h3><img class="img" src="../assets/spicy.png">',
            answer: '<h3>Alex</h3><img class="img" src="../assets/alex.png">',
            facts: '<h4>Spiciness is popular in central and south China, including Sichuan, Hunan, Yunnan, and Guangxi provinces. That is said to be because climates in these regions are humid, making it difficult for perspiration to evaporate. Chilies are liberally used in their cuisines, and are believed to help eliminate moisture from the body, and thus increase health and comfort.</h4><img class="img" src="../assets/pepper.jpg">',
            status: 0,
            topic: 'food',
            dog: 6
          }
        ]
      },
      {
        topic: 'trends',
        questions: [
          {
            points: 50,
            prompt: '<h2>Is this hairstyle for real?</h2><img class="img" src="../assets/hairstyle.png">',
            answer: '<h2>YEP!</h2>',
            facts: '<p>As ridiculous as it seems, these hairstyles actually exist and all have historical references. Hairstyle trends define the fashion in both modern and ancient China. Back in the day, each Dynasty had its own distinguished look which defined its era. Some hairstyles symbolize status (img 3) and some are culturally driven either by historical background (img 1 and 4), or the local tales (img 2).</p><img class="img" src="../assets/hairstyles.png">',
            status: 0,
            topic: 'trends',
            dog: 7
          },
          {
            points: 100,
            prompt: '<h2>Which texture pattern is NOT common for Chinese new year?</h2><img class="img" src="../assets/patterns.png">',
            answer: '<h3>The first one (In the Dynasty era, only the king was allowed to wear gold clothes)</h3><img class="img" src="../assets/pattern.png">',
            facts: '<ul><li>Red – Fire: luck, happiness and joy.</li><li>Yellow-earth: Royalty and prosperity</li><li>Black - water: Destruction, evil, cruelty and suffering</li><li>White - Metal: Purity</li><li>Blue - Wood: Spring and immortality</li></ul><img class="img" src="../assets/graph.png">',
            status: 0,
            topic: 'trends',
            dog: 8
          },
          {
            points: 500,
            prompt: '<h2>Which greeting is NOT for Chinese New Year?</h2><img class="img" src="../assets/seals.png">',
            answer: '<h2>Middle one (It’s a greeting for marriage)</h2><img class="img" src="../assets/seal.png">',
            facts: '<p>Spring festival couplets are the most common and important customs when celebrating Chinese New Year. Many people tape them to their front doors for good luck and as festive decoration for the coming spring. The couplet is a pair of lines of poetry which adhere to certain rules. The easiest way to remember the rule is that poetry must related, rhyme and contain the same number of characters. The middle 4 characters have to build a word that either answers or summarizes the pairing poetry.</p><img class="img" src="../assets/badge.png">',
            status: 0,
            topic: 'trends',
            dog: 9
          }
        ]
      }
    ];
  }

  updateStatus(topicIndex, questionIndex, questions) {
    if (questions[topicIndex].questions[questionIndex].status < 4) {
      questions[topicIndex].questions[questionIndex].status += 1;
      this.questionsSubject.next(questions);
    }
  }
}
