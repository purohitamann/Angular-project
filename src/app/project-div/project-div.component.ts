import { Component, Input } from '@angular/core';
import  ProjectData  from '../../data/project.json';
import { Project } from '../project-div/project.model';
@Component({
  selector: 'app-project-div',
  templateUrl: './project-div.component.html',
  styleUrls: ['./project-div.component.css']
})
export class ProjectDivComponent {
  @Input() projectData!: { projects: Project[] };
   filteredProjects: Project[] = [];
  @Input() darkMode!: boolean;
  searchText: string = '';
  dataFound: boolean = true;
  ngOnInit() {
    this.filteredProjects = this.projectData.projects;
  }
  filterProjects() {
    this.filteredProjects = this.projectData.projects.filter(projects =>
      projects.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
   
     if(this.filteredProjects.length > 0){
      this.dataFound = true;
     } else{
      this.dataFound = false;
     }
    
  }
}
