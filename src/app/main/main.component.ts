
import { Component ,Renderer2, Inject } from '@angular/core';
// import data from '../assets/data/content.json';
// import projectData from '../assets/data/project.json'; 
import { Project } from '../project-div/project.model';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'portfolio';
  projectData: { projects: Project[] } | null = null;
  // contact: any = null;
  name: string | null = null;
  location: string | null = null;
  info: any = null;
  blurs: any = null;
  darkMode = false;
  aboutData: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
    this.getProjectData();
  }

  getData() {
    let url = '../assets/data/content.json';
    this.http.get(url).subscribe((res: any) => {
     
      // this.contact = res.contact;
      this.name = res.info.title;
      this.location = res.info.location;
      this.info = res.info;
      this.blurs = res.info.blurs;
      this.aboutData=res;
      // console.log(res);
    });
  }
  getProjectData() {
    let url = '../assets/data/project.json';
    this.http.get(url).subscribe((res: any) => {
      this.projectData = { projects: res.projects}; 
    });
  }
}
