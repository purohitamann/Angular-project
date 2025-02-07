import { Component, Input } from '@angular/core';
import { Project } from '../project-div/project.model'; 
import { LikeButtonService } from '../like-button.service';
import {Router} from '@angular/router';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor (private cardService: LikeButtonService, private router: Router,private viewportScroller: ViewportScroller) {
    
  }
  likeCard(elem: any){
    this.cardService.likeCard(elem);
  }
  @Input() project!: Project;
  @Input() darkMode!: boolean;

}
