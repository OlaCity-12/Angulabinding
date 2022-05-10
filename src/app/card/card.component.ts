import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() btncolor = ""
  @Input() bgcolor = ""
  @Input() borderColor = "white"
  @Output() onColorChange: EventEmitter<any> = new EventEmitter()
  
  constructor() {}

  ngOnInit(): void {}

  changeColor() {
    this.borderColor = this.bgcolor
    this.onColorChange.emit()
    
  }
}
