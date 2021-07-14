import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input() like = 0;
  @Output() result = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  showLike() {
    this.like++;
    this.result.emit(this.like);
  }
}
