import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../common/developer.model';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  constructor() { 

  }

  public developer : Developer 
  
  ngOnInit() {
    this.developer = new Developer("Pawlowski"," Valentin",26,"Homme","Jeune developpeur ambitieux",["Angular"])
  }

}
