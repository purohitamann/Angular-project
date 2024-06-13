import { Component, Input } from '@angular/core';
import { projectData } from '../project-div/data';
@Component({
  selector: 'app-project-div',
  templateUrl: './project-div.component.html',
  styleUrls: ['./project-div.component.css']
})
export class ProjectDivComponent {
  projects = projectData;
  @Input() darkMode!: boolean;
}
