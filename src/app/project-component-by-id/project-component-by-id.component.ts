import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-component-by-id',
  templateUrl: './project-component-by-id.component.html',
  styleUrls: ['./project-component-by-id.component.css']
})
export class ProjectComponentByIdComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}
  projectUrl: any ;
  projectId: any = this.route.snapshot.paramMap.get('id') || 1;
  projectData: any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
      this.getProjectData();
      console.log(this.projectUrl);
    });
    
  }
  getProjectData() {
    let url = `../assets/data/project.json`;
    this.projectUrl= this.route.snapshot.params['id'] || '';
    this.http.get(url).subscribe((res: any) => {
      this.projectData = filterProjectsById(res.projects, this.projectId);
      console.log(this.projectData);
     
    });
  }
  close(){
    this.router.navigate(['/']);
  }
}


function filterProjectsById(projects: any, id: any) {
  return projects.find((project: any) => project.id == id);
}