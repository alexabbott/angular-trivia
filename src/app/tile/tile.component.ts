import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input('points') points: number;
  @Input('prompt') prompt: string;
  @Input('answer') answer: string;
  @Input('facts') facts: string;
  @Input('status') status: number;

  constructor() { }

  ngOnInit() {
  }

}
