import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  listService = []

  constructor() { }

  ngOnInit() {

    this.listService = [
      { categorie :"Quotidien"}, 
      { categorie :"Depannage"},
      { categorie :"Service au clients"},
      { categorie :"Grands projets"},
      { categorie :"Bien etre"},
      { categorie :"A la damande"}
    ]
  }

}
