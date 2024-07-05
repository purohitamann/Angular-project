import { Component, Input } from '@angular/core';
import projectData from '../../data/data.json';
import { Project } from '../project-div/project.model';
@Component({
  selector: 'app-project-div',
  templateUrl: './project-div.component.html',
  styleUrls: ['./project-div.component.css']
})
export class ProjectDivComponent {
  projects:Project[] = projectData;
  filteredProjects: Project[] = this.projects;
  @Input() darkMode!: boolean;
  searchText: string = '';
  dataFound: boolean = true;
  filterProjects() {
    this.filteredProjects = this.projects.filter(projects =>
      projects.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
   
     if(this.filteredProjects.length > 0){
      this.dataFound = true;
     } else{
      this.dataFound = false;
     }
    
  }
}
