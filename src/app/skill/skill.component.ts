import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }

  public skill : Skill

@Input()
skills : any

  ngOnInit() {
    this.skill = new Skill("Angular","https://paypite.org/wp-content/uploads/2018/08/angular-logo.png","https://angular.io/")
  }

}
