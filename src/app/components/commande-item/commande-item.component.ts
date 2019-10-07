import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commande-item',
  templateUrl: './commande-item.component.html',
  styleUrls: ['./commande-item.component.css']
})
export class CommandeItemComponent implements OnInit {

  @Input() option

  constructor() { }

  ngOnInit() {
  }

}
