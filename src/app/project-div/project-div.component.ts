import { Component, Input } from '@angular/core';
// import  ProjectData  from '../../assets/data/project.json';
import { Project } from '../project-div/project.model';
import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient) {}

  ngOnInit() {
  
    this.getProjectData();
    
  
  }
  // getProjectData() {
  //   let url = '../assets/data/project.json';
  //   this.http.get(url).subscribe((res: any) => {
  //     this.projectData = { projects: res.projects}; 
  //   });
  // }
  getProjectData() {
    let url = '../assets/data/project.json';
    this.http.get(url).subscribe((res: any) => {
      this.projectData = { projects: res.projects };
      this.filteredProjects = this.projectData.projects;
      if(this.filteredProjects.length > 0){
        this.dataFound = true;
      } else{
        this.dataFound = false;
      }
    });
  }
}
