import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  optionsList = []

  constructor() { }

  ngOnInit() {

      this.optionsList = ["Devis à valider","Commandes validées","Historique des commandes","Feedbacks"]
  }

}
