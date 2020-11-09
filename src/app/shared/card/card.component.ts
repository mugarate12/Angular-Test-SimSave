import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() titleColor: string;
  @Input() btnTextColor?: string;
  btnContent: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.title === 'URGENCY' || this.title === 'NURSING') {
      this.btnContent = 'Saiba mais'
    } else {
      this.btnContent = 'Em Breve'
    }
  }

}
